"use client";

import { Workout } from "../types";

interface WorkoutOptionDetailProps {
  workout: Workout;
}

const WorkoutOptionDetail = (props: WorkoutOptionDetailProps) => {
  const { workout } = props;

  console.log(workout);
  //   const { workout } = props;
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1>Hellooooo</h1>
        <p>{workout.name}</p>
      </div>
    </>
  );
};

export default WorkoutOptionDetail;
