import Head from "next/head";
import { FC, useState } from "react";

import Format from "../components/Format";
import Standup from "../components/Standup";
import TeamSelect from "../components/TeamSelect";
import { Team, teams } from "../components/teams";

const Home: FC = () => {
  const [team, setTeam] = useState<Team>("core");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VmX Standup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-gray-700 w-full flex-1 px-20 text-center">
        <h1 className="text-5xl mb-3">
          <div className="flex items-center leading-4">
            <span className="text-blue font-bold">VmX</span>
            <TeamSelect team={team} setTeam={setTeam} />
            <span className="text-blue font-bold">Standup 🙋</span>
          </div>
        </h1>
        <Standup key={team} members={teams[team].members} />
        <Format />
      </main>
    </div>
  );
};

export default Home;
