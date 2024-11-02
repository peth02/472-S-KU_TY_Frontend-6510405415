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

        </div>
      </div>

      <div className={styles['event-description']}>
        <p style={{fontWeight:'bold', fontSize:40}}>รายละเอียด</p>
        <p style={{fontSize:22}}>หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด มาเจอกันนะ..</p>
      </div>
    </div>
  );
}
