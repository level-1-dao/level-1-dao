import { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { withApollo } from "../lib/withApollo";
import useTokenExpiredEvent from "../../hooks/useTokenExpiredEvent";
import "../styles/main.css";
import "../styles/markdown-styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useTokenExpiredEvent();
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default withApollo({ ssr: true })(MyApp);
