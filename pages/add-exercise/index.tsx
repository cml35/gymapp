"use client";

import AddExerciseForm from "../../components/AddExerciseForm";
import RootLayout from "../../layout";

//@ts-ignore
const AddExercise = () => {
  return (
    <RootLayout>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-dashed border-2 border-sky-500 w-3/4 h-3/4">
          <div className="flex flex-col w-1/2 h-1/2 items-center justify-center m-auto">
            <h1 className="text-3xl font-semibold pt-40">Add new exercise</h1>
            <AddExerciseForm />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AddExercise;
