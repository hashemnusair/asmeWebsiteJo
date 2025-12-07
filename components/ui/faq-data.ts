export type FAQSection = "membership" | "volunteering" | "general";

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqSections: { id: FAQSection; title: string }[] = [
  { id: "membership", title: "Membership" },
  { id: "volunteering", title: "Volunteering" },
  { id: "general", title: "General" },
];

export const faqs: Record<FAQSection, FAQItem[]> = {
  membership: [
    {
      question: "What is an ASME member?",
      answer: "An ASME member is a student who officially joins the American Society of Mechanical Engineers and gains access to ASME’s global resources, programs, and student opportunities. Membership connects you to a professional engineering community and provides tools to support your academic and career development.",
    },
    {
      question: "Why should I become a member?",
      answer: "Answer to be added soon.",
    },
    {
      question: "How do I become a member?",
      answer: "Answer to be added soon.",
    },
    {
      question: "How does becoming a member benefit me?",
      answer: "Answer to be added soon.",
    },
  ],
  volunteering: [
    {
      question: "What is an ASME volunteer?",
      answer: "Answer to be added soon.",
    },
    {
      question: "Why should I become a volunteer?",
      answer: "Answer to be added soon.",
    },
    {
      question: "How do I become a volunteer?",
      answer: "Answer to be added soon.",
    },
    {
      question: "How does volunteering benefit me?",
      answer: "Answer to be added soon.",
    },
  ],
  general: [
    {
      question: "What kind of events does ASME organize? (e.g. workshops, competitions, company visits, guest lectures)",
      answer: "Answer to be added soon.",
    },
    {
      question: "Can I be both a volunteer and a member?",
      answer: "Answer to be added soon.",
    },
    {
      question: "Do I need to be a mechanical engineering student to join?",
      answer: "Answer to be added soon.",
    },
  ],
};
