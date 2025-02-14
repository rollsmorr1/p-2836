
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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
          className="flex w-full items-center justify-between flex-wrap text-lg font-medium leading-none text-white"
        >
          <span className="flex-1 text-left">{question}</span>
          <ChevronDown 
            className={cn(
              "w-6 h-6 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )}
          />
        </button>
        {isOpen && answer && (
          <p className="mt-4 text-sm text-white/70">{answer}</p>
        )}
      </div>
      <div className="border-t border-[#3A3A3A] mt-6" />
    </div>
  );
}
