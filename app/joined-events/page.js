"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import JoinedEventItem from "../components/joined-event-item";
import { fetchAllJoinedEvents } from "../apis/userApi";

export default function JoinedEvents() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = "a74461c6-4847-4704-b333-31bb951d270b"; // Replace with dynamic user ID if needed
    fetchAllJoinedEvents(userId)
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  const handleQuit = (eventId) => {
    setEvents(events.filter((event) => event.eventId !== eventId));
  };

  if (error) {
    return <div>Error loading joined events: {error.message}</div>;
  }

  if (events.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      
      <div className={styles.profileHeaderContent}>
   
            <h1 className={styles["title-page"]}>กิจกรรมที่เข้าร่วม</h1>


          </div>
          <hr className={styles.profileDivider} />
      <div className={styles["content-container"]}>
        
        <div className={styles["events-container"]}>
        {events.map((event) => (
            <JoinedEventItem
              key={event.eventId}
              userId="a74461c6-4847-4704-b333-31bb951d270b"
              event={event}
              onQuit={handleQuit}
            />
          ))}
          <JoinedEventItem />
          <JoinedEventItem />
          <JoinedEventItem />
          <JoinedEventItem />
          <JoinedEventItem />
          <JoinedEventItem />
        </div>
      </div>
    </div>
  );
}
