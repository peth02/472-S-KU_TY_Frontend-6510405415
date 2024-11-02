import styles from "./page.module.css";
import JoinedEventItem from "../components/joined-event-item";

export default function JoinedEvents() {
  return (
    <div>
      
      <div className={styles.profileHeaderContent}>
   
            <h1 className={styles["title-page"]}>กิจกรรมที่เข้าร่วม</h1>


          </div>
          <hr className={styles.profileDivider} />
      <div className={styles["content-container"]}>
        
        <div className={styles["events-container"]}>
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
