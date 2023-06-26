import { Exercise } from "../types";

interface ExerciseRatingProps {
  exercise: Exercise;
}

const ExerciseRating = (props: ExerciseRatingProps) => {
  const { exercise } = props;
  const ratings = [
    { name: "Difficulty", rating: exercise.difficulty },
    { name: "Muscle Group", rating: exercise.muscle },
    { name: "Equipment", rating: exercise.equipment },
  ];

  return (
    <div>
      <dl className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {ratings.map((rating) => (
          <div key={rating.name} className="overflow-hidden">
            <dt className="truncate text-sm font-medium">{rating.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-hover-neonGreen">
              {rating.rating}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ExerciseRating;
