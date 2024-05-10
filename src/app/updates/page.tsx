import UpdatesPage from "@/components/page-components/UpdatesPage";
import {
  isValidMessage,
  removeEmojiSymbolsAndPings,
} from "../../services/formatUpdateMessage";

// Get updates from the game's #updates channel in discord
async function getUpdates() {
  const url = `${process.env.REACT_APP_API_URL}/updates`;
  console.log("fetching from", url);
  const response = await fetch(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.warn(e);
    });

  if (response) {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  }

  return response;
}

export default async function Updates() {
  const updates = await getUpdates();

  if (updates) {
    //Format messages to not show emojis, hide pointless small update messages, and show videos/images properly
    updates.forEach((msg: any) => {
      if (isValidMessage(msg.content)) {
        msg.content = removeEmojiSymbolsAndPings(msg.content);
      } else {
        msg.content = "";
      }
    });
  }

  return (
    <>
      <UpdatesPage updateMessages={updates} />;
    </>
  );
}
