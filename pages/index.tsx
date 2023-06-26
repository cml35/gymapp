import prisma from "../lib/prisma";
import HomePage from "./home";
import RootLayout from "../layout";

export async function getStaticProps() {
  const workouts = await prisma.workout.findMany();

  return {
    props: { workouts },
    revalidate: 10,
  };
}

//@ts-ignore
const Home = (props) => {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
};

export default Home;
// index.tsx

// // Display list of posts (in /pages/index.tsx)
// //@ts-ignore
// // eslint-disable-next-line import/no-anonymous-default-export, react/display-name
// export default ({ workouts }) => {
//   return (
//     <ul>
//       {
//         //@ts-ignore
//         workouts.map((workout) => (
//           <li key={workout.id}>{workout.name}</li>
//         ))
//       }
//     </ul>
//   );
// };
