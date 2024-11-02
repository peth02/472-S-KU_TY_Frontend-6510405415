import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function AllEvent(){
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

      <div className={styles['content-container']}>
        <div>
          <Image src="/images/background-picture.png"
              layout="responsive" 
              width={100} // กำหนดให้เต็มหน้าจอ
              height={35}  />
        </div >

        
        <div className={styles['search-container']}>
          <div className={styles['filter']}>
            <label className={styles['search-label']}>สถานที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles['divider']}></div>
          <div className={styles['filter']}>
            <label className={styles['search-label']}>วันที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles['divider']}></div>
          <div className={styles['filter']}>
            <label className={styles['search-label']}>ประเภท</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles['divider']}></div>
          <div className={styles['filter']}>
            <label className={styles['search-label']}>ผู้จัดทำ</label>
            <select>
              <option>All</option>
            </select>
          </div>
          <button className={styles['search-button']}>
            <Image 
              src="/images/search-icon.png" 
              width={50} // กำหนดให้เต็มหน้าจอ
              height={45} 
            />
            <span>ค้นหากิจกรรม</span>
          </button>
        </div>

        <div className={styles['events-container']}>

          <div  className={styles['event-container']}>
            <div style={{width:'454px',height:'250px',marginBottom:'20px'}}>
              <Image 
                  src="/images/default-event-picture.png"
                  layout="responsive" 
                  width={100} // กำหนดให้เต็มหน้าจอ
                  height={100} 
                />
            </div>
            <div className={styles['event-info-container']}>
                <div>
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>บอร์ดเกมมหาสนุก</p>
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 'regular' }}>โดย <span style={{fontWeight:'bold'}}>หมูเด้ง ช่วยหมูเด้งด้วย</span></p>
                </div>
                <div className={styles['event-detail-container']}>
                  <div>
                    <Image
                      src="/images/calendar-icon.png"
                      width={18}
                      height={20}
                    />
                  </div>
                  <div style={{marginLeft:"10px", marginRight:'10px'}}>
                    <p className={styles['event-detail-text']}>2 Nov 2024</p>
                  </div>
                  <div>
                    <Image
                      src="/images/clock-icon.png"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div style={{marginLeft:"10px", marginRight:'10px'}}>
                    <p className={styles['event-detail-text']}>09 : 00 น.</p>
                  </div >
                  <div>
                    <Image
                        src="/images/location-icon.png"
                        width={14}
                        height={20}
                      />
                  </div>
                  <div style={{marginLeft:"10px", marginRight:'10px'}}>
                    <p className={styles['event-detail-text']}>สำนักหอสมุดเกษตรศาสตร์</p>
                  </div>
                </div>
                <div className={styles['event-description-container']}>
                  <p>หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน
                  ห้องเล่นบอร์ดเกม ที่หอสมุด มาเจอกันนะ..</p>
                </div>
                <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
                  <div style={{display:"flex",flexDirection:'column'}}>
                    <div style={{display:'flex',justifyItems:'center',alignItems:'center'}}>
                      <div>
                        <Image
                          src="/images/default-participants-picture.png"
                          width={26}
                          height={26}
                        />
                      </div>
                      <div className={styles['number-of-participants-container']}>
                          <div>
                            <Image
                              src="/images/participants-icon.png"
                              width={12}
                              height={11}
                            />
                          </div>
                          <div>
                            <p>10</p>
                          </div>
                      </div>
                    </div>
                    <div className={styles['event-tag']}>BOARD GAME</div>
                  </div>
                  
                  <Link href='/all-events/event'>
                    <div>
                      <button className={styles['event-detail-button']}>รายละเอียด</button>
                    </div>
                  </Link>

                </div>
            </div>

          </div>

          

        



        </div>
      </div>
    </div>
  );
}
