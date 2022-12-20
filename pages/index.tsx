import Head from "next/head";
import { FC, useState } from "react";
import Snowfall from "react-snowfall";

import Format from "../components/Format";
import Standup from "../components/Standup";

const Home: FC = () => {
  const [isSnowing, letItSnow] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>VmX Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col relative items-center justify-center text-gray-700 w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mb-3">
          <span className="text-white">Core Platform Standup 🙋</span>
        </h1>
        <Standup letItSnow={letItSnow} />
        <Format />
        {isSnowing && (
          <Snowfall
            changeFrequency={200}
            snowflakeCount={400}
            speed={[2.0, 5.0]}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
