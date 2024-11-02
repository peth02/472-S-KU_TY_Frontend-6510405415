import Image from "next/image";
import styles from "./page.module.css";

export default function Event() {
  return (
    <div>
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

        <div className={styles['event-detail']}>
          <div>
            <p className={styles['event-name-text']}>บอร์ดเกมมหาสนุก</p>
          </div>
          <div>
            <p style={{fontSize: 24, marginBottom:30}}>โดย <span style={{fontWeight: 'bold'}}>หมูเด้ง ช่วยหมูเด้งด้วย</span></p>
          </div>
          <div>
            <div className={styles['event-detail-date-location']}>
              <div className={styles['event-detail-date']}>
                <Image
                  src="/images/calendar-icon.png"
                  width={18}
                  height={20}
                  alt="Calendar icon"
                />
                <p className={styles['event-detail-text']}>2 Nov 2024</p>
              </div>
              <div className={styles['event-detail-location']}>
                <Image
                  src="/images/location-icon.png"
                  width={14}
                  height={20}
                  alt="Location icon"
                />
                <p className={styles['event-detail-text']}>สำนักหอสมุดเกษตรศาสตร์</p>
              </div>
            </div>
            <div className={styles['event-detail-time']}>
              <Image
                  src="/images/clock-icon.png"
                  width={20}
                  height={20}
                  alt="Clock icon"
                />
                <p className={styles['event-detail-text']}>09 : 00 น.</p>
            </div>
          </div>
          <div className={styles['event-participants']}>
            <div>
              <Image
                  src="/images/default-participants-picture.png"
                  width={46}
                  height={45}
                  alt="Participants picture"
                />
            </div>
            <div>
              <div className={styles['number-of-participants-container']}>
                  <div>
                    <Image
                      src="/images/participants-icon.png"
                      width={26}
                      height={23}
                      alt="Participants icon"
                    />
                  </div>
                  <div>
                    <p style={{fontSize:22}}>10</p>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles['event-tag']}>
            Board Game
          </div>
          <div>
            <button className={styles['join-event-button']}>เข้าร่วม</button>
          </div>
        </div>
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
