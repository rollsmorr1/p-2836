import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  className?: string;
}

export function FeatureCard({ icon, title, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "border border-[#3A3A3A] shadow-[0px_2px_8px_0px_rgba(26,26,26,0.25)] bg-black min-w-60 w-[325px] px-6 py-8 rounded-[32px]",
        className,
      )}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="aspect-[1] object-contain w-[60px]"
      />
      <h3 className="text-[38px] text-[#010101] font-medium leading-[38px] mt-4 whitespace-pre-line">
        {title}
      </h3>
    </div>
  );
}
