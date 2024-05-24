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

// Get an Id from a url like https://youtu.be/ZuJUEl0u6fY would return ZuJUEl0u6fY
export function findEmbeddedUrlId(url: string) {
  if (url.includes("https://www.youtube.com/watch?v=")) {
    const splitString = url.split("v=");

    return splitString[1];
  } else if (url.includes("https://giphy.com/gifs/")) {
    const splitString = url.split("gifs/");

    return splitString[1];
  }
}

//Make earlier times appear first if posted on the same day
export function makeSameDayUpdatesShowEarlierTimesFirst(messages: any[]) {
  let currentDay: string;
  let messagesFromCurrentDay: any[] = [];
  let finalArray: any[] = [];

  messages.forEach((msg, index) => {
    const splitTimeString = msg.timestamp.split("T");
    if (splitTimeString && splitTimeString.length > 0) {
      //Check if the day has changed
      if (currentDay !== splitTimeString[0]) {
        //Add on everything in this day to the return array, but reversed. This should sort it properly.
        if (messagesFromCurrentDay.length > 0) {
          messagesFromCurrentDay[0].endOfDay = true;
          messagesFromCurrentDay[messagesFromCurrentDay.length-1].startOfDay = true;
        }
        finalArray = finalArray.concat(messagesFromCurrentDay.reverse());

        //New day. New array.
        currentDay = splitTimeString[0];
        messagesFromCurrentDay = [msg];
      } else {
        //If update is on the same day add it to an array for the current day.
        messagesFromCurrentDay.push(msg);
      }
    }
  });

  return finalArray;
}
