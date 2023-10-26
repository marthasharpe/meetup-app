import Head from "next/head";
import Image from "next/image";

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
      <main>
        <h1 className="text-4xl font-bold text-center">Meetups</h1>
      </main>
    </div>
  );
}
