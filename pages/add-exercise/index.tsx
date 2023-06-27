"use client";

import AddExerciseForm from "../../components/AddExerciseForm";
import RootLayout from "../../layout";

const AddExercise = () => {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-20 border-dashed border-2 border-sky-500 w-3/4 h-3/4">
          <div className="flex flex-col w-1/2 h-1/2 items-center justify-center m-auto mt-20 mb-20">
            <AddExerciseForm />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AddExercise;
