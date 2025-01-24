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
  exercises: string[];
  complete?: boolean; // Optional property
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
          exercises: ["Backsquat", "Bench press", "Deadlift", "Overhead press", "Pull-up"],
          complete: true
        },
        {
          day: "Tuesday",
          category: "power",
          exercises: ["Clean", "Snatch", "Push press", "Kettlebell swing", "Box jump"],
          complete: true
        },
        {
          day: "Wednesday",
          category: "explosive",
          exercises: ["Medball slam", "Broad jump", "Vertical jump", "Plyo push-up", "Bounding"],
          complete: true
        },
        {
          day: "Thursday",
          category: "speed",
          exercises: ["Ten yard dash", "Forty yard dash", "Ladder drill", "Shuttle run", "Sprint starts"],
          complete: false
        },
        {
          day: "Friday",
          category: "strength",
          exercises: ["Front squat", "Incline bench press", "Barbell row", "Bulgarian split squat", "Chin-up"],
          complete: false
        },
        {
          day: "Saturday",
          category: "power",
          exercises: ["Hang clean", "Push jerk", "Medicine ball throw", "Landmine press", "Power pull"],
          complete: false
        },
        {
          day: "Sunday",
          category: "explosive",
          exercises: ["Depth jump", "Lateral bounds", "Seated box jump", "Overhead slam", "Reverse lunge jumps"],
          complete: false
        },
      ],
    },
    {
      athleteId: "athlete2",
      workouts: [
        {
          day: "Monday",
          category: "power",
          exercises: ["Push press", "Hang clean", "Snatch", "Medicine ball slam", "Jump squat"],
        },
        {
          day: "Tuesday",
          category: "explosive",
          exercises: ["Vertical jump", "Broad jump", "Bounding", "Medball chest throw", "Plyometric step-ups"],
        },
        {
          day: "Wednesday",
          category: "speed",
          exercises: ["Ladder drills", "Sprint starts", "Flying sprints", "Shuttle run", "Quick feet drill"],
        },
        {
          day: "Thursday",
          category: "strength",
          exercises: ["Trap bar deadlift", "Front squat", "Barbell curl", "Chest-supported row", "Face pull"],
        },
        {
          day: "Friday",
          category: "power",
          exercises: ["Power clean", "Power snatch", "Overhead press", "Landmine press", "Weighted jump rope"],
        },
        {
          day: "Saturday",
          category: "explosive",
          exercises: ["Single-leg bounding", "Kneeling box jump", "Triple jump", "Overhead slam", "Ballistic push-ups"],
        },
        {
          day: "Sunday",
          category: "speed",
          exercises: ["Sprint intervals", "Reaction drills", "Cone drills", "Quick backpedals", "Short sprints"],
        },
      ],
    },
  ];
  