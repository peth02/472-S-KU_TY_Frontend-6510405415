"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { deleteEvent } from '../apis/eventApi';
import { useRouter } from 'next/navigation'

export default function CreatedEventItem({ event, onDelete }) {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleEditDetails = () => {
    router.push(`/created-events/edit/${event.eventId}`);
  };

  const handleDelete = async () => {
    try {
      await deleteEvent(event.eventId);
      console.log("Event before delete");
      onDelete(event.eventId); // Call the onDelete callback to update the parent component
      console.log("Event deleted successfully");
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className={styles["event-container"]}>
      <div style={{ width: "454px", height: "250px", marginBottom: "20px" }}>
        <Image
          src={event.imageUrl || "/images/default-event-picture.png"}
          layout="responsive"
          width={100} // กำหนดให้เต็มหน้าจอ
          height={100}
          alt="Event picture"
        />
      </div>

      <div className={styles["event-info-container"]}>
        <div className={styles["profileNameRow"]}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "green",
              borderRadius: "50%",
            }}
          ></div>
          <div>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {event.name}
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: "regular" }}>
            โดย{" "}
            <span style={{ fontWeight: "bold" }}>{event.createdBy ? event.createdBy.firstName + ' ' + event.createdBy.lastName : "Anonymous"}</span>
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
            <p className={styles["event-detail-text"]}>{event.startDate ? event.startDate : "ไม่ระบุวัน"}</p>
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
            <p className={styles["event-detail-text"]}>{event.startTime ? event.startTime : "ไม่ระบุเวลา"}</p>
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
              {event.location ? event.location : "ไม่กำหนดสถานที่"}
            </p>
          </div>
        </div>
        <div className={styles["event-description-container"]}>
          <p>
            {event.description ? event.description : "ไม่มีคำอธิบายเพิ่มเติม"}
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
                    flexDirection:'column',
                    gap:5
                  }}
                >
                  
                  <div className={styles["profileButtonRow"]}>
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
                      <p>{event.attendeeCount ? event.attendeeCount : "-"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["event-tag"]}>BOARD GAME</div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                }}
              >
                <div>
                  <button onClick={handleEditDetails} className={styles["edit-event-button"]}>แก้ไข</button>
                </div>
                <div>
                  <button onClick={handleDelete} className={styles["delete-event-button"]}>ลบ</button>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
