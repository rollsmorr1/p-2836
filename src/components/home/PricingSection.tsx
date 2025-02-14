import { PricingCard } from "../ui/pricing-card";

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Standard Agent Hosting",
      description: "Simple and efficient agent hosting solution - Coming Soon!",
      price: "10",
      features: [
        { text: "Standard security features" },
        { text: "Basic encryption" },
        { text: "Zero DevOps required" },
        { text: "Perfect for testing and development" },
      ],
      ctaText: "Coming Soon!",
    },
    {
      title: "TEE Agent Hosting",
      description:
        "Maximum security & privacy with Trusted Execution Environments.",
      price: "20",
      features: [
        { text: "Trusted Execution Environment (TEE)" },
        { text: "End-to-End Encryption" },
        { text: "Tamper-proof execution" },
        { text: "Zero DevOps required" },
      ],
      ctaText: "Start Hosting Now",
      highlighted: true,
    },
  ];

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch text-[#010101] px-[217px] py-[72px] border-t border-[#3A3A3A] max-md:max-w-full max-md:px-5">
      <h2 className="text-[52px] font-semibold text-center self-center max-md:text-[40px]">
        Pricing
      </h2>
      <div className="flex min-h-[374px] w-full gap-5 flex-wrap mt-[70px] max-md:max-w-full max-md:mt-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
