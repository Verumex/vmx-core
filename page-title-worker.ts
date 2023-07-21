import { MemberCardDetails } from "./components/teams";

const numberEmoji: Record<number, string> = {
  1: "1️⃣",
  2: "2️⃣",
  3: "3️⃣",
  4: "4️⃣",
  5: "5️⃣",
  6: "6️⃣",
  7: "7️⃣",
  8: "8️⃣",
  9: "9️⃣",
  10: "🔟",
};

let interval: NodeJS.Timer;

addEventListener("message", (event: MessageEvent<MemberCardDetails[]>) => {
  let count = 0;
  clearInterval(interval);

  const updatePageTitle = () => {
    const items = event.data;
    const index = count % items.length;
    const number = index + 1;
    const title = `${numberEmoji[number]} ${items[index].name}`;

    postMessage(title);
    count++;
  };

  interval = setInterval(updatePageTitle, 750);
});
