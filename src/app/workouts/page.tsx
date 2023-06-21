"use client";
import { useState, useEffect } from "react";
import { Workout } from "../types";
import WorkoutOptionItem from "../components/WorkoutOptionItem";

const Workouts = () => {
  const [data, setData] = useState<Workout[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.api-ninjas.com/v1/exercises?muscle=biceps", {
      method: "GET",
      headers: {
        "X-Api-Key": "bUsQLuZr0xnhaKpbrDSstQ==UDBWraUk0OXC6UTX",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">Ready to get sweatin??</h1>
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
                      ></th>
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((workout, index) => {
                      return (
                        <WorkoutOptionItem key={index} workout={workout} />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workouts;
