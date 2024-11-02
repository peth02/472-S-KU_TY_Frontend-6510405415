import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function AllEvent() {
  return (
    <div className={styles.page}>
      <div className={styles["content-container"]}>
        <div>
          <Image
            src="/images/background-picture.png"
            layout="responsive"
            width={100} // กำหนดให้เต็มหน้าจอ
            height={35}
            alt="Event picture"
          />
        </div>

        <div className={styles["search-container"]}>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>สถานที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>วันที่</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>ประเภท</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className={styles["divider"]}></div>
          <div className={styles["filter"]}>
            <label className={styles["search-label"]}>ผู้จัดทำ</label>
            <select>
              <option>All</option>
            </select>
          </div>
          <button className={styles["search-button"]}>
            <Image
              src="/images/search-icon.png"
              width={50} // กำหนดให้เต็มหน้าจอ
              height={45}
              alt="Search icon"
            />
            <span>ค้นหากิจกรรม</span>
          </button>
        </div>

        <div className={styles["events-container"]}>
          <div className={styles["event-container"]}>
            <div
              style={{ width: "454px", height: "250px", marginBottom: "20px" }}
            >
              <Image
                src="/images/default-event-picture.png"
                layout="responsive"
                width={100} // กำหนดให้เต็มหน้าจอ
                height={100}
                alt="Event picture"
              />
            </div>
            <div className={styles["event-info-container"]}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                  บอร์ดเกมมหาสนุก
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "regular" }}>
                  โดย{" "}
                  <span style={{ fontWeight: "bold" }}>
                    หมูเด้ง ช่วยหมูเด้งด้วย
                  </span>
                </p>
              </div>
              <div className={styles["event-detail-container"]}>
                <div>
                  <Image
                    src="/images/calendar-icon.png"
                    width={18}
                    height={20}
                    alt="Calendar icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>2 Nov 2024</p>
                </div>
                <div>
                  <Image
                    src="/images/clock-icon.png"
                    width={20}
                    height={20}
                    alt="Clock icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>09 : 00 น.</p>
                </div>
                <div>
                  <Image
                    src="/images/location-icon.png"
                    width={14}
                    height={20}
                    alt="Location icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>
                    สำนักหอสมุดเกษตรศาสตร์
                  </p>
                </div>
              </div>
              <div className={styles["event-description-container"]}>
                <p>
                  หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
                  มาเจอกันนะ..
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/images/default-participants-picture.png"
                      width={26}
                      height={26}
                      alt="Participants picture"
                    />
                  </div>

                  <div className={styles["number-of-participants-container"]}>
                    <div>
                      <Image
                        src="/images/participants-icon.png"
                        width={12}
                        height={11}
                        alt="Participants icon"
                      />
                    </div>
                    <div>
                      <p>10</p>
                    </div>
                    <div className={styles['event-tag']}>BOARD GAME</div>
                  </div>
                </div>
                <Link href="/all-events/event">
                  <div>
                    <button className={styles["event-detail-button"]}>
                      รายละเอียด
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["event-container"]}>
            <div
              style={{ width: "454px", height: "250px", marginBottom: "20px" }}
            >
              <Image
                src="/images/default-event-picture.png"
                layout="responsive"
                width={100} // กำหนดให้เต็มหน้าจอ
                height={100}
                alt="Event picture"
              />
            </div>
            <div className={styles["event-info-container"]}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                  บอร์ดเกมมหาสนุก
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "regular" }}>
                  โดย{" "}
                  <span style={{ fontWeight: "bold" }}>
                    หมูเด้ง ช่วยหมูเด้งด้วย
                  </span>
                </p>
              </div>
              <div className={styles["event-detail-container"]}>
                <div>
                  <Image
                    src="/images/calendar-icon.png"
                    width={18}
                    height={20}
                    alt="Calendar icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>2 Nov 2024</p>
                </div>
                <div>
                  <Image
                    src="/images/clock-icon.png"
                    width={20}
                    height={20}
                    alt="Clock icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>09 : 00 น.</p>
                </div>
                <div>
                  <Image
                    src="/images/location-icon.png"
                    width={14}
                    height={20}
                    alt="Location icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>
                    สำนักหอสมุดเกษตรศาสตร์
                  </p>
                </div>
              </div>
              <div className={styles["event-description-container"]}>
                <p>
                  หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
                  มาเจอกันนะ..
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/images/default-participants-picture.png"
                      width={26}
                      height={26}
                      alt="Participants picture"
                    />
                  </div>
                  <div className={styles["number-of-participants-container"]}>
                    <div>
                      <Image
                        src="/images/participants-icon.png"
                        width={12}
                        height={11}
                        alt="Participants icon"
                      />
                    </div>
                    <div>
                      <p>10</p>
                    </div>
                  </div>
                </div>
                <Link href="/all-events/event">
                  <div>
                    <button className={styles["event-detail-button"]}>
                      รายละเอียด
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["event-container"]}>
            <div
              style={{ width: "454px", height: "250px", marginBottom: "20px" }}
            >
              <Image
                src="/images/default-event-picture.png"
                layout="responsive"
                width={100} // กำหนดให้เต็มหน้าจอ
                height={100}
                alt="Event picture"
              />
            </div>
            <div className={styles["event-info-container"]}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                  บอร์ดเกมมหาสนุก
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "regular" }}>
                  โดย{" "}
                  <span style={{ fontWeight: "bold" }}>
                    หมูเด้ง ช่วยหมูเด้งด้วย
                  </span>
                </p>
              </div>
              <div className={styles["event-detail-container"]}>
                <div>
                  <Image
                    src="/images/calendar-icon.png"
                    width={18}
                    height={20}
                    alt="Calendar icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>2 Nov 2024</p>
                </div>
                <div>
                  <Image
                    src="/images/clock-icon.png"
                    width={20}
                    height={20}
                    alt="Clock icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>09 : 00 น.</p>
                </div>
                <div>
                  <Image
                    src="/images/location-icon.png"
                    width={14}
                    height={20}
                    alt="Location icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>
                    สำนักหอสมุดเกษตรศาสตร์
                  </p>
                </div>
              </div>
              <div className={styles["event-description-container"]}>
                <p>
                  หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
                  มาเจอกันนะ..
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/images/default-participants-picture.png"
                      width={26}
                      height={26}
                      alt="Participants picture"
                    />
                  </div>
                  <div className={styles["number-of-participants-container"]}>
                    <div>
                      <Image
                        src="/images/participants-icon.png"
                        width={12}
                        height={11}
                        alt="Participants icon"
                      />
                    </div>
                    <div>
                      <p>10</p>
                    </div>
                  </div>
                </div>
                <Link href="/all-events/event">
                  <div>
                    <button className={styles["event-detail-button"]}>
                      รายละเอียด
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["event-container"]}>
            <div
              style={{ width: "454px", height: "250px", marginBottom: "20px" }}
            >
              <Image
                src="/images/default-event-picture.png"
                layout="responsive"
                width={100} // กำหนดให้เต็มหน้าจอ
                height={100}
                alt="Event picture"
              />
            </div>
            <div className={styles["event-info-container"]}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                  บอร์ดเกมมหาสนุก
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "regular" }}>
                  โดย{" "}
                  <span style={{ fontWeight: "bold" }}>
                    หมูเด้ง ช่วยหมูเด้งด้วย
                  </span>
                </p>
              </div>
              <div className={styles["event-detail-container"]}>
                <div>
                  <Image
                    src="/images/calendar-icon.png"
                    width={18}
                    height={20}
                    alt="Calendar icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>2 Nov 2024</p>
                </div>
                <div>
                  <Image
                    src="/images/clock-icon.png"
                    width={20}
                    height={20}
                    alt="Clock icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>09 : 00 น.</p>
                </div>
                <div>
                  <Image
                    src="/images/location-icon.png"
                    width={14}
                    height={20}
                    alt="Location icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>
                    สำนักหอสมุดเกษตรศาสตร์
                  </p>
                </div>
              </div>
              <div className={styles["event-description-container"]}>
                <p>
                  หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
                  มาเจอกันนะ..
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/images/default-participants-picture.png"
                      width={26}
                      height={26}
                      alt="Participants picture"
                    />
                  </div>
                  <div className={styles["number-of-participants-container"]}>
                    <div>
                      <Image
                        src="/images/participants-icon.png"
                        width={12}
                        height={11}
                        alt="Participants icon"
                      />
                    </div>
                    <div>
                      <p>10</p>
                    </div>
                  </div>
                </div>
                <Link href="/all-events/event">
                  <div>
                    <button className={styles["event-detail-button"]}>
                      รายละเอียด
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["event-container"]}>
            <div
              style={{ width: "454px", height: "250px", marginBottom: "20px" }}
            >
              <Image
                src="/images/default-event-picture.png"
                layout="responsive"
                width={100} // กำหนดให้เต็มหน้าจอ
                height={100}
                alt="Event picture"
              />
            </div>
            <div className={styles["event-info-container"]}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                  บอร์ดเกมมหาสนุก
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "regular" }}>
                  โดย{" "}
                  <span style={{ fontWeight: "bold" }}>
                    หมูเด้ง ช่วยหมูเด้งด้วย
                  </span>
                </p>
              </div>
              <div className={styles["event-detail-container"]}>
                <div>
                  <Image
                    src="/images/calendar-icon.png"
                    width={18}
                    height={20}
                    alt="Calendar icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>2 Nov 2024</p>
                </div>
                <div>
                  <Image
                    src="/images/clock-icon.png"
                    width={20}
                    height={20}
                    alt="Clock icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>09 : 00 น.</p>
                </div>
                <div>
                  <Image
                    src="/images/location-icon.png"
                    width={14}
                    height={20}
                    alt="Location icon"
                  />
                </div>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <p className={styles["event-detail-text"]}>
                    สำนักหอสมุดเกษตรศาสตร์
                  </p>
                </div>
              </div>
              <div className={styles["event-description-container"]}>
                <p>
                  หาเพื่อนไปเล่นบอร์ดเกม จอย ๆ กัน ห้องเล่นบอร์ดเกม ที่หอสมุด
                  มาเจอกันนะ..
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/images/default-participants-picture.png"
                      width={26}
                      height={26}
                      alt="Participants picture"
                    />
                  </div>
                  <div className={styles["number-of-participants-container"]}>
                    <div>
                      <Image
                        src="/images/participants-icon.png"
                        width={12}
                        height={11}
                        alt="Participants icon"
                      />
                    </div>
                    <div>
                      <p>10</p>
                    </div>
                  </div>
                </div>
                <Link href="/all-events/event">
                  <div>
                    <button className={styles["event-detail-button"]}>
                      รายละเอียด
                    </button>
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
