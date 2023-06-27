"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useExerciseContext } from "../providers/ExerciseProvider";

const AddExerciseForm = () => {
  const { selectedExercise, setSelectedExercise } = useExerciseContext();
  const router = useRouter();

  const [name, setName] = useState(
    selectedExercise ? selectedExercise.name : ""
  );
  const [muscle, setMuscle] = useState(
    selectedExercise ? selectedExercise.muscle : ""
  );
  const [type, setType] = useState(
    selectedExercise ? selectedExercise.type : ""
  );
  const [equipment, setEquipment] = useState(
    selectedExercise ? selectedExercise.equipment : ""
  );
  const [difficulty, setDifficulty] = useState(
    selectedExercise ? selectedExercise.difficulty : ""
  );
  const [instructions, setInstructions] = useState(
    selectedExercise ? selectedExercise.instructions : ""
  );

  const EXERCISE_FIELDS_CLASSNAME = "mt-3 p-3 w-full";

  const submitExercise = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = {
        id: selectedExercise ? selectedExercise.id : null,
        name,
        muscle,
        type,
        equipment,
        difficulty,
        instructions,
      };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setSelectedExercise(undefined);
      await router.push("/exercise-list");
    } catch (error) {
      console.error(error);
    }
  };

  const SubmitButton = () => {
    return (
      <div className="cursor-pointer border box-border mt-10 p-5 text-center hover:bg-hover-neonGreen">
        <input disabled={!name || !muscle} type="submit" value="Add exercise" />
      </div>
    );
  };

  return (
    <>
      <div id="exerciseForm" className="w-full">
        <form className="mt-24" onSubmit={submitExercise}>
          <div className="mb-3">
            <p className="mr-10">Name</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              value={name}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Type</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              autoFocus
              onChange={(e) => setType(e.target.value)}
              placeholder="Type"
              type="text"
              value={type}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Muscle</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              autoFocus
              onChange={(e) => setMuscle(e.target.value)}
              placeholder="Muscle"
              type="text"
              value={muscle}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Equipment</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              autoFocus
              onChange={(e) => setEquipment(e.target.value)}
              placeholder="Equipment"
              type="text"
              value={equipment}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Difficulty</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              autoFocus
              onChange={(e) => setDifficulty(e.target.value)}
              placeholder="Difficulty"
              type="text"
              value={difficulty}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Instructions</p>
            <input
              className={EXERCISE_FIELDS_CLASSNAME}
              autoFocus
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Instructions"
              type="textarea"
              value={instructions}
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
};

export default AddExerciseForm;
