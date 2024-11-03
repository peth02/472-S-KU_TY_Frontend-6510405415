"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { login } from "./action";
import { redirect } from "next/navigation";

export default function Header() {
  const [onLogin, setOnLogin] = useState(true);

  function submitLogin() {
    setOnLogin(true);
  }

  function submitLogout() {
    setOnLogin(false);
  }

  return onLogin ? (
    <nav className={styles["header-container"]}>
      <div className={styles["header-logo-text"]}>
        <div>
          <Image
            src="/images/tree-logo.png"
            width={68} // กำหนดความกว้าง
            height={68}
            alt="Tree logo"
          />
        </div>
        <div style={{ marginLeft: "8px" }}>
          <p className={styles["header-text-kuty"]}>KU TY</p>
          <p
            style={{
              fontsize: "13px",
              fontweight: "medium",
              color: "rgba(86, 86, 86, 1)",
            }}
          >
            find friends for activity
          </p>
        </div>
      </div>

      <ul style={{ display: "flex", alignItems: "center" }}>
        <li className={styles["menu-item"]}>
          <a href="/all-events">กิจกรรมทั้งหมด</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/all-events-created">กิจกรรมที่สร้าง</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/joined-events">กิจกรรมที่เข้าร่วม</a>
        </li>
      </ul>

      <div
        className={styles["container"]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => redirect("/profile")}
        >
          <Image
            src="/images/default-profile-picture.png"
            width={45} // กำหนดความกว้าง
            height={45}
            alt="Profile logo"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className={styles["text-username"]}>Somchai Marison</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className={styles["logout-button"]}>
            <Image
              src="/images/logout-picture.png"
              width={24} // กำหนดความกว้าง
              height={24}
              alt="Logout logo"
            />
          </button>
        </div>
      </div>
    </nav>
  ) : (
    <nav className={styles["header-container"]}>
      <div className={styles["header-logo-text"]}>
        <div>
          <Image
            src="/images/tree-logo.png"
            width={68} // กำหนดความกว้าง
            height={68}
            alt="Tree logo"
          />
        </div>
        <div style={{ marginLeft: "8px" }}>
          <p className={styles["header-text-kuty"]}>KU TY</p>
          <p
            style={{
              fontsize: "13px",
              fontweight: "medium",
              color: "rgba(86, 86, 86, 1)",
            }}
          >
            find friends for activity
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className={styles["login-button-header"]} onClick={login}>
            เข้าสู่ระบบ
          </button>{" "}
        </div>
      </div>
    </nav>
  );
}
