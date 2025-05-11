export interface EventType {
    title: string,
    location: string,
    month:string,
    day: string,
    year: string,
    time: string,
    type: string
  }

  export interface LeaderboardType {
    id: number;
    name: string;
    position: string;
    score: string;
    prev: string;
  }

// not used
  export const dummyLBData: LeaderboardType[] = [
    { id: 1, name: 'John Doe', position: 'QB', score: 'Score', prev: 'Prev' },
    { id: 2, name: 'Alex Smith', position: 'WR', score: 'Score', prev: 'Prev' },
    { id: 3, name: 'Michael Johnson', position: 'RB', score: 'Score', prev: 'Prev' },
    { id: 4, name: 'James Brown', position: 'TE', score: 'Score', prev: 'Prev' },
    { id: 5, name: 'David Lee', position: 'OL', score: 'Score', prev: 'Prev' },
    { id: 6, name: 'Chris Adams', position: 'CB', score: 'Score', prev: 'Prev' },
    { id: 7, name: 'William Taylor', position: 'LB', score: 'Score', prev: 'Prev' },
    { id: 8, name: 'Daniel Harris', position: 'S', score: 'Score', prev: 'Prev' },
    { id: 9, name: 'Joshua White', position: 'K', score: 'Score', prev: 'Prev' },
    { id: 10, name: 'Ethan Clark', position: 'DT', score: 'Score', prev: 'Prev' },
  ];
  
  export const athletes = [
    {
      id: 'athlete1',
      name: 'Moe Bhility',
      position: 'Quarter Back',
      timestamp: '2025-02-03 14:30:45',
      school: "Pine View High School",
      teamId: '5id9v93k',
      Hometown: 'Saint George',
      height: "6'3",
      weight: 200,
      GPA: 4.0,
      performance: {
        strength: {
          backsquat: 315,
          bench: 225,
        },
        power: {
          clean: 205,
          pushPress: 185,
        },
        explosive: {
          medballPush: 30,
          broadJump: 9.5,
          vertical: 28,
        },
        speed: {
          dash10yd: 1.75,
          dash40yd: 4.8,
        },
      },
      previousRanks: {
        strength: 6,
        power: 7,
        explosive: 8,
        speed: 6,
      },
      improvedLastWeek: true,
      notes: [
        {
          title: "Lower Body Explosiveness",
          content: "Needs to work on explosive movements in lower body",
          timestamp: "2023-11-15T09:30:00Z"
        },
        {
          title: "Bench Press Progress",
          content: "Showing good progress in bench press technique",
          timestamp: "2023-11-10T14:15:00Z"
        },
        {
          title: "Bench Press Progress",
          content: "Showing good progress in bench press technique",
          timestamp: "2023-11-10T14:15:00Z"
        },
        {
          title: "Bench Press Progress",
          content: "Showing good progress in bench press technique",
          timestamp: "2023-11-10T14:15:00Z"
        },{
          title: "Bench Press Progress",
          content: "Showing good progress in bench press technique",
          timestamp: "2023-11-10T14:15:00Z"
        },
      
        
        
      ]
    },
  ]

  export const performanceData = [
    // Athlete 1 (Bob) improved in speed
    {
      athleteId: "athlete1",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 315, "Bench press": 225 },
        power: { "Clean": 205, "Push press": 185 },
        explosive: { "Medball push": 30, "Broad jump": 9.5, "Vertical jump": 28 },
        speed: { "Ten yard dash": 1.75, "Forty yard dash": 4.8 },
      },
    },
    {
      athleteId: "athlete1",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 315, "Bench press": 225 },
        power: { "Clean": 205, "Push press": 185 },
        explosive: { "Medball push": 30, "Broad jump": 9.5, "Vertical jump": 28 },
        speed: { "Ten yard dash": 1.65, "Forty yard dash": 4.6 }, // Improvement here
      },
    },
  
    // Athlete 2 (Allan) improved in explosive
    {
      athleteId: "athlete2",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 405, "Bench press": 315 },
        power: { "Clean": 265, "Push press": 225 },
        explosive: { "Medball push": 30, "Broad jump": 9.8, "Vertical jump": 30 },
        speed: { "Ten yard dash": 1.7, "Forty yard dash": 4.5 },
      },
    },
    {
      athleteId: "athlete2",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 405, "Bench press": 315 },
        power: { "Clean": 265, "Push press": 225 },
        explosive: { "Medball push": 35, "Broad jump": 10.5, "Vertical jump": 34 }, // Improvement here
        speed: { "Ten yard dash": 1.7, "Forty yard dash": 4.5 },
      },
    },
  
    // Athlete 3 (Alfred) did not improve
    {
      athleteId: "athlete3",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 365, "Bench press": 275 },
        power: { "Clean": 245, "Push press": 205 },
        explosive: { "Medball push": 31, "Broad jump": 10.2, "Vertical jump": 36 },
        speed: { "Ten yard dash": 1.6, "Forty yard dash": 4.3 },
      },
    },
    {
      athleteId: "athlete3",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 365, "Bench press": 275 },
        power: { "Clean": 245, "Push press": 205 },
        explosive: { "Medball push": 31, "Broad jump": 10.2, "Vertical jump": 36 },
        speed: { "Ten yard dash": 1.6, "Forty yard dash": 4.3 },
      },
    },
  
    // Athlete 4 (Bruce) did not improve
    {
      athleteId: "athlete4",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 455, "Bench press": 335 },
        power: { "Clean": 285, "Push press": 245 },
        explosive: { "Medball push": 28, "Broad jump": 9.8, "Vertical jump": 32 },
        speed: { "Ten yard dash": 1.75, "Forty yard dash": 4.7 },
      },
    },
    {
      athleteId: "athlete4",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 455, "Bench press": 335 },
        power: { "Clean": 285, "Push press": 245 },
        explosive: { "Medball push": 28, "Broad jump": 9.8, "Vertical jump": 32 },
        speed: { "Ten yard dash": 1.75, "Forty yard dash": 4.7 },
      },
    },
  
    // Athlete 5 (Wayne) improved in power
    {
      athleteId: "athlete5",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 500, "Bench press": 365 },
        power: { "Clean": 305, "Push press": 275 },
        explosive: { "Medball push": 27, "Broad jump": 9.5, "Vertical jump": 30 },
        speed: { "Ten yard dash": 1.8, "Forty yard dash": 5.1 },
      },
    },
    {
      athleteId: "athlete5",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 500, "Bench press": 365 },
        power: { "Clean": 320, "Push press": 285 }, // Improvement here
        explosive: { "Medball push": 27, "Broad jump": 9.5, "Vertical jump": 30 },
        speed: { "Ten yard dash": 1.8, "Forty yard dash": 5.1 },
      },
    },
  
    // Athlete 6 (Rob) improved in strength
    {
      athleteId: "athlete6",
      date: "2024-12-13",
      performance: {
        strength: { "Backsquat": 525, "Bench press": 385 },
        power: { "Clean": 315, "Push press": 285 },
        explosive: { "Medball push": 26, "Broad jump": 9.3, "Vertical jump": 29 },
        speed: { "Ten yard dash": 1.85, "Forty yard dash": 5.2 },
      },
    },
    {
      athleteId: "athlete6",
      date: "2024-12-27",
      performance: {
        strength: { "Backsquat": 540, "Bench press": 395 }, // Improvement here
        power: { "Clean": 315, "Push press": 285 },
        explosive: { "Medball push": 26, "Broad jump": 9.3, "Vertical jump": 29 },
        speed: { "Ten yard dash": 1.85, "Forty yard dash": 5.2 },
      },
    },
  ];
  
  export const events = [
    {
      title: 'Lifting',
      location: 'Weightroom',
      month: 'Aug',
      day: '24th',
      year: '2024',
      time: '6 am',
      type: 'event',
      id: 1
    },
    {
      title: 'Team Meeting',
      location: 'Theater Room',
      month: 'Aug',
      day: '24th',
      year: '2024',
      time: '3 pm',
      type: 'event',
      id: 2
    },
    {
      title: 'Team Practice',
      location: 'Field',
      month: 'Aug',
      day: '24th',
      year: '2024',
      time: '5 pm',
      type: 'event',
      id: 3
    },
    {
      title: 'Game vs Rivals',
      location: 'Stadium',
      month: 'Aug',
      day: '25th',
      year: '2024',
      time: '7 pm',
      type: 'game',
      id: 4
    },
    {
      title: 'Game vs Warriors',
      location: 'Stadium',
      month: 'Sep',
      day: '1st',
      year: '2024',
      time: '7 pm',
      type: 'game',
      id: 5
    },
  ];

  // WEEKLY WORKOUTS GIVEN BY COACHES TO PLAYERS - UP FOR CHANGE

