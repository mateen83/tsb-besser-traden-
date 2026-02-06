import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are your signals really that profitable?",
    answer: "Yes! Our signals have a consistent win rate of 87% or higher. We provide full transparency with our results, and you can see real member testimonials and verified trading results on our platform. Many of our members have turned trading into a full-time income source.",
  },
  {
    question: "Are the signals really completely free?",
    answer: "Absolutely! Our basic signals are 100% free. We believe everyone should have access to quality trading education. We do offer premium features for those who want additional benefits like automated trading and one-on-one coaching, but our core signals remain free forever.",
  },
  {
    question: "What if I have no trading experience?",
    answer: "That's perfectly fine! In fact, many of our most successful members started as complete beginners. We provide comprehensive training materials, live coaching calls, and a supportive community to help you learn. Our signals come with detailed explanations so you understand not just what to trade, but why.",
  },
  {
    question: "How can I get started?",
    answer: "Getting started is easy! Simply click the 'Join FREE Group' button to join our community. You'll get immediate access to our trading signals, educational content, and supportive community. No credit card required, no hidden fees.",
  },
  {
    question: "What if I want to learn trading myself?",
    answer: "We fully support that goal! While our signals help you profit immediately, we also provide extensive educational resources to help you become an independent trader. Our coaching calls cover trading strategies, technical analysis, and risk management. Many members use our signals while learning, then transition to trading independently with confidence.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't see your question here, join our community and ask!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
