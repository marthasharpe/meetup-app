import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Meetup App</title>
        <meta
          name="description"
          content="A practice app created with Next.js, TypeScript, and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
