import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./Page.module.scss";
import PageBackground from "./PageBackground";
interface Props {
  updateMessages: any[];
}

export default function UpdatesPage({ updateMessages }: Props) {
  return (
    <>
      <Header currentPage="Updates" />
      <div className={styles.pageContainer}>
        <PageBackground imagesToShow={[3, 3, 3, 3, 3, 3, 3]} />

        <h1>Updates</h1>
        {updateMessages ? (
          <>
            <section>
              This page gets messages from updates in our
              <a
                className={styles.inlineLink}
                href="https://discord.gg/Hu9TPDYR"
              >
                discord server.
              </a>
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
          </>
        ) : (
          <section>
            <a href="https://discord.gg/Hu9TPDYR" style={{ color: "aqua" }}>
              Check out our discord channel for updates!
            </a>
          </section>
        )}
      </div>
    </>
  );
}
