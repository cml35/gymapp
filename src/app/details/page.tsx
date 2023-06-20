// import { useState } from "react";
"use client";
import { useContext } from "react";
import WorkoutOptionDetail from "../components/WorkoutOptionDetail";
import { useWorkoutContext } from "../providers/WorkoutProvider";
// import { WorkoutContext } from "../context/WorkoutContext";

const Details = () => {
  const { selectedWorkout } = useWorkoutContext();

  console.log("selected workout", selectedWorkout);
  return (
    <>
      {/* <WorkoutContext.Provider value={{ workout, setWorkout }}> */}
      {selectedWorkout && <WorkoutOptionDetail workout={selectedWorkout} />}
      {/* </WorkoutContext.Provider> */}
    </>
  );
};

export default Details;
