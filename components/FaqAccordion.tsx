import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-slate-200 rounded-lg bg-white overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-slate-50 transition-colors"
            onClick={() => toggle(index)}
          >
            <span className="font-medium text-slate-800">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-primary-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>
          
          {openIndex === index && (
            <div className="p-4 pt-0 text-slate-600 bg-slate-50 border-t border-slate-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};