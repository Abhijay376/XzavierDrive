export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What are the requirements for getting a learner's permit in Victoria?",
    answer: "To get a learner's permit in Victoria, you must be at least 16 years old, pass the written test, pass an eyesight test, and provide required documentation including proof of identity and residency. You'll also need to pay the permit fee.",
    category: "learners"
  },
  {
    id: "2",
    question: "How many driving lessons do I need before taking the test?",
    answer: "The number of lessons varies by individual, but most students need 10-20 professional lessons plus practice with a supervising driver. We recommend having at least 120 hours of total driving experience before taking your test.",
    category: "lessons"
  },
  {
    id: "3",
    question: "Do you offer pickup and drop-off services?",
    answer: "Yes! We provide door-to-door pickup and drop-off service for all our driving lessons within our coverage areas in South East Melbourne, including Dandenong, Noble Park, Hallam, and surrounding suburbs.",
    category: "services"
  },
  {
    id: "4",
    question: "What is your pass rate?",
    answer: "We maintain a high first-time pass rate of over 85%. Our experienced instructors focus on preparing students thoroughly for both the practical skills and confidence needed to pass the Victorian driving test.",
    category: "test"
  },
  {
    id: "5",
    question: "Can I use your car for the driving test?",
    answer: "Yes, our Test Day Package includes the use of our instructor's dual-control vehicle for your driving test. This ensures you're familiar with the car and gives you the best chance of success.",
    category: "test"
  },
  {
    id: "6",
    question: "Which VicRoads locations do you service?",
    answer: "We service all major VicRoads testing centers in South East Melbourne, including Dandenong, Noble Park, Heatherton, Burwood East, and Frankston. We'll prepare you for the specific routes and conditions at your chosen test center.",
    category: "locations"
  },
  {
    id: "7",
    question: "Do you offer manual and automatic lessons?",
    answer: "Yes, we offer both manual and automatic driving lessons. Our fleet includes modern dual-control vehicles with both transmission types. You can choose based on your preference and the type of license you want to obtain.",
    category: "vehicles"
  },
  {
    id: "8",
    question: "What's included in your lesson packages?",
    answer: "Our lesson packages include professional instruction, door-to-door pickup and drop-off, use of modern dual-control vehicles, progress tracking, and test preparation. Package deals offer significant savings compared to individual lessons.",
    category: "pricing"
  },
  {
    id: "9",
    question: "How far in advance should I book my driving test?",
    answer: "We recommend booking your driving test at least 2-3 weeks in advance, especially during busy periods. Our Test Day Package includes pre-test preparation and vehicle hire for your convenience.",
    category: "test"
  },
  {
    id: "10",
    question: "What happens if I fail my driving test?",
    answer: "Don't worry - it's common to need multiple attempts. We'll provide additional lessons focusing on areas that need improvement and help you book your next test. Our instructors will ensure you're fully prepared for your second attempt.",
    category: "test"
  },
  {
    id: "11",
    question: "Do you offer refresher courses for experienced drivers?",
    answer: "Yes, we offer refresher courses for drivers returning to driving after a break, overseas license holders, or those wanting to improve their confidence. These can be tailored to your specific needs.",
    category: "services"
  },
  {
    id: "12",
    question: "What's the difference between L, P1, and P2 licenses?",
    answer: "L (Learner) permits allow supervised driving only. P1 (red P plates) is your first solo license with restrictions. P2 (green P plates) has fewer restrictions. Each stage has specific requirements and duration before progressing to a full license.",
    category: "learners"
  }
];
