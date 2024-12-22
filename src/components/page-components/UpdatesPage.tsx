import React from "react";
import Header from "../Header/Header";
import styles from "./Page.module.scss";
import PageBackground from "./PageBackground";
import EmbeddedContent from "@/EmbeddedContent/EmbeddedContent";
interface Props {
  updateMessages: any[];
}

//Updates get modified in app/updates/page.tsx
export default function UpdatesPage({ updateMessages }: Props) {
  return (
    <>
      <Header currentPage="Updates" />
      <div className={styles.pageContainer}>
        <PageBackground imagesToShow={[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]} />

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
                  <>
                    <section
                      key={msg + index}
                      style={{
                        borderTop: msg.startOfDay ? '2px solid white' : 0,
                        borderBottom: msg.endOfDay ? '2px solid white' : 0,
                      }}
                    >
                      {msg.startOfDay && <i>{msg.timestamp.split("T")[0]}</i>}
                      <br />
                      {msg.embeds.map((embed: any) => (
                        <EmbeddedContent
                          key={msg.embedId}
                          type={embed.type}
                          id={msg.embedId}
                        />
                      ))}
                      <br />
                      {msg.content}
                    </section>
                    {msg.endOfDay && <div style={{ marginBottom: 64 }} />}
                  </>
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
