import Head from "next/head";
import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find a lot of events with NextEvents"
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
