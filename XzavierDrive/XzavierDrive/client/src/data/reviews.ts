export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  verified: boolean;
}

export const customerReviews: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    text: "My instructor Medi was highly professional and went through every small detail thoroughly. The instructions were very clear and easy to understand, which helped me pass my drive test on the first attempt.",
    location: "Passed at Dandenong VicRoads",
    verified: true
  },
  {
    id: "2", 
    name: "James T.",
    rating: 5,
    text: "Medi helped me get my license - he was very calm and gave me all the information to pass my drive test on the first attempt. Great driving school!",
    location: "Passed at Noble Park VicRoads",
    verified: true
  },
  {
    id: "3",
    name: "Lisa K.",
    rating: 5,
    text: "Great driving school, my instructor was nice and calm and gave me clear instructions. Would definitely recommend for anyone looking for a driving instructor!",
    location: "Passed at Frankston VicRoads",
    verified: true
  },
  {
    id: "4",
    name: "Michael R.",
    rating: 5,
    text: "Professional instruction with patient guidance. The door-to-door pickup service made lessons very convenient. Passed on my first attempt!",
    location: "Passed at Heatherton VicRoads",
    verified: true
  },
  {
    id: "5",
    name: "Emma W.",
    rating: 5,
    text: "Excellent teaching methods and very understanding instructor. Built my confidence behind the wheel and prepared me well for the test.",
    location: "Passed at Dandenong VicRoads",
    verified: true
  },
  {
    id: "6",
    name: "David L.",
    rating: 5,
    text: "Highly recommend Xzavier Driving School. My instructor was punctual, professional, and made learning to drive enjoyable. Great pass rate!",
    location: "Passed at Pakenham East LTC",
    verified: true
  }
];
