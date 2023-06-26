"use client";
import ExerciseDetails from "../../components/ExerciseDetails";
import { useExerciseContext } from "../../providers/ExerciseProvider";

const Details = () => {
  const { selectedExercise } = useExerciseContext();

  return (
    selectedExercise && (
      <div className="h-screen w-1/2 flex flex-col items-center justify-center m-auto">
        <ExerciseDetails exercise={selectedExercise} />
      </div>
    )
  );
};

export default Details;
