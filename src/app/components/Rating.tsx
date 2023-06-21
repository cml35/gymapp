import { Workout } from "../types";

interface RatingProps {
  workout: Workout;
}

const Rating = (props: RatingProps) => {
  const { workout } = props;
  const ratings = [
    { name: "Difficulty", rating: workout.difficulty },
    { name: "Muscle Group", rating: workout.muscle },
    { name: "Equipment", rating: workout.equipment },
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

export default Rating;
