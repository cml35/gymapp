import RootLayout from "../layout";

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};
export default MyApp;
