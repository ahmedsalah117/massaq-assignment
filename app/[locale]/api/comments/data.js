const users = [
  { id: 1, fullName: "John Doe" },
  { id: 2, fullName: "Ahmed Bahnasy" },
  { id: 3, fullName: "Jane Smith" },
  { id: 4, fullName: "Emily Johnson" },
  { id: 5, fullName: "Michael Brown" },
  { id: 6, fullName: "Chris Lee" },
  { id: 7, fullName: "Patricia Williams" },
  { id: 8, fullName: "David Jones" },
  { id: 9, fullName: "Linda Martinez" },
  { id: 10, fullName: "James Wilson" },
  { id: 11, fullName: "Barbara Garcia" },
  { id: 12, fullName: "Thomas Anderson" },
  { id: 13, fullName: "Karen Hernandez" },
  { id: 14, fullName: "Mark Clark" },
  { id: 15, fullName: "Nancy Lewis" },
  { id: 16, fullName: "Paul Robinson" },
  { id: 17, fullName: "Sarah Walker" },
  { id: 18, fullName: "Steven Young" },
  { id: 19, fullName: "Laura Hall" },
  { id: 20, fullName: "Daniel Allen" },
  { id: 21, fullName: "Lisa King" },
  { id: 22, fullName: "Matthew Wright" },
  { id: 23, fullName: "Susan Scott" },
  { id: 24, fullName: "Andrew Green" },
  { id: 25, fullName: "Betty Adams" },
  { id: 26, fullName: "Joshua Baker" },
  { id: 27, fullName: "Margaret Nelson" },
  { id: 28, fullName: "Joseph Carter" },
  { id: 29, fullName: "Sandra Mitchell" },
  { id: 30, fullName: "David Perez" },
  { id: 31, fullName: "Ashley Roberts" },
  { id: 32, fullName: "Brian Turner" },
  { id: 33, fullName: "Linda Phillips" },
  { id: 34, fullName: "Edward Campbell" },
  { id: 35, fullName: "Jessica Parker" },
  { id: 36, fullName: "Anthony Evans" },
  { id: 37, fullName: "Sophia Edwards" },
  { id: 38, fullName: "Richard Collins" },
  { id: 39, fullName: "Deborah Stewart" },
  { id: 40, fullName: "Kenneth Morris" },
  { id: 41, fullName: "Betty Rogers" },
  { id: 42, fullName: "George Reed" },
  { id: 43, fullName: "Maria Cook" },
  { id: 44, fullName: "James Morgan" },
  { id: 45, fullName: "Donna Bell" },
  { id: 46, fullName: "Charles Murphy" },
  { id: 47, fullName: "Karen Bailey" },
  { id: 48, fullName: "Patricia Rivera" },
  { id: 49, fullName: "Robert Cooper" }
];

