//Now public was usually a quick message indicating an older patreon post is now public
export function isValidMessage(msg: string) {
  if (
    msg.includes("Now public") ||
    msg.includes("^ Public") ||
    msg.includes("^ The above post should be visible to anyone now")
  ) {
    return false;
  }

  return true;
}

export function removeEmojiSymbolsAndPings(msg: string) {
  msg = msg.replaceAll("@everyone", "");

  msg = msg.replaceAll("<@&842222470571884564>", "");
  msg = msg.replaceAll("<@&850183191973199898>", "");
  msg = msg.replaceAll("<@&842221614081900615>", "");

  msg = msg.replaceAll("<:Speed:847197094946406470>", "");
  msg = msg.replaceAll("<:Stare:848779441165041674>", "🟨");
  msg = msg.replaceAll("<:DKSad:847197727661883392>", ":(");
  msg = msg.replaceAll("<:Dunce:847197146142474251>", "");

  return msg;
}

export function findYoutubeUrlId(url: string) {
  // Get an Id like https://youtu.be/ZuJUEl0u6fY
  if (url.includes("https://youtube.com/watch?v=")) {
    const stringWithId = url.split("https://youtube.com/watch?v=")[1];
    console.log("*id:", stringWithId);
    return stringWithId;
  }
}
