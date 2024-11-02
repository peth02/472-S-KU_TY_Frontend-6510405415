import Image from "next/image";
import styles from "./page.module.css";

export default function Event(){
  return(
    <div className={styles.page}>
      <nav className={styles['header-container']}>
        <div className={styles['header-logo-text']}>  
          <div>
            <Image 
              src="/images/tree-logo.png"
              width={68}      // กำหนดความกว้าง
              height={68} 
            />
          </div>
          <div style={{ marginLeft: '8px' }}>
            <p className={styles['header-text-kuty']}>KU TY</p>
            <p style={{ fontsize: '13px',fontweight: 'medium', color:'rgba(86, 86, 86, 1)'}}>find friends for activity</p>
          </div>
        </div>

        <ul style={{display:'flex',alignItems:'center'}}>
          <li className={styles['menu-item']}>กิจกรรมทั้งหมด</li>
          <li className={styles['menu-item']}>กิจกรรมที่สร้าง</li>
          <li className={styles['menu-item']}>กิจกรรมที่เข้าร่วม</li>
        </ul>

        <div className={styles['container']}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Image
              src="/images/default-profile-picture.png"
                width={45}      // กำหนดความกว้าง
                height={45}
            />
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <p className={styles['text-username']}>Somchai Marison</p>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <button className={styles['logout-button']}>
              <Image  
                src="/images/logout-picture.png"
                width={24}      // กำหนดความกว้าง
                height={24}
              />
            </button>
          </div>
        </div>
      </nav>

      <div className={styles['event-detail-container']}>
        <div className={styles['event-detail-picture']}>
          <Image
            src="/images/default-event-picture.png"
            layout="responsive"
            width={100}
            height={100}
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
                />
                <p className={styles['event-detail-text']}>2 Nov 2024</p>
              </div>
              <div className={styles['event-detail-location']}>
                <Image
                  src="/images/location-icon.png"
                  width={14}
                  height={20}
                />
                <p className={styles['event-detail-text']}>สำนักหอสมุดเกษตรศาสตร์</p>
              </div>
            </div>
            <div className={styles['event-detail-time']}>
              <Image
                  src="/images/clock-icon.png"
                  width={20}
                  height={20}
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
                />
            </div>
            <div>
              <div className={styles['number-of-participants-container']}>
                  <div>
                    <Image
                      src="/images/participants-icon.png"
                      width={26}
                      height={23}
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

      <div className={styles['event-description']}>
        <p style={{fontWeight:'bold', fontSize:40}}>รายละเอียด</p>
        <p style={{fontSize:22}}>หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด มาเจอกันนะ..</p>
      </div>
    </div>
  );
}
