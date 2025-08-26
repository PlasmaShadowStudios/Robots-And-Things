import UpdatesPage from "@/components/page-components/UpdatesPage";
import {
  addLineBreakAfterLink,
  findEmbeddedUrlId,
  isValidMessage,
  makeSameDayUpdatesShowEarlierTimesFirst,
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
  let updates = await getUpdates();

  if (updates) {
    //Format messages to not show emojis, hide pointless small update messages, and show videos/images properly
    updates.forEach((msg: any) => {
      if (isValidMessage(msg.content)) {
        msg.content = removeEmojiSymbolsAndPings(msg.content);
        msg.content = addLineBreakAfterLink(msg.content);
        if (
          msg.embeds.length > 0 &&
          (msg.embeds[0].type === "video" || msg.embeds[0].type === "gifv")
        ) {
          const embeddedId = findEmbeddedUrlId(msg.embeds[0].url);
          msg.embedId = embeddedId;
        }
      } else {
        msg.content = "";
      }
    });

    updates = makeSameDayUpdatesShowEarlierTimesFirst(updates);
  }

  return (
    <>
      <UpdatesPage updateMessages={updates} />;
    </>
  );
}
