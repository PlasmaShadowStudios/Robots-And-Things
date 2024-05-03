import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

export default function UpdatesPage() {
  const [updateMessages, setUpdateMessages] = useState<any[]>([]);

  useEffect(() => {
    async function getUpdatesFromDiscord() {
      const url = "http://localhost:3000/updates";
      const response = await fetch(url)
        .then((res) => {
          return res;
        })
        .catch((e) => {
          console.warn(e);
        });

      if (response) {
        const result = await response.json();
        setUpdateMessages([...result]);
        console.log("res", result);
      }
    }
    getUpdatesFromDiscord();
  }, []);

  return (
    <>
      <Header currentPage="Updates" />
      <h1>Updates</h1>
      <section>
        <a href="https://discord.gg/Hu9TPDYR" style={{color:"aqua"}}>
          This page gets messages from updates in our discord channel.
        </a>
        It's still a work in progress.
      </section>
      {updateMessages.map((msg, index) => (
        <section>
          <i>{msg.timestamp.split("T")[0]}</i>
          <br />
          <br />
          {msg.content}
        </section>
      ))}
    </>
  );
}
