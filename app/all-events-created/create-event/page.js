import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Event() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      marginLeft:90,
      marginRight:90,
      marginBottom:100
    }}
    >
      <div
        style={{
          display:'flex',
          marginTop:50,
          marginBottom: 45,
          alignItems:'center'
        }}
      >
        <div style={{
            marginLeft:24
        }}>
          <Image 
          src="/images/back-icon.png" 
          width={17}
          height={32}
          alt="back-logo"
          />
        </div>
        <div>
          <p
            style={{
              fontSize:48, 
              fontWeight:'bold',
              marginLeft:30
            }}
          >
          กิจกรรมที่สร้าง</p>
        </div>
      </div>
      <div  style={{
        width:'100%',
        height:1,
        backgroundColor:'rgba(233, 233, 233, 1)',
        marginBottom:40
      }}
      ></div>

      <div style={{
      display:'flex',
    }}
      
      >
        <div className={styles['input-wrapper']}>
          <input type="file" id="upload" style={{display:'none'}} />
          <label htmlFor="upload" className={styles["input-label"]}>
            <Image src="/images/add-picture-icon.png"
             width={270} 
             height={270}
             alt="add-picture-logo" 
             />
            <span style={{
              fontSize:40,
              fontWeight:'bold'
            }}
            >อัปโหลดรูปภาพ</span>
          </label>
        </div>

        <div style={{marginLeft: 75}} >
          <div className={styles['create-event-input-container']}>
            <div>
              <p className={styles['create-event-text']}>ชื่อกิจกรรม</p>
            </div>
            <div>
              <input type="text" placeholder="กรอกชื่อกิจกรรม" className={styles['create-event-input-event-name']}/>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
              <Image 
                src="/images/error-icon.png"
                width={10}
                height={10}
                alt="error-icon"
                />
                <p className={styles['create-event-error-text']}>จำเป็นต้องกรอก</p>
            </div>
          </div>

          <div style={{display: 'flex'}} className={styles['create-event-input-container']}>
            <div>
              <div style={{display: 'flex' ,alignItems:'center'}}>
                <Image
                  src="/images/calendar-icon.png"
                  width={18}
                  height={20}
                  alt="calendar-icon"
                  style={{marginRight:5}}
                />
                <p className={styles['create-event-text']}>วันที่</p>
              </div>
              <div>
                <input type="text" placeholder="ระบุวันที่" className={styles['create-event-input-event-date']}/>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <Image 
                  src="/images/error-icon.png"
                  width={10}
                  height={10}
                  alt="error-icon"
                  />
                  <p className={styles['create-event-error-text']}>จำเป็นต้องกรอก</p>
              </div>
            </div>
            <div 
              style={{marginLeft: 35}}
            >
              <div style={{display: 'flex' ,alignItems:'center'}}>
                <Image
                  src="/images/clock-icon.png"
                  width={20}
                  height={20}
                  alt="clock-icon"
                  style={{marginRight:5}}
                />
                <p className={styles['create-event-text']}>เวลา</p>
              </div>
              <div>
                <input type="text" placeholder="ระบุเวลา" className={styles['create-event-input-event-time']}/>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <Image 
                  src="/images/error-icon.png"
                  width={10}
                  height={10}
                  alt="error-icon"
                  />
                  <p className={styles['create-event-error-text']}>จำเป็นต้องกรอก</p>
              </div>
            </div>
          </div>

          <div style={{display: 'flex'}} className={styles['create-event-input-container']}>
            <div>
              <div style={{display: 'flex' ,alignItems:'center'}}>
                <Image
                  src="/images/location-icon.png"
                  width={14}
                  height={20}
                  alt="location-icon"
                  style={{marginRight:5}}
                />
                <p className={styles['create-event-text']}>วันที่</p>
              </div>
              <div>
                <input type="text" placeholder="ระบุสถานที่" className={styles['create-event-input-event-location']}/>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <Image 
                  src="/images/error-icon.png"
                  width={10}
                  height={10}
                  alt="error-icon"
                  />
                  <p className={styles['create-event-error-text']}>จำเป็นต้องกรอก</p>
              </div>
            </div>
            <div 
              style={{marginLeft: 35}}
            >
              <div style={{display: 'flex' ,alignItems:'center'}}>
                <Image
                  src="/images/category-icon.png"
                  width={20}
                  height={20}
                  alt="category-icon"
                  style={{marginRight:5}}
                />
                <p className={styles['create-event-text']}>ประเภท</p>
              </div>
              <div>
                <input type="text" placeholder="ระบุประเภท" className={styles['create-event-input-event-category']}/>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <Image 
                  src="/images/error-icon.png"
                  width={10}
                  height={10}
                  alt="error-icon"
                  />
                  <p className={styles['create-event-error-text']}>จำเป็นต้องกรอก</p>
              </div>
            </div>
          </div>

          <div className={styles['create-event-input-container']}>
            <div>
              <div style={{display: 'flex' ,alignItems:'center'}}>
                <Image
                  src="/images/number-of-participants-icon.png"
                  width={22}
                  height={16}
                  alt="number-of-participants-icon"
                  style={{marginRight:5}}
                />
                <p className={styles['create-event-text']}>จำนวนผู้เข้าร่วม</p>
              </div>
              <div>
                <input type="text" placeholder="ระบุจำนวนผู้เข้าร่วม" className={styles['create-event-input-event-location']}/>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <Image 
                  src="/images/error-icon.png"
                  width={10}
                  height={10}
                  alt="error-icon"
                  />
                  <p className={styles['create-event-error-text']}>หากไม่ระบุจำนวน กิจกรรมนี้จะสามารถรับจำนวนผู้เข้าร่วมได้ไม่จำกัด</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className={styles['create-event-text']}>รายละเอียด</p>
            </div>
            <div>
              <input type="text" placeholder="ข้อความ.." className={styles['create-event-input-event-description']}/>
            </div> 
          </div>

          <div>
            <button className={styles['join-event-button']}>เข้าร่วม</button>
          </div>
        </div>
      </div>
    </div>
  
  )
}