import UpdatesPage from "@/components/page-components/UpdatesPage";
import {
  findYoutubeUrlId,
  isValidMessage,
  removeEmojiSymbolsAndPings,
} from "../../services/formatUpdateMessage";

// Get updates from the game's #updates channel in discord
async function getUpdates() {
  //const url = `${process.env.NEXT_PUBLIC_API_URL}/updates`;
  const url = "https://robots-and-things-335q.onrender.com/updates";
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
        console.log(msg.embeds.length);
        if (msg.embeds.length > 0 && msg.embeds[0].type === "video") {
          const youtubeUrlId = findYoutubeUrlId(msg.embeds[0].url);
          msg.embedId = youtubeUrlId;

          if (msg.embedId) {
            console.log("id:", msg.embedId);
          }
        }
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
