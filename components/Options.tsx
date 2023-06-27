import Link from "next/link";

const Options = () => {
  return (
    <div className="space-y-8 flex flex-col text-4xl mt-8">
      <button className="hover:bg-hover-neonGreen p-2">
        <Link href="/exercise-list">Browse exercise list</Link>
      </button>
      <button className="hover:bg-hover-neonGreen p-2">
        <Link href="/add-exercise">Add new exercise</Link>
      </button>
    </div>
  );
};

export default Options;
