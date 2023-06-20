"use client";

import { useState, createContext, useContext } from "react";
import { Workout } from "../types";

type WorkoutContextType = {
  selectedWorkout?: Workout;
  setSelectedWorkout: (workout: Workout | undefined) => void;
};

const initialContext = {
  selectedWorkout: undefined,
  setSelectedWorkout: (_workout: Workout | undefined) => {},
};

export const WorkoutContext = createContext<WorkoutContextType>(initialContext);

export const WorkoutProvider = ({ children }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | undefined>(
    undefined
  );

  return (
    <WorkoutContext.Provider value={{ selectedWorkout, setSelectedWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => useContext(WorkoutContext);
