"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Exercise } from "../types";
import { useExerciseContext } from "../providers/ExerciseProvider";
import dumbbellImg from "../images/dumbbell.jpeg";
import RootLayout from "../layout";

interface ExerciseItemProps {
  exercise: Exercise;
}

const ExerciseItem = (props: ExerciseItemProps) => {
  const { exercise } = props;
  const { setSelectedExercise } = useExerciseContext();
  const router = useRouter();

  const handleOnClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    router.push("/exercise-details");
  };

  const handleDelete = async (exercise: Exercise) => {
    const { id } = exercise;
    try {
      await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
      await router.push("/exercise-list");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (exercise: Exercise) => {
    setSelectedExercise(exercise);
    await router.push("/add-exercise");
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
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(exercise);
            }}
            className="bg-hover-neonGreen p-2"
          >
            Delete
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleEdit(exercise);
            }}
            className="bg-hover-neonGreen p-2"
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExerciseItem;
