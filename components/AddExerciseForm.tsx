"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddExerciseForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [muscle, setMuscle] = useState("");
  const [type, setType] = useState("");
  const [equipment, setEquipment] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [instructions, setInstructions] = useState("");

  const submitExercise = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, muscle, type, equipment, difficulty, instructions };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
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
      <div id="exerciseForm">
        <form className="mt-24" onSubmit={submitExercise}>
          <div className="mb-3">
            <p className="mr-10">Name</p>
            <input
              className="mt-3 p-3"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              value={name}
            />
          </div>
          <div className="mb-3">
            <p className="mr-10">Type</p>
            <input
              className="mt-3 p-3"
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
              className="mt-3 p-3"
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
              className="mt-3 p-3"
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
              className="mt-3 p-3"
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
              className="mt-3 p-3"
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
