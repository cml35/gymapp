"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Exercise } from "../types";
import { useExerciseContext } from "../providers/WorkoutProvider";
import dumbbellImg from "../images/dumbbell.jpeg";

interface ExerciseItemProps {
  exercise: Exercise;
}

const ExerciseItem = (props: ExerciseItemProps) => {
  const { exercise } = props;
  const { setSelectedExercise: setSelectedWorkout } = useExerciseContext();
  const router = useRouter();

  const handleOnClick = (exercise: Exercise) => {
    setSelectedWorkout(exercise);
    router.push("/exercise-details");
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <Image width={40} height={40} src={dumbbellImg} alt={exercise.name} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {exercise.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {exercise.type}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOnClick(exercise);
            }}
            className="bg-hover-neonGreen p-2"
          >
            More info
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExerciseItem;
