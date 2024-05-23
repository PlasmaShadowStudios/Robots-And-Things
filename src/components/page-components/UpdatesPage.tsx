import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./Page.module.scss";
import PageBackground from "./PageBackground";
interface Props {
  updateMessages: any[];
}
//<iframe src="https://giphy.com/embed/mTmms2xesjpIVOwzWK" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mTmms2xesjpIVOwzWK">via GIPHY</a></p>

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
                    {msg.embeds.map((embed: any) => (
                      <>
                        {embed.type === "video" && (
                          <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${msg.embedId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        )}
                        {msg.embedId}
                      </>
                    ))}
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
