"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { fetchAllJoinedUsers } from "../../../apis/eventApi";
import { useUserContext } from "../../../UserContext";
import Image from "next/image";

export default function Participants({ params }) {
  const { user } = useUserContext();
  const router = useRouter();
  const [eventId, setEventId] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then((resolvedParams) => {
      setEventId(resolvedParams.eventId);
    });
  }, [params]);

  useEffect(() => {
    if (eventId) {
      fetchAllJoinedUsers(eventId)
        .then((data) => {
          setParticipants(data);
          setLoading(false);
          console.log("Participants:", data);
        })
        .catch((error) => {
          console.error("Error fetching participants:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [eventId]);

  const handleBackToDetailPage = () => {
    router.push(`/all-events/detail/${eventId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading participants: {error.message}</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button onClick={handleBackToDetailPage} className={styles.backButton}>
          <Image src="/images/back-icon.png" alt="Back" width={16} height={24}/>
        </button>
        <h1>ผู้เข้าร่วม</h1>
      </div>
      <hr className={styles.profileDivider} />
      <div className={styles.participantList}>
        {participants.map((participant) => (
          <div key={participant.userId} className={styles.participantItem}>
            <div className={styles.profileImageContainer}>
              <Image
                src={
                  participant.profileImageUrl ||
                  "/images/default-participants-picture.png"
                }
                alt={`${participant.firstName} ${participant.lastName}`}
                width={50}
                height={50}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.participantInfo}>
              <p className={styles.participantName}>
                {participant.firstName ? participant.firstName : "-"}{" "}
                {participant.lastName ? participant.lastName : "-"}
              </p>
              <p className={styles.participantEmail}>
                {participant.email ? participant.email : "-"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
