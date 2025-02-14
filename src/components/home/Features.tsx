
import { FeatureCard } from "../ui/feature-card";

export function Features() {
  const topFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/c57dd082c2601a1078a4d3edb2bf4c34918fb82e8b15449f4beb32c6a8428bf9",
      title: "Quick Templates",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/0c09906a27a91229f217e8f9221c2f1e5f5c707b667f5da3f084f9ff63f9b76a",
      title: "Form\nBuilder",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/4c4569a90f3a66545349584a4033aee9f2ea4f062d774d82e375beec155132c5",
      title: "Code\nBuilder",
    },
  ];

  const bottomFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/8baa06bd30f86be01fba2c52a59a7df6e077f73ada29be48c19aedb40011db8d",
      title: "Powerful Integrations",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/38a8b8919c17c267f97bbbff5d58ce744d25633df2af4404ee04b8cb206bdc31",
      title: "Personalized Agents",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/d192d591664472086a67665f1b228859a34591447dbd59c3744e1ceea7a3a95b",
      title: "Smart\nInsights",
    },
  ];

  return (
    <section className="mt-12 mb-[76px] max-md:mt-10 max-md:max-w-full">
      <div className="flex items-stretch gap-4 flex-wrap max-md:max-w-full justify-center">
        {topFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex items-stretch gap-4 flex-wrap mt-4 max-md:max-w-full justify-center">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
