"use client";

import ExerciseDetails from "../../components/ExerciseDetails";
import { useExerciseContext } from "../../providers/ExerciseProvider";
import RootLayout from "../../layout";

const Details = () => {
  const { selectedExercise } = useExerciseContext();

  return (
    selectedExercise && (
      <RootLayout>
        <div className="h-screen w-1/2 flex flex-col items-center justify-center m-auto">
          <ExerciseDetails exercise={selectedExercise} />
        </div>
      </RootLayout>
    )
  );
};

export default Details;
