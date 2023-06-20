import { useState } from "react";
import { Workout } from "../types";
import WorkoutOptionDetailDialog from "./WorkoutOptionDetailDialog";

interface WorkoutOptionItemProps {
  workout: Workout;
}

const WorkoutOptionItem = (props: WorkoutOptionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("isOpen", isOpen);

  const { workout } = props;
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
              setIsOpen(true);
            }}
            className="bg-hover-neonGreen p-2"
          >
            More info
          </button>
        </td>
      </tr>
      {isOpen && (
        <WorkoutOptionDetailDialog setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </>
  );
};

export default WorkoutOptionItem;
