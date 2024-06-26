import Head from "next/head";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { NotificationContextProvider } from "@/store/notification-context";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextEvents</title>
          <meta name="description" content="" />
          <meta name="viewport" content="initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
