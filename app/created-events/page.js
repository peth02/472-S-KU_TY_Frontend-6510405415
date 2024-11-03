"use client";

import { useEffect, useState } from "react";
import { fetchAllCreatedEvents } from "../apis/userApi";
import styles from "./page.module.css";
import CreatedEventItem from "../components/created-event-item";
import { useRouter } from 'next/navigation';

export default function CreatedEvents() {
  const navigateToCreateEvent = () => {
    window.location.href = "/created-events/event";
  };

  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = "a74461c6-4847-4704-b333-31bb951d270b"; // Replace with dynamic event ID if needed
    fetchAllCreatedEvents(userId)
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  const handleDelete = (eventId) => {
    setEvents(events.filter((event) => event.eventId !== eventId));
  };

  if (error) {
    return <div>Error loading created events: {error.message}</div>;
  }

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.profileHeaderContent}>
        <h1 className={styles["title-page"]}>กิจกรรมที่สร้าง</h1>
        <div className={styles.profileButtonRow}>
          <button
            className={styles.profileGreyButton}
            onClick={navigateToCreateEvent}
          >
            สร้างกิจกรรม
          </button>
        </div>
      </div>
      <hr className={styles.profileDivider} />
      <div className={styles["content-container"]}>
        <div className={styles["events-container"]}>
          {events.map((event) => (
            <CreatedEventItem
              key={event.eventId}
              event={event}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
