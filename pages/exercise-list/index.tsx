import { useState, useEffect } from "react";
import { Exercise } from "../../types";
import ExerciseItem from "../../components/ExerciseItem";
import RootLayout from "../../layout";

export async function loadExercises(): Promise<Exercise[]> {
  const data = await fetch(process.env.URL + "/api/get", {
    method: "GET",
  });
  const exercises = await data.json();
  return exercises;
}

export async function getStaticProps() {
  const exercises = await loadExercises();
  return {
    props: { exercises },
  };
}

interface ExerciseListProps {
  exercises: Exercise[];
}

const ExerciseList = ({ exercises }: ExerciseListProps) => {
  const [data, setData] = useState<Exercise[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(exercises);
    setLoading(false);
  }, [exercises]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <RootLayout>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">Exercise List</h1>
        <div className="flex flex-col" key={Math.random()}>
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      ></th>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      ></th>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((exercise, index) => {
                      return <ExerciseItem key={index} exercise={exercise} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ExerciseList;
