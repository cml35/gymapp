"use client";
import { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
// import { Workout } from "../types";

// export const Workout_data = createContext(null);

// function WorkoutContext({ children }) {
//   const [workout, setWorkout] = useState();

//   return (
//     <Workout_data.Provider value={{ workout, setWorkout }}>
//       {children}
//     </Workout_data.Provider>
//   );
// }

// export const WorkoutContext = createContext({
//   selectedWorkout: string | undefined,
//   setSelectedWorkout: (_value) => {
//     // no-op
//   },
// });

interface WorkoutContextProps {
  selectedWorkout: string | undefined;
  setSelectedWorkout: (stepId: string | undefined) => void;
}

const WorkoutContext = createContext({} as WorkoutContextProps);

const useWorkoutContext = () => useContext(WorkoutContext);
// export default WorkoutContext;

export { useWorkoutContext };
