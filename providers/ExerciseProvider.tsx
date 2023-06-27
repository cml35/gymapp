"use client";

import { useState, createContext, useContext } from "react";
import { Exercise } from "../types";

type ExerciseContextType = {
  selectedExercise?: Exercise;
  setSelectedExercise: (exercise: Exercise | undefined) => void;
};

const initialContext = {
  selectedExercise: undefined,
  setSelectedExercise: (_exercise: Exercise | undefined) => {},
};

export const ExerciseContext =
  createContext<ExerciseContextType>(initialContext);

export const ExerciseProvider = ({ children }: any) => {
  const [selectedExercise, setSelectedExercise] = useState<
    Exercise | undefined
  >(undefined);

  return (
    <ExerciseContext.Provider
      value={{
        selectedExercise,
        setSelectedExercise,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => useContext(ExerciseContext);
