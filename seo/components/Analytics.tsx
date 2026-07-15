import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_ID = import.meta.env.VITE_GA_ID || '';
const GTM_ID = import.meta.env.VITE_GTM_ID || '';
const PIXEL_ID = import.meta.env.VITE_PIXEL_ID || '';

export const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. GA4 PageView tracking on route change
    if (GA_ID && window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search + location.hash,
      });
    }

    // 2. Meta Pixel PageView tracking on route change
    if (PIXEL_ID && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  useEffect(() => {
    // Initial script injections (run once on mount)

    // A. Google Tag Manager
    if (GTM_ID && !document.getElementById('gtm-script-tag')) {
      const gtmScript = document.createElement('script');
      gtmScript.id = 'gtm-script-tag';
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(gtmScript);
    }

    // B. Google Analytics 4
    if (GA_ID && !document.getElementById('ga-script-lib')) {
      const gaLib = document.createElement('script');
      gaLib.id = 'ga-script-lib';
      gaLib.async = true;
      gaLib.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(gaLib);

      const gaScript = document.createElement('script');
      gaScript.id = 'ga-script-inline';
      gaScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `;
      document.head.appendChild(gaScript);
    }

    // C. Meta Pixel
    if (PIXEL_ID && !document.getElementById('meta-pixel-script')) {
      const pixelScript = document.createElement('script');
      pixelScript.id = 'meta-pixel-script';
      pixelScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript);
    }
  }, []);

  return null;
};
export default Analytics;