interface Workout {
  day: string;
  category: string;
  exercises: Exercises[];
  complete?: boolean; // Optional property
  date: string
}

interface Sets {
  setNum: number;
  Completed: boolean;
  reps: number;
  weight: number;
}
interface Exercises {
  name: string;

  sets: Sets[];
  status: boolean
}

interface AthleteWorkouts {
  athleteId: string;
  workouts: Workout[];
  
}

export const weeklyWorkouts: AthleteWorkouts[] = [
  {
    athleteId: "athlete1",
    workouts: [
      {
        day: "Monday",
        category: "strength",
        exercises: [
          {
            name: "Backsquat",
            status: true,
            sets: [
              { setNum: 1, Completed: true, reps: 10, weight: 140 },
              { setNum: 2, Completed: true, reps: 10, weight: 140 },
              { setNum: 3, Completed: true, reps: 10, weight: 140 },
              { setNum: 4, Completed: true, reps: 10, weight: 140 }
            ]
          },
          {
            name: "Bench press",
            status: true,
            sets: [
              { setNum: 1, Completed: true, reps: 8, weight: 100 },
              { setNum: 2, Completed: true, reps: 8, weight: 100 },
              { setNum: 3, Completed: true, reps: 8, weight: 100 },
              { setNum: 4, Completed: true, reps: 8, weight: 100 }
            ]
          },
          {
            name: "Deadlift",
            status: true,
            sets: [
              { setNum: 1, Completed: true, reps: 5, weight: 160 },
              { setNum: 2, Completed: true, reps: 5, weight: 160 },
              { setNum: 3, Completed: true, reps: 5, weight: 160 },
              { setNum: 4, Completed: true, reps: 5, weight: 160 }
            ]
          }
        ],
        complete: true,
        date: "2025-02-03 14:30:45"
      },
      {
        day: "Tuesday",
        category: "power",
        exercises: [
          {
            name: "Clean",
            status: true,
            sets: [
              { setNum: 1, Completed: true, reps: 5, weight: 120 },
              { setNum: 2, Completed: true, reps: 5, weight: 120 },
              { setNum: 3, Completed: true, reps: 5, weight: 120 }
            ]
          },
          {
            name: "Snatch",
            status: false,
            sets: [
              { setNum: 1, Completed: true, reps: 5, weight: 100 },
              { setNum: 2, Completed: true, reps: 5, weight: 100 },
              { setNum: 3, Completed: true, reps: 5, weight: 100 },
              { setNum: 4, Completed: true, reps: 5, weight: 100 }
            ]
          }
        ],
        complete: false,
        date: "2025-02-04 14:30:45"
      }
    ]
  }
];

