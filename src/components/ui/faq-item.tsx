import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer?: string;
  className?: string;
}

export function FAQItem({ question, answer, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between flex-wrap text-lg font-medium leading-none text-[#010101]"
        >
          <span className="flex-1 text-left">{question}</span>
          <img
            src={
              isOpen
                ? "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/e12f1aeaf5d3587b82fad1a439992ff19c3a398a62de685163c09e3b5632920f"
                : "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/6152d74f97da03cb4b80b6e98a5b4662eeca0141f23e4a50d09371bcf1647260"
            }
            alt=""
            className="w-6 h-6"
          />
        </button>
        {isOpen && answer && (
          <p className="mt-4 text-sm text-[#010101]">{answer}</p>
        )}
      </div>
      <div className="border-t border-[#3A3A3A] mt-6" />
    </div>
  );
}
