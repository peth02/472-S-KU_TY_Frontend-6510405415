"use client";

import { useEffect, useState } from "react";
import { fetchAllCreatedEvents } from "../apis/userApi";
import styles from "./page.module.css";
import CreatedEventItem from "../components/created-event-item";
import { useRouter } from 'next/navigation';
import { useUserContext } from "../UserContext";

export default function CreatedEvents() {
  const { user } = useUserContext();
  const navigateToCreateEvent = () => {
    router.push("/created-events/create");
  };

  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCreatedEvents(user?.userId)
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (eventId) => {
    setEvents(events.filter((event) => event.eventId !== eventId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading events: {error.message}</div>;
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
          {events.length === 0 ? (<div>No events available.</div>) : (events.map((event) => (
            <CreatedEventItem
              key={event.eventId}
              event={event}
              onDelete={handleDelete}
            />
          )))}
        </div>
      </div>
    </div>
  );
}
