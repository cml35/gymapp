"use client";
import { useContext } from "react";
import WorkoutOptionDetail from "../components/WorkoutOptionDetail";
import { useWorkoutContext } from "../providers/WorkoutProvider";

const Details = () => {
  const { selectedWorkout } = useWorkoutContext();

  console.log("selected workout", selectedWorkout);
  return (
    selectedWorkout && (
      <div className="h-screen w-1/2 flex flex-col items-center justify-center m-auto">
        <WorkoutOptionDetail workout={selectedWorkout} />
      </div>
    )
  );
};

export default Details;
