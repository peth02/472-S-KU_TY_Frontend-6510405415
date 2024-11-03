import styles from "./page.module.css";
import CreatedEventItem from "../components/created-event-item";

export default function CreatedEvents() {
  return (
    <div>
      
      <div className={styles.profileHeaderContent}>
   
            <h1 className={styles["title-page"]}>กิจกรรมที่สร้าง</h1>

            <div className={styles.profileButtonRow}>
              <button className={styles.profileGreyButton}>สร้างกิจกรรม</button>

            </div>
          </div>
          <hr className={styles.profileDivider} />
      <div className={styles["content-container"]}>
        
        <div className={styles["events-container"]}>
          <CreatedEventItem />
          <CreatedEventItem />
          <CreatedEventItem />
          <CreatedEventItem />
          <CreatedEventItem />
          <CreatedEventItem />
        </div>
      </div>
    </div>
  );
}
