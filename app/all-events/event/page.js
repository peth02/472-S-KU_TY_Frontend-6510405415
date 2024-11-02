import Image from "next/image";
import styles from "./page.module.css";

export default function Event() {
  return (
    <div className={styles.page}>
      <div className={styles["event-detail-container"]}>
        <div className={styles["event-detail-picture"]}>
          <Image
            src="/images/default-event-picture.png"
            layout="responsive"
            width={100}
            height={100}
            alt="Event picture"
          />
        </div>

        <div className={styles["event-detail"]}></div>
      </div>

      <div className={styles["event-description"]}>
        <p style={{ fontWeight: "bold", fontSize: 40 }}>รายละเอียด</p>
        <p style={{ fontSize: 22 }}>
          หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
          มาเจอกันนะ..
        </p>
      </div>
    </div>
  );
}
