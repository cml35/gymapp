import Link from "next/link";

const OptionList = () => {
  return (
    <div className="space-y-8 flex flex-col text-4xl mt-8">
      <button className="hover:bg-hover-neonGreen">
        <Link href="/workouts">Browse Workouts</Link>
      </button>
      <button className="hover:bg-hover-neonGreen">
        <Link href="/workouts">Create Workout</Link>
      </button>
    </div>
  );
};

export default OptionList;