const comments = [
  {
    id: 1,
    user: {
      id: 1,
      fullName: "John Doe"
    },
    body: "This is a great product!"
  },
  {
    id: 2,
    user: {
      id: 2,
      fullName: "Ahmed Bahnasy"
    },
    body: "He is a great developer!"
  },
  {
    id: 3,
    user: {
      id: 2,
      fullName: "Ahmed Bahnasy"
    },
    body: "I told you he is a great developer!"
  },
  {
    id: 4,
    user: {
      id: 3,
      fullName: "Jane Smith"
    },
    body: "Amazing work on this project!"
  },
  {
    id: 5,
    user: {
      id: 4,
      fullName: "Emily Johnson"
    },
    body: "The UI is very intuitive."
  },
  {
    id: 6,
    user: {
      id: 5,
      fullName: "Michael Brown"
    },
    body: "Outstanding performance!"
  },
  {
    id: 7,
    user: {
      id: 6,
      fullName: "Chris Lee"
    },
    body: "This feature is a game changer."
  },
  {
    id: 8,
    user: {
      id: 7,
      fullName: "Patricia Williams"
    },
    body: "Very user-friendly design."
  },
  {
    id: 9,
    user: {
      id: 8,
      fullName: "David Jones"
    },
    body: "The functionality is seamless."
  },
  {
    id: 10,
    user: {
      id: 9,
      fullName: "Linda Martinez"
    },
    body: "I love the new updates!"
  },
  {
    id: 11,
    user: {
      id: 10,
      fullName: "James Wilson"
    },
    body: "Great attention to detail."
  },
  {
    id: 12,
    user: {
      id: 11,
      fullName: "Barbara Garcia"
    },
    body: "This exceeded my expectations."
  },
  {
    id: 13,
    user: {
      id: 12,
      fullName: "Thomas Anderson"
    },
    body: "Exceptional quality!"
  },
  {
    id: 14,
    user: {
      id: 13,
      fullName: "Karen Hernandez"
    },
    body: "This is incredibly helpful."
  },
  {
    id: 15,
    user: {
      id: 14,
      fullName: "Mark Clark"
    },
    body: "A top-notch development."
  },
  {
    id: 16,
    user: {
      id: 15,
      fullName: "Nancy Lewis"
    },
    body: "The performance is unmatched."
  },
  {
    id: 17,
    user: {
      id: 16,
      fullName: "Paul Robinson"
    },
    body: "Fantastic user experience."
  },
  {
    id: 18,
    user: {
      id: 17,
      fullName: "Sarah Walker"
    },
    body: "This app is very responsive."
  },
  {
    id: 19,
    user: {
      id: 18,
      fullName: "Steven Young"
    },
    body: "Highly recommended!"
  },
  {
    id: 20,
    user: {
      id: 19,
      fullName: "Laura Hall"
    },
    body: "Great job on the design!"
  },
  {
    id: 21,
    user: {
      id: 20,
      fullName: "Daniel Allen"
    },
    body: "Innovative and efficient."
  },
  {
    id: 22,
    user: {
      id: 21,
      fullName: "Lisa King"
    },
    body: "I appreciate the hard work."
  },
  {
    id: 23,
    user: {
      id: 22,
      fullName: "Matthew Wright"
    },
    body: "This is very impressive."
  },
  {
    id: 24,
    user: {
      id: 23,
      fullName: "Susan Scott"
    },
    body: "A well-crafted product."
  },
  {
    id: 25,
    user: {
      id: 24,
      fullName: "Andrew Green"
    },
    body: "This solution is excellent."
  },
  {
    id: 26,
    user: {
      id: 25,
      fullName: "Betty Adams"
    },
    body: "The best in its class."
  },
  {
    id: 27,
    user: {
      id: 26,
      fullName: "Joshua Baker"
    },
    body: "I love the simplicity."
  },
  {
    id: 28,
    user: {
      id: 27,
      fullName: "Margaret Nelson"
    },
    body: "Very easy to use."
  },
  {
    id: 29,
    user: {
      id: 28,
      fullName: "Joseph Carter"
    },
    body: "A flawless execution."
  },
  {
    id: 30,
    user: {
      id: 29,
      fullName: "Sandra Mitchell"
    },
    body: "This is truly remarkable."
  },
  {
    id: 31,
    user: {
      id: 30,
      fullName: "David Perez"
    },
    body: "The updates are fantastic."
  },
  {
    id: 32,
    user: {
      id: 31,
      fullName: "Ashley Roberts"
    },
    body: "A very polished product."
  },
  {
    id: 33,
    user: {
      id: 32,
      fullName: "Brian Turner"
    },
    body: "The interface is sleek."
  },
  {
    id: 34,
    user: {
      id: 33,
      fullName: "Linda Phillips"
    },
    body: "Great work on the features."
  },
  {
    id: 35,
    user: {
      id: 34,
      fullName: "Edward Campbell"
    },
    body: "This is very well done."
  },
  {
    id: 36,
    user: {
      id: 35,
      fullName: "Jessica Parker"
    },
    body: "I love the new design."
  },
  {
    id: 37,
    user: {
      id: 36,
      fullName: "Anthony Evans"
    },
    body: "A highly valuable update."
  },
  {
    id: 38,
    user: {
      id: 37,
      fullName: "Sophia Edwards"
    },
    body: "This app is fantastic!"
  },
  {
    id: 39,
    user: {
      id: 38,
      fullName: "Richard Collins"
    },
    body: "Superb performance."
  },
  {
    id: 40,
    user: {
      id: 39,
      fullName: "Deborah Stewart"
    },
    body: "A remarkable product."
  },
  {
    id: 41,
    user: {
      id: 40,
      fullName: "Kenneth Morris"
    },
    body: "This is very efficient."
  },
  {
    id: 42,
    user: {
      id: 41,
      fullName: "Betty Rogers"
    },
    body: "An excellent development."
  },
  {
    id: 43,
    user: {
      id: 42,
      fullName: "George Reed"
    },
    body: "I am very impressed."
  },
  {
    id: 44,
    user: {
      id: 43,
      fullName: "Maria Cook"
    },
    body: "This is a great addition."
  },
  {
    id: 45,
    user: {
      id: 44,
      fullName: "James Morgan"
    },
    body: "A very reliable product."
  },
  {
    id: 46,
    user: {
      id: 45,
      fullName: "Donna Bell"
    },
    body: "I love this app!"
  },
  {
    id: 47,
    user: {
      id: 46,
      fullName: "Charles Murphy"
    },
    body: "This is top quality."
  },
  {
    id: 48,
    user: {
      id: 47,
      fullName: "Karen Bailey"
    },
    body: "Very impressive updates."
  },
  {
    id: 49,
    user: {
      id: 48,
      fullName: "Patricia Rivera"
    },
    body: "This is incredibly useful."
  },
  {
    id: 50,
    user: {
      id: 49,
      fullName: "Robert Cooper"
    },
    body: "Excellent work on this."
  }
];

export { users, comments };
