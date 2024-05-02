import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

export default function UpdatesPage() {
  const [updateMessages] = useState<string[]>([]);

  useEffect(() => {
    const url =
      "https://discord.com/api/v8/channels/736250834534400110/messages";
    const headers = {
      Authorization: `Bot ${process.env.bot}`, //client id 1235676186399477840
    };
    fetch(url, { headers })
      .then((res) => {
        console.log(res);
        // setUpdateMessages(res.body);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  return (
    <>
      <Header currentPage="Updates" />
      <h1>Updates</h1>
      <section>(Under construction)</section>
      {updateMessages.map((msg, index) => (
        <p>{msg}</p>
      ))}
    </>
  );
}
