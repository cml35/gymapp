import HomePage from "./home";
import RootLayout from "../layout";
import prisma from "../lib/prisma";

export async function getStaticProps() {
  const exercises = await prisma.workout.findMany();

  return {
    props: { exercises },
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
