"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AllEventItem from "../components/all-event-item";
import { fetchAllEvents } from "../apis/eventApi";
import { useUserContext } from "../UserContext";

export default function AllEvent() {
  const { user } = useUserContext();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllEvents()
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading events: {error.message}</div>;
  }

  if (events.length === 0) {
    return <div 
    style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw', 
      height: '100vh', 
      fontWeight: 'bold',
      fontSize: 88,
    }}
  >
    ไม่มีอีเวนต์ ในตอนนี้
  </div>
  }

  return (
    <div>
      <div className={styles["content-container"]}>
        <div>
          <Image
            src="/images/background-picture.png"
            layout="responsive"
            width={100} // กำหนดให้เต็มหน้าจอ
            height={35}
            alt="Event picture"
          />
        </div>

        <div className={styles["search-container"]}>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>สถานที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>วันที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>ประเภท</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>ผู้จัดทำ</label>
            <select>
              <option>All</option>
            </select>
          </div>
          <button className={styles["search-button"]}>
            <Image
              src="/images/search-icon.png"
              width={50} // กำหนดให้เต็มหน้าจอ
              height={45}
              alt="Search icon"
            />
            <span>ค้นหากิจกรรม</span>
          </button>
        </div>

        <div className={styles["events-container"]}>
          {events.map((event) => (
            <AllEventItem key={event.eventId} event={event} userId={user?.userId}/>
          ))}
        </div>
      </div>
    </div>
  );
}
