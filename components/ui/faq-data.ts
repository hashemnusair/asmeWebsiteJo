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
      answer: "Becoming an ASME member gives you access to valuable resources at a low cost. <b>If you are a first-year student, your first year of membership is free</b>. For other students, the annual membership fee is $13.5 USD when using our discount code: 'SECTION'. Membership also provides discounted access to local conferences, training events, and other ASME programs. You unlock benefits like online courses, technical articles, journals, e-books, and savings on books and conference fees. You also become eligible to join global student competitions, attend conferences, and take part in career-development webinars. <b>In addition, ASME members receive the invitation to register first when the chapter announces new activities.</b>",
    },
    {
      question: "How do I become a member?",
      answer: "You can become an ASME member by registering through the official ASME Student Membership page at:\n <a href='https://www.asme.org/membership/student-membership' target="_blank">ASME Student Membership Page</a>.\nJust create an account using your personal email and fill in your basic information. First-year students receive their first year of national membership for free, while others pay a low annual fee. Once you complete the registration, you immediately gain access to all ASME student benefits. If you need any help during the process, you can reach us by searching asme_uj on LinkedIn or Instagram.",
    },
  ],
  volunteering: [
    {
      question: "What is an ASME volunteer?",
      answer: "An ASME volunteer is a student who helps the chapter carry out its activities and events. Volunteers assist with tasks such as organizing sessions, preparing materials, handling registrations, communicating with participants, and supporting coordination on the day of an activity. The role is flexible, so students can contribute in areas that match their interests and available time. It’s a practical way to get involved, support the chapter’s work, and gain useful experience along the way.",
    },
    {
      question: "Why should I become a volunteer?",
      answer: "Answer to be added soon.",
    },
    {
      question: "How do I become a volunteer?",
      answer: "Answer to be added soon.",
    },
  ],
  general: [
    {
      question: "What kind of events does ASME organize? (e.g. workshops, competitions, company visits, guest lectures)",
      answer: "ASME organizes a variety of activities designed to help students develop their technical and professional skills. These may include training sessions, hands-on workshops, technical talks, company or facility visits, student competitions, and community or outreach events. The goal is to give students opportunities to learn, practice new skills, and engage with the engineering field in meaningful ways.",
    },
    {
      question: "Can I be both a volunteer and a member?",
      answer: "Yes, you can. Many students choose to be members to access ASME’s resources and opportunities, and they volunteer at the same time to contribute to the chapter’s activities. Volunteering does not affect your membership status, and both roles complement each other well. Being involved in both allows you to participate more actively, develop additional skills, and stay engaged with the chapter’s work.",
    },
    {
      question: "Do I need to be a mechanical engineering student to join?",
      answer: "Answer to be added soon.",
    },
  ],
};
