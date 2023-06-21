"use client";

import Image from "next/image";
import { Workout } from "../types";
import bicepCurlGiphy from "../images/bicep_curl.gif";
import Rating from "./Rating";

interface WorkoutOptionDetailProps {
  workout: Workout;
}

const WorkoutOptionDetail = (props: WorkoutOptionDetailProps) => {
  const { workout } = props;

  return (
    <>
      <h1 className="mb-14 text-3xl font-bold">{workout.name}</h1>
      <div className="flex flex-row">
        <p className="text-lg mr-14 text-justify">{workout.instructions}</p>
        <Image src={bicepCurlGiphy} width={400} height={400} alt="Bicep curl" />
      </div>
      <Rating workout={workout} />
    </>
  );
};

export default WorkoutOptionDetail;
