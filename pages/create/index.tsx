import CreateWorkoutForm from "../../components/CreateWorkoutForm";

const CreateWorkout = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="border-dashed border-2 border-sky-500 w-1/2 h-1/2">
        <div className="flex flex-col w-1/2 h-1/2 items-center justify-center m-auto">
          <CreateWorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;
