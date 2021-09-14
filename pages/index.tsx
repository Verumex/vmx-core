import { FC } from "react";
import Head from "next/head";

import TeamMember from "../components/TeamMember";

const team = ["Chris", "Jan", "Noey", "Oo", "Pin"];

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VmX Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-gray-700 w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-3">
          <span className="text-blue">Core Platform Standup 🙋</span>
        </h1>

        <p className="mt-3 mb-8 text-2xl">Our team (in alphabetical order):</p>

        <p>
          {team.map((name) => (
            <TeamMember name={name} />
          ))}
        </p>
      </main>
    </div>
  );
};

export default Home;
