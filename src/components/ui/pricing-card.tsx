
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  ctaText,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "border min-w-60 flex-1 shrink basis-[0%] p-4 rounded-xl",
        highlighted ? "border-[#FFE629]" : "border-[#3A3A3A]",
        className,
      )}
    >
      <div className="w-full font-bold">
        <div className="flex w-full flex-col items-stretch justify-center">
          <h3 className="text-lg leading-none text-white">{title}</h3>
          <p className="text-sm font-normal leading-none mt-2 text-white/70">
            {description}
          </p>
          <div className="text-[34px] leading-none mt-2">
            <span className="font-medium text-lg leading-6 text-white">$</span>
            <span className="text-white">{price}</span>
            <span className="font-medium text-lg leading-6 text-white/70">
              {" "}
              per agent /mo
            </span>
          </div>
        </div>
        <div className="border-t border-[#3A3A3A] mt-4" />
      </div>
      <ul className="mt-4 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm font-normal leading-none text-white/70"
          >
            <span className="text-[#FFE629]">•</span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full min-h-11 text-sm font-medium text-center leading-none mt-4 px-3 rounded-xl",
          highlighted
            ? "bg-[#FFE629] text-black"
            : "border border-[#606060] text-white",
        )}
      >
        {ctaText}
      </button>
    </div>
  );
}
