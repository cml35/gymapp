"use client";

import Image from "next/image";
import { Exercise } from "../types";
import bicepCurlGiphy from "../images/bicep_curl.gif";
import ExerciseRating from "./Rating";

interface ExerciseDetailsProps {
  exercise: Exercise;
}

const ExerciseDetails = (props: ExerciseDetailsProps) => {
  const { exercise } = props;

  return (
    <>
      <h1 className="mb-14 text-3xl font-bold">{exercise.name}</h1>
      <div className="flex flex-row">
        <p className="text-lg mr-14 text-justify">{exercise.instructions}</p>
        <Image src={bicepCurlGiphy} width={400} height={400} alt="Bicep curl" />
      </div>
      <ExerciseRating exercise={exercise} />
    </>
  );
};

export default ExerciseDetails;
