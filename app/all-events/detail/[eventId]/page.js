"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { fetchEventData, fetchAllJoinedUsers } from "../../../apis/eventApi";
import { joinEvent } from "../../../apis/userApi";
import { useRouter } from 'next/navigation';
import { useUserContext } from "../../../UserContext";

export default function Event({ params }) {
  const { user } = useUserContext();
  const router = useRouter();
  const userId = user?.userId;
  const [eventId, setEventId] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [error, setError] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const [isCreator, setIsCreator] = useState(false);

  useEffect(() => {
    params.then((resolvedParams) => {
      setEventId(resolvedParams.eventId);
    });
  }, [params]);
  
  useEffect(() => {
    if (userId && eventId) {
      console.log("Event ID:", eventId);
      console.log("User ID:", userId);

      fetchAllJoinedUsers(eventId)
        .then((joinedUsers) => {
          console.log("Joined Users:", joinedUsers);
          const userHasJoined = joinedUsers.some(user => user.userId === userId);
          setHasJoined(userHasJoined);
          console.log("User has joined:", userHasJoined);
        })
        .catch((error) => {
          console.error("Error fetching joined users:", error);
          setError(error);
        });

      fetchEventData(eventId)
        .then((data) => {
          console.log("Event Data:", data);
          setEventDetails(data);
          if (data.createdBy.userId === userId) {
            setIsCreator(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setError(error);
        });
    }
  }, [userId, eventId]);

  const handleNavigateToParticipants = () => {
    router.push(`/all-events/participants/${eventId}`);
  };

  const handleBackToAllEventsPage = () => {
    router.push(`/all-events`);
  };

  const handleJoinEvent = async () => {
    try {
      const message = await joinEvent({eventId, userId});
      setHasJoined(true); // Update the state to indicate the user has joined
      router.push('/joined-events');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error loading event details: {error.message}</div>;
  }

  if (!eventDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className={styles["event-detail-container"]}>
        <button onClick={handleBackToAllEventsPage} className={styles.backButton}>
          <Image
            src="/images/back-icon.png"
            alt="Back"
            width={24}
            height={32}
          />
        </button>
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
            <div className={styles["event-participants"]} onClick={handleNavigateToParticipants} style={{ cursor: 'pointer' }}>
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
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleJoinEvent} 
            className={styles["join-event-button"]}
            style={{ 
              backgroundColor: hasJoined || isCreator ? 'gray' : '#008f46',
              cursor: hasJoined || isCreator ? 'not-allowed' : 'pointer' 
            }}
              disabled={hasJoined || isCreator}
            >
              {hasJoined || isCreator ? 'เข้าร่วมแล้ว' : 'เข้าร่วม'}
              </button>
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
