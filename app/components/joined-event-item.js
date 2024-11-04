"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { quitEvent } from "../apis/userApi";
import { useRouter } from 'next/navigation'

export default function JoinedEventItem({ event, userId, onQuit }) {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/joined-events/detail/${event.eventId}`);
  };

  const handleQuit = async () => {
    try {
      await quitEvent(event.eventId, userId);
      console.log("Event before quit");
      onQuit(event.eventId); // Call the onQuit callback to update the parent component
      console.log("Event quit successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles["event-container"]}>
      <div style={{ width: "454px", height: "250px", marginBottom: "20px" }}>
        <Image
          src="/images/default-event-picture.png"
          layout="responsive"
          width={100}
          height={100}
          alt="Event picture"
        />
      </div>

      <div className={styles["event-info-container"]}>
        <div className={styles["profileNameRow"]}>
          <div>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {event?.name || "Event Name"}
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: "regular" }}>
            โดย <span style={{ fontWeight: "bold" }}>John Doe</span>
          </p>
        </div>
        <div className={styles["event-detail-container"]}>
          <div>
            <Image
              src="/images/calendar-icon.png"
              width={18}
              height={20}
              alt="Calendar icon"
            />
          </div>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <p className={styles["event-detail-text"]}>2 Nov 2024</p>
          </div>
          <div>
            <Image
              src="/images/clock-icon.png"
              width={20}
              height={20}
              alt="Clock icon"
            />
          </div>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <p className={styles["event-detail-text"]}>09 : 00 น.</p>
          </div>
          <div>
            <Image
              src="/images/location-icon.png"
              width={14}
              height={20}
              alt="Location icon"
            />
          </div>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <p className={styles["event-detail-text"]}>
              Library of Agriculture
            </p>
          </div>
        </div>
        <div className={styles["event-description-container"]}>
          <p>
            Looking for friends to play board games together at the library
            Let's meet up..
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Image
                src="/images/default-participants-picture.png"
                width={26}
                height={26}
                alt="Participants picture"
              />
            </div>

            <div className={styles["number-of-participants-container"]}>
              <div>
                <Image
                  src="/images/participants-icon.png"
                  width={12}
                  height={11}
                  alt="Participants icon"
                />
              </div>
              <div>
                <p>10</p>
              </div>
              <div className={styles["event-tag"]}>BOARD GAME</div>
            </div>
          </div>
          <div className={styles.profileButtonRow}>
            <div>
              <button onClick={handleViewDetails} className={styles["event-detail-button"]}>
                รายละเอียด
              </button>
            </div>

            <div>
              <button
                onClick={handleQuit}
                className={styles["event-delete-button"]}
              >
                ออก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
