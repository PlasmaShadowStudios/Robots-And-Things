import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./Page.module.scss";
interface Props {
  updateMessages: any[];
}

export default function UpdatesPage({ updateMessages }: Props) {
  return (
    <div className={styles.pageContainer}>
      <Header currentPage="Updates" />
      <h1>Updates</h1>
      <section>
        <a href="https://discord.gg/Hu9TPDYR" style={{ color: "aqua" }}>
          This page gets messages from updates in our discord channel.
        </a>
        It&apos;s still a work in progress.
      </section>
      {updateMessages.map((msg, index) => (
        <>
          {msg.content && (
            <section key={msg + index}>
              <i>{msg.timestamp.split("T")[0]}</i>
              <br />
              <br />
              {msg.content}
            </section>
          )}
        </>
      ))}
    </div>
  );
}
