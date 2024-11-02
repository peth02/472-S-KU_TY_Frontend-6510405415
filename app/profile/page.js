import Image from "next/image";
import styles from "./page.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        {/* Profile Avatar */}
        <div className={styles.profileAvatar}>
          <span className={styles.avatarText}>S</span>
        </div>

        {/* Profile Info */}
        <div className={styles.profileInfo}>
          <div className={styles.profileHeaderContent}>
            <div className={styles.profileNameRow}>
              <h1 className={styles.profileName}>Somchai Marison</h1>
            </div>
            <div className={styles.profileButtonRow}>
              <button className={styles.profileGreyButton}>แก้ไขโปรไฟล์</button>
              <button className={styles.profileGreyButton}>
                แก้ไขรายละเอียด
              </button>
            </div>
          </div>
          <p className={styles.profileFaculty}>
            คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ ปี 1
          </p>
          <p className={styles.profileEmail}>somchai@gmail.com</p>
          <p className={styles.profileDetails}>@somchaiMS</p>
        </div>
      </div>
      <hr className={styles.profileDivider} />
    </div>
  );
}
