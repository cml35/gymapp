"use client";

import { useRouter } from "next/navigation";
import { Workout } from "../types";
import { useWorkoutContext } from "../providers/WorkoutProvider";

interface WorkoutOptionItemProps {
  workout: Workout;
}

const WorkoutOptionItem = (props: WorkoutOptionItemProps) => {
  const { workout } = props;
  const { setSelectedWorkout } = useWorkoutContext();
  const router = useRouter();

  const handleOnClick = (workout: Workout) => {
    setSelectedWorkout(workout);
    router.push("/details");
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {workout.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {workout.type}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOnClick(workout);
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

export default WorkoutOptionItem;