// ACCOUNCEMENTS FROM THE COACHES

type Player = {
  id: string;
  status: boolean
};

type Announcement = {
  id: number;
  coach: string;
  message: string;
  date: string;
  recipients: Player[];
};

export const announcements: Announcement[] = [
  {
    id: 1,
    coach: "Coach Johnson",
    message: "Practice is rescheduled to 5 PM tomorrow. Be on time!",
    date: "2025-02-28T10:30:00Z",
    recipients: [
      { id: "athlete1",status: false },
      { id: "athlete2",  status: true },
   
    ]
  },
  {
    id: 2,
    coach: "Coach Williams",
    message: "Team meeting after the next game. Attendance is mandatory.",
    date: "2025-02-29T12:00:00Z",
    recipients: [
      { id: "athlete1",  status: true },
      { id: "athlete2",  status: true },
  
    ]
  }
];


type PersonalGoals = {
  id: number;
  athleteId: string;
  category: string;
  targetValue: number;
  currentValue: number;
  title: string;
  unit?: string;
  timestamp: string;
};

export const personalGoals: PersonalGoals[] = [
  {
    id: 1,
    athleteId: 'athlete1',
    category: "Athetics",
    targetValue: 225,
    currentValue: 135,
    title: "Hit 225 PR Bench",
    unit: 'lb',
    timestamp: "2025-02-29T12:00:00Z",
  },
  {
    id: 2,
    athleteId: 'athlete1',
    category: "Game",
    targetValue: 225,
    currentValue: 135,
    title: "Get 3 touchdowns",
    unit: 'touchdowns',
    timestamp: "2025-02-29T12:00:00Z",
  },
  {
    id: 3,
    athleteId: 'athlete1',
    category: "Practice",
    targetValue: 3,
    currentValue: 1,
    title: "Attend 5 practices",
    unit: 'practices',
    timestamp: "2025-02-29T12:00:00Z",
  }
]

