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

  return (
    <>
      <h1 className="text-3xl font-semibold mb-40">Add new exercise</h1>
      <div className="flex flex-row color-black">
        <form onSubmit={submitExercise}>
          <p className="mr-10">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <p className="mr-10">Type</p>
          <input
            autoFocus
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
            type="text"
            value={type}
          />
          <p className="mr-10">Muscle</p>
          <input
            autoFocus
            onChange={(e) => setMuscle(e.target.value)}
            placeholder="Muscle"
            type="text"
            value={muscle}
          />
          <p className="mr-10">Equipment</p>
          <input
            autoFocus
            onChange={(e) => setEquipment(e.target.value)}
            placeholder="Equipment"
            type="text"
            value={equipment}
          />
          <p className="mr-10">Difficulty</p>
          <input
            autoFocus
            onChange={(e) => setDifficulty(e.target.value)}
            placeholder="Difficulty"
            type="text"
            value={difficulty}
          />
          <p className="mr-10">Instructions</p>
          <input
            autoFocus
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            type="textarea"
            value={instructions}
          />
          <input disabled={!name || !muscle} type="submit" value="Add" />
          <a className="back" href="#" onClick={() => router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default AddExerciseForm;
