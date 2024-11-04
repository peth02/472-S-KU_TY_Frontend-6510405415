"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AllEventItem({ event, userId }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/all-events/detail/${event.eventId}`);
  };

  return (
    <div className={styles["event-container"]}>
      <div style={{ width: "454px", height: "250px", marginBottom: "20px" }}>
      <Image
          src={event.imageUrl || "/images/default-event-picture.png"}
          layout="responsive"
          width={454}
          height={250}
          objectFit="cover"
          alt="Event picture"
        />
      </div>
      <div className={styles["event-info-container"]}>
        <div>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{event.name || "Event Name"}</p>
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
        <div className={styles["profileIconRow"]}>
          <div>
            <Image
              src="/images/participants-icon.png"
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
              <p>{event.attendeeCount ? event.attendeeCount : "-"}</p>
            </div>
          </div>
          <div className={styles["event-tag"]}>{event.typeName || "ไม่มีหมวดหมู่"}</div>{" "}
          <button
            onClick={handleViewDetails}
            className={styles["event-detail-button"]}
          >
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}
