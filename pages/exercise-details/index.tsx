"use client";
import ExerciseDetails from "../../components/ExerciseDetails";
import { useExerciseContext } from "../../providers/WorkoutProvider";

const Details = () => {
  const { selectedExercise: selectedWorkout } = useExerciseContext();

  return (
    selectedWorkout && (
      <div className="h-screen w-1/2 flex flex-col items-center justify-center m-auto">
        <ExerciseDetails exercise={selectedWorkout} />
      </div>
    )
  );
};

export default Details;
