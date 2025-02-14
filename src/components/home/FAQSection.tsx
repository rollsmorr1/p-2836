
import { FAQItem } from "../ui/faq-item";

export function FAQSection() {
  const faqs = [
    {
      question: "Which plan is right for me?",
      answer: "If you're looking for basic agent hosting with standard security features, our Standard plan is perfect for testing and development. For enterprise-grade protection and maximum security, our TEE Agent Hosting plan offers advanced features like Trusted Execution Environment and end-to-end encryption."
    },
    {
      question: "Will I get an invoice?",
      answer: "Yes, you'll receive a detailed invoice for every billing cycle. All invoices are automatically generated and sent to your registered email address, including itemized charges and payment details."
    },
    {
      question: "Which payment methods are accepted?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers. Contact our sales team for custom payment arrangements."
    },
    {
      question: "Can I try Fleek without a card on file?",
      answer: "Yes! You can sign up and explore our platform without adding payment information. We offer a free tier that lets you test our basic features and understand how our service works."
    },
    {
      question: "Can I upgrade or downgrade at any time?",
      answer: "Absolutely! You can change your plan at any time. Changes take effect immediately, and your billing will be prorated based on your usage. There are no penalties or fees for changing plans."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "If you cancel your subscription, you'll continue to have access to your plan until the end of your current billing period. We don't offer refunds for partial months, but you won't be charged again after cancellation."
    }
  ];

  return (
    <section className="w-full overflow-hidden text-white px-[236px] py-[88px] border-t border-[#3A3A3A] max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <h2 className="text-[52px] font-semibold max-md:max-w-full max-md:text-[40px]">
            FAQ
          </h2>
          <p className="text-lg text-white/70 font-medium leading-none mt-6 max-md:max-w-full">
            Solutions to many of our most commonly asked questions.
          </p>
        </div>
      </div>
      <div className="w-full text-lg font-medium leading-none mt-12 max-md:max-w-full max-md:mt-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            className={index < faqs.length - 1 ? "mb-6" : ""}
          />
        ))}
      </div>
    </section>
  );
}