type ReqStats = {
  stat: string;
  requiredValue: number
};


type Achivement = {
  id: number;
  athleteId: string;
  name: string;
  description: string;
  category: string;
  requiredStats: ReqStats[];
  timestamp: string
};

export const achivements: Achivement[] = [
  {
    id: 1,
    athleteId: 'athlete1',
    name: '1000 Pound Club',
    description: 'Achieve a combined total of 1000 lbs on Squat, Bench, and Deadlift',
    category: 'lifting',
    requiredStats: [
      {
        stat: 'Squat', 
        requiredValue: 1000, 
      }
    ],
    timestamp: '2025-02-29T12:00:00Z'
  }
]

type Event = {
  id: string; // Unique Event ID
  title: string; // 'Lifting', 'Team Meeting', 'Game'
  location: string; // 'Weightroom', 'Field'
  date: string;
  time: string; // '6 am'
  type: 'event' | 'practice' | 'game'; // Type of event
  teamId?: string; // (Optional) The team this event belongs to
  practiceId?: string; // (Optional) If it's a practice, link to a PracticePlan
  notes?: string; // (Optional) Additional notes for the event
};

//MOST UP TO DATE EVENT STRUCURRE
export const Event: Event[] = [
  {
    id: '1',
    title: 'Lifting',
    location: 'Weightroom',
    date: '2025-04-20',
    time: '6 am',
    type: 'event',
    notes: 'Bring your lifting shoes',
    teamId: "5id9v93k",
  },
  {
    id: '2',
    title: 'Team Meeting',
    location: 'Theater Room',
    date: '2025-04-20',
    time: '3 pm',
    type: 'event',
    notes: 'Discussing game strategy',
    teamId: '5id9v93k',
  },
  {
    id: '3',
    title: 'Team Practice',
    location: 'Field',
    date: '2025-04-20',
    time: '5 pm',
    type: 'practice',
    practiceId: 'practice1',
    notes: 'Focus on defensive drills',
    teamId: '5id9v93k',
  },
  {
    id: '4',
    title: 'Game vs Rivals',
    location: 'Stadium',
    date: '2025-04-20',
    time: '7 pm',
    type: 'game',
    teamId: 'team1',
    notes: 'Wear home jerseys',
  },
  {
    id: '5',
    title: 'Game vs Warriors',
    location: 'Stadium',
    date:'2025-04-20',
    time: '7 pm',
    type: 'game',
    teamId: 'team2',
    notes: 'Bring water bottles',
  },
];