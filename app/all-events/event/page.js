"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import styles from "./page.module.css";
import { fetchEventData } from "../../apis/eventApi";

export default function Event() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  const [eventDetails, setEventDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Event ID:", eventId);
    if (eventId) {
      console.log("Fetching event details for event ID:", eventId);
      fetchEventData(eventId)
        .then((data) => {
          console.log(data);
          setEventDetails(data);
          console.log("Event details loaded successfully");
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    }
  }, [eventId]);

  if (error) {
    return <div>Error loading event details: {error.message}</div>;
  }

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles["event-detail-container"]}>
        <div className={styles["event-detail-picture"]}>
          {eventDetails && eventDetails["imageUrl"] ? (
            <Image
              src={eventDetails["imageUrl"]}
              layout="responsive"
              width={100}
              height={100}
              alt="Event picture"
            />
          ) : (
            <Image
              src="/images/default-event-picture.png"
              layout="responsive"
              width={100}
              height={100}
              alt="Event picture"
            />
          )}
        </div>

        <div className={styles["event-detail"]}>
          <div>
            {eventDetails && eventDetails["name"] ? (
              <p className={styles["event-name-text"]}>
                {eventDetails["name"]}
              </p>
            ) : (
              <p>Event name not available</p>
            )}
          </div>
          <div>
            <p style={{ fontSize: 24, marginBottom: 30 }}>
              โดย{" "}
              <span style={{ fontWeight: "bold" }}>
                {eventDetails &&
                eventDetails["createdBy"] &&
                eventDetails["createdBy"]["firstName"]
                  ? `${eventDetails["createdBy"]["firstName"]} ${eventDetails["createdBy"]["lastName"]}`
                  : "Anonymous"}
              </span>
            </p>
          </div>
          <div>
            <div className={styles["event-detail-date-location"]}>
              <div className={styles["event-detail-date"]}>
                <Image
                  src="/images/calendar-icon.png"
                  width={18}
                  height={20}
                  alt="Calendar icon"
                />
                <p className={styles["event-detail-text"]}>
                  {eventDetails && eventDetails["startDate"]
                    ? `${eventDetails["startDate"]}`
                    : "ไม่กำหนดวันที่"}
                </p>
              </div>
              <div className={styles["event-detail-location"]}>
                <Image
                  src="/images/location-icon.png"
                  width={14}
                  height={20}
                  alt="Location icon"
                />
                <p className={styles["event-detail-text"]}>
                  {eventDetails && eventDetails["location"]
                    ? `${eventDetails["location"]}`
                    : "ไม่กำหนดสถานที่"}
                </p>
              </div>
            </div>
            <div className={styles["event-detail-time"]}>
              <Image
                src="/images/clock-icon.png"
                width={20}
                height={20}
                alt="Clock icon"
              />
              <p className={styles["event-detail-text"]}>
                {eventDetails && eventDetails["startDate"]
                  ? `${eventDetails["startDate"]}`
                  : "ไม่กำหนดเวลา"}
              </p>
            </div>
          </div>
          <div className={styles["eventTagRow"]}>
            <div className={styles["event-tag"]}>Board Game</div>
            <div className={styles["event-participants"]}>
              <div className={styles["number-of-participants-container"]}>
                <div>
                  <Image
                    src="/images/participants-icon.png"
                    width={26}
                    height={23}
                    alt="Participants icon"
                  />
                </div>
                <div>
                  <p style={{ fontSize: 22 }}>
                    {eventDetails && eventDetails["attendeeCount"]
                      ? `${eventDetails["attendeeCount"]}`
                      : "ไม่มีข้อมูล"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className={styles["join-event-button"]}>เข้าร่วม</button>
          </div>
        </div>
      </div>

      <div className={styles["event-description"]}>
        <p style={{ fontWeight: "bold", fontSize: 40 }}>รายละเอียด</p>
        <p style={{ fontSize: 22 }}>
          {eventDetails && eventDetails["description"]
            ? `${eventDetails["description"]}`
            : "ไม่มีรายละเอียด"}
        </p>
      </div>
    </div>
  );
}
