import { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { withApollo } from "../lib/withApollo";
import "../styles/main.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default withApollo({ ssr: true })(MyApp);
