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
      answer: "An ASME member is a student who officially joins the American Society of Mechanical Engineers and becomes part of a global engineering community. Members get access to helpful resources such as online learning courses, technical articles, career tools, and updates on industry trends. They can also take part in student competitions, conferences, and skill-building programs offered by ASME. Being a member means you’re connected to a network that supports your growth as an engineering student.",
    },
    {
      question: "Why should I become a member?",
      answer: "Becoming an ASME member gives you access to valuable resources at a low cost. If you are a first-year (freshman) student, your first year of national membership is free. For other students, the annual national membership fee is about US $25.      With membership you unlock benefits like discounted or free online courses, access to a library of technical articles, journals, and e-books, and savings on books and conference fees.You also become eligible to join student competitions, attend conferences, and take part in career-development webinars, all of which can strengthen your résumé and help you explore different branches of engineering.",
    },
    {
      question: "How do I become a member?",
      answer: "You can become an ASME member by registering through the official ASME Student Membership page at: https://www.asme.org/membership/student-membership. Just create an account using your university email and fill in your basic information. First-year students receive their first year of national membership for free, while others pay a low annual fee. Once you complete the registration, you immediately gain access to all ASME student benefits.",
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
