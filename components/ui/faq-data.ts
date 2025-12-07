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
      answer: "<b>An ASME member</b> is a student who officially joins the American Society of Mechanical Engineers and becomes part of a global engineering community. Members get access to helpful resources such as <b>online learning courses, technical articles, career tools,</b> and <b>updates on industry trends</b>. They can also take part in <b>student competitions, conferences,</b> and <b>skill-building programs</b> offered by ASME. Being a member means you’re connected to a network that supports your growth as an engineering student.",
    },
    {
      question: "Why should I become a member?",
      answer: "Becoming an ASME member gives you access to valuable resources at a low cost. <b>If you are a first-year student, your first year of membership is free</b>. For other students, the annual membership fee is $13.5 USD when using our discount code: 'SECTION'. Membership also provides discounted access to local conferences, training events, and other ASME programs. You unlock benefits like online courses, technical articles, journals, e-books, and savings on books and conference fees. You also become eligible to join global student competitions, attend conferences, and take part in career-development webinars. <b>In addition, ASME members receive the invitation to register first when the chapter announces new activities, which often have limited steas.</b>",
    },
    {
      question: "How do I become a member?",
      answer: "You can become an ASME member by registering through the official ASME Student Membership page at:\n<b><a href=\"https://www.asme.org/membership/student-membership\" target=\"_blank\">ASME Student Membership Page</a></b>.\nJust create an account using your personal email and fill in your basic information. First-year students receive their first year of national membership for free, while others pay a low annual fee. Once you complete the registration, you immediately gain access to all ASME student benefits.\n<b>If you have registered for a membership, please fill out this <a href=\"https://forms.cloud.microsoft/r/4PS0MZ3jqF\" target=\"_blank\">form</a> so we can add you to our membership group</b>. If you need any help during the process, you can reach us by searching asme_uj on LinkedIn or Instagram.",

    },
  ],
  volunteering: [
    {
      question: "What is an ASME volunteer?",
      answer: "An <b>ASME volunteer</b> is a student who actively contributes to the chapter’s activities and helps ensure events run smoothly. Volunteers have specific responsibilities such as <b>organizing sessions</b>, <b>preparing materials</b>, <b>handling registrations</b>, or supporting coordination during activities. You will be part of a dedicated team, so each volunteer focuses on the tasks assigned to their team. The role is flexible, allowing you to contribute in areas that match your interests and available time. It’s a practical way to get involved, support the chapter’s work, and gain useful experience along the way.",
    },
    {
      question: "Why should I become a volunteer?",
      answer: "Volunteering gives you the chance to develop practical skills such as <b>teamwork</b>, <b>communication</b>, <b>organization</b>, and <b>leadership</b>. You also get to be part of the events you help organize, which gives you a closer, more involved experience in each activity. It shows initiative and responsibility, reflecting your willingness to contribute beyond classroom work. Volunteering also allows you to build connections with other students and with <b>professionals in the industry</b>, helping you grow within a supportive and motivated community.",
    },
    {
      question: "How do I become a volunteer?",
      answer: "You can become a volunteer by filling out our volunteer form:\n<b><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSe37vz3hnoqDVAWPKJhhlzfaCAlVOTEtptEC0PxkkbSu6F79w/viewform?usp=sharing&ouid=105362340778220722368\" target=\"_blank\">Volunteer Form</a></b>.\nAfter submitting the form, you will be invited to a short interview that helps us understand your interests and assign you to the most suitable team.\nAfter the interview, you’ll receive all the information you need to begin your role.",
    },
  ],
  general: [
    {
      question: "What kind of events does ASME organize? (e.g. workshops, competitions, company visits, guest lectures)",
      answer: "ASME organizes a variety of activities designed to help students develop their technical and professional skills. These may include <b>training sessions</b>, <b>hands-on workshops</b>, <b>technical talks</b>, <b>company or facility visits</b>, <b>student competitions</b>, and <b>community or outreach events</b>. The goal is to give students opportunities to learn, practice new skills, and engage with the engineering field in meaningful ways.",
    },
    {
      question: "Can I be both a volunteer and a member?",
      answer: "Yes, you can. Many students choose to be members to access ASME’s <b>resources and opportunities</b>, and they volunteer at the same time to contribute to the chapter’s activities. Volunteering does not affect your membership status, and both roles complement each other well. Being involved in both allows you to participate more actively, <b>develop additional skills</b>, and stay engaged with the chapter’s work.",
    },
    {
      question: "Do I need to be a mechanical engineering student to join?",
      answer: "No, you don’t need to be a mechanical engineering student to join. ASME invites <b>all engineering students</b> to participate, as many of our activities and opportunities apply across different fields. The chapter is especially relevant to students in <b>Mechanical Engineering</b>, <b>Mechatronics</b>, <b>Aerospace Engineering</b>, and <b>Industrial Engineering</b>, but anyone interested in engineering concepts and skill development is welcome to join.",
    },
  ],
};
