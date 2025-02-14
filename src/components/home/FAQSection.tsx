import { FAQItem } from "../ui/faq-item";

export function FAQSection() {
  const faqs = [
    {
      question: "Which plan is right for me?",
    },
    {
      question: "Will I get an invoice?",
    },
    {
      question: "Which payment methods are accepted?",
    },
    {
      question: "Can I try Fleek without a card on file?",
    },
    {
      question: "Can I upgrade or downgrade at any time?",
    },
    {
      question: "What happens if I cancel my subscription?",
    },
  ];

  return (
    <section className="w-full overflow-hidden text-[#010101] px-[236px] py-[88px] border-t border-[#3A3A3A] max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <h2 className="text-[52px] font-semibold max-md:max-w-full max-md:text-[40px]">
            FAQ
          </h2>
          <p className="text-lg font-medium leading-none mt-6 max-md:max-w-full">
            Solutions to many of our most commonly asked questions.
          </p>
        </div>
      </div>
      <div className="w-full text-lg font-medium leading-none mt-12 max-md:max-w-full max-md:mt-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            className={index < faqs.length - 1 ? "mb-6" : ""}
          />
        ))}
      </div>
    </section>
  );
}
