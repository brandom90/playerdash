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
      name: 'Bob',
      position: 'QB',
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
      improvedLastWeek:true
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

interface Exercises {
  name: string;
  sets: number;
  reps: number;
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
          { name: "Backsquat", sets: 4, reps: 6, status: true },
          { name: "Bench press", sets: 4, reps: 6, status: true },
          { name: "Deadlift", sets: 4, reps: 6, status: true },
          { name: "Overhead press", sets: 4, reps: 6, status: true },
          { name: "Pull-up", sets: 4, reps: 6, status: true }
        ],
        complete: true,
        date: "2025-02-03 14:30:45"
      },
      {
        day: "Tuesday",
        category: "power",
        exercises: [
          { name: "Clean", sets: 4, reps: 6, status: true },
          { name: "Snatch", sets: 4, reps: 6, status: true },
          { name: "Push press", sets: 4, reps: 6, status: true },
          { name: "Kettlebell swing", sets: 4, reps: 12, status: true },
          { name: "Box jump", sets: 4, reps: 6, status: true }
        ],
        complete: true,
        date: "2025-02-04 14:30:45"
      },
      {
        day: "Wednesday",
        category: "explosive",
        exercises: [
          { name: "Medball slam", sets: 4, reps: 10, status: true },
          { name: "Broad jump", sets: 4, reps: 6, status: true },
          { name: "Vertical jump", sets: 4, reps: 6, status: true },
          { name: "Plyo push-up", sets: 4, reps: 8, status: true },
          { name: "Bounding", sets: 4, reps: 10, status: true }
        ],
        complete: true,
        date: "2025-02-05 14:30:45"
      },
      {
        day: "Thursday",
        category: "speed",
        exercises: [
          { name: "Ten yard dash", sets: 6, reps: 10, status: false },
          { name: "Forty yard dash", sets: 4, reps: 4, status: false },
          { name: "Ladder drill", sets: 4, reps: 15, status: false },
          { name: "Shuttle run", sets: 5, reps: 10, status: false },
          { name: "Sprint starts", sets: 4, reps: 5, status: false }
        ],
        complete: false,
        date: "2025-02-06 14:30:45"
      },
      {
        day: "Friday",
        category: "strength",
        exercises: [
          { name: "Front squat", sets: 4, reps: 6, status: false },
          { name: "Incline bench press", sets: 4, reps: 6, status: false },
          { name: "Barbell row", sets: 4, reps: 6, status: false },
          { name: "Bulgarian split squat", sets: 4, reps: 8, status: false },
          { name: "Chin-up", sets: 4, reps: 6, status: false }
        ],
        complete: false,
        date: "2025-02-07 14:30:45"
      },
      {
        day: "Saturday",
        category: "rest",
        exercises: [
          { name: "Hang clean", sets: 4, reps: 6, status: false },
          { name: "Push jerk", sets: 4, reps: 6, status: false },
          { name: "Medicine ball throw", sets: 4, reps: 10, status: false },
          { name: "Landmine press", sets: 4, reps: 6, status: false },
          { name: "Power pull", sets: 4, reps: 6, status: false }
        ],
        complete: false,
        date: "2025-02-08 14:30:45"
      },
      {
        day: "Sunday",
        category: "explosive",
        exercises: [
          { name: "Depth jump", sets: 4, reps: 6, status: false },
          { name: "Lateral bounds", sets: 4, reps: 10, status: false },
          { name: "Seated box jump", sets: 4, reps: 6, status: false },
          { name: "Overhead slam", sets: 4, reps: 6, status: false },
          { name: "Reverse lunge jumps", sets: 4, reps: 6, status: false }
        ],
        complete: false,
        date: "2025-02-09 14:30:45"
      },
    ],
  },
  {
    athleteId: "athlete2",
    workouts: [
      {
        day: "Monday",
        category: "power",
        exercises: [
          { name: "Push press", sets: 4, reps: 6, status: true },
          { name: "Hang clean", sets: 4, reps: 6, status: true },
          { name: "Snatch", sets: 4, reps: 6, status: true },
          { name: "Medicine ball slam", sets: 4, reps: 10, status: true },
          { name: "Jump squat", sets: 4, reps: 6, status: true }
        ],
        date: "2025-02-03 14:00:00"
      },
      {
        day: "Tuesday",
        category: "explosive",
        exercises: [
          { name: "Vertical jump", sets: 4, reps: 6, status: true },
          { name: "Broad jump", sets: 4, reps: 6, status: true },
          { name: "Bounding", sets: 4, reps: 10, status: true },
          { name: "Medball chest throw", sets: 4, reps: 6, status: true },
          { name: "Plyometric step-ups", sets: 4, reps: 6, status: true }
        ],
        date: "2025-02-04 14:00:00"
      },
      {
        day: "Wednesday",
        category: "speed",
        exercises: [
          { name: "Ladder drills", sets: 4, reps: 15, status: true },
          { name: "Sprint starts", sets: 4, reps: 6, status: true },
          { name: "Flying sprints", sets: 4, reps: 10, status: true },
          { name: "Shuttle run", sets: 5, reps: 10, status: true },
          { name: "Quick feet drill", sets: 4, reps: 20, status: true }
        ],
        date: "2025-02-05 14:00:00"
      },
      {
        day: "Thursday",
        category: "strength",
        exercises: [
          { name: "Trap bar deadlift", sets: 4, reps: 6, status: true },
          { name: "Front squat", sets: 4, reps: 6, status: true },
          { name: "Barbell curl", sets: 4, reps: 8, status: true },
          { name: "Chest-supported row", sets: 4, reps: 6, status: true },
          { name: "Face pull", sets: 4, reps: 10, status: true }
        ],
        date: "2025-02-06 14:00:00"
      },
      {
        day: "Friday",
        category: "power",
        exercises: [
          { name: "Power clean", sets: 4, reps: 6, status: true },
          { name: "Power snatch", sets: 4, reps: 6, status: true },
          { name: "Overhead press", sets: 4, reps: 6, status: true },
          { name: "Landmine press", sets: 4, reps: 6, status: true },
          { name: "Weighted jump rope", sets: 4, reps: 50, status: true }
        ],
        date: "2025-02-07 14:00:00"
      },
      {
        day: "Saturday",
        category: "explosive",
        exercises: [
          { name: "Single-leg bounding", sets: 4, reps: 10, status: true },
          { name: "Kneeling box jump", sets: 4, reps: 6, status: true },
          { name: "Triple jump", sets: 4, reps: 6, status: true },
          { name: "Overhead slam", sets: 4, reps: 6, status: true },
          { name: "Ballistic push-ups", sets: 4, reps: 8, status: true }
        ],
        date: "2025-02-08 14:00:00"
      },
      {
        day: "Sunday",
        category: "speed",
        exercises: [
          { name: "Sprint intervals", sets: 5, reps: 10, status: false },
          { name: "Reaction drills", sets: 4, reps: 8, status: false },
          { name: "Cone drills", sets: 3, reps: 12, status: false },
          { name: "Quick backpedals", sets: 4, reps: 10, status: false },
          { name: "Short sprints", sets: 6, reps: 6, status: false }
        ],
        date: "2025-02-09 14:00:00"
      },
    ],
  },
];
