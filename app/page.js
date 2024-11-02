"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { login } from "./action";
import { useFromState } from "react-dom";

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles["login-container"]}>
        <div className={styles["login-logo-text"]}>
          <Image
            src="/images/tree-logo.png"
            width={378} // กำหนดความกว้าง
            height={378}
            alt="Tree logo"
          />
          <p style={{ fontSize: "83px", fontWeight: "bold" }}>KU TY</p>
          <p
            style={{
              fontSize: "30px",
              fontweight: "medium",
              color: "rgba(86, 86, 86, 1)",
            }}
          >
            find friends for activity
          </p>
        </div>

        <div className={styles["input-login-container"]}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "77px",
              marginBottom: "40px",
            }}
          >
            เข้าสู่ระบบ
          </p>
          <div>
            <p
              style={{
                fontSize: "16px",
                fontweight: "regular",
                marginBottom: "10px",
                color: "rgba(86, 86, 86, 1)",
              }}
            >
              บัญชีนนทรี
            </p>
            <input
              className={styles["input-login"]}
              placeholder="Input Field"
            />
            <p
              style={{
                marginBottom: "30px",
                color: "rgba(238, 29, 82, 1)",
                fontsize: "14px",
                height: "14px",
              }}
            >
              error
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "16px",
                fontweight: "regular",
                marginBottom: "10px",
                color: "rgba(86, 86, 86, 1)",
              }}
            >
              รหัสผ่าน
            </p>
            <input
              className={styles["input-login"]}
              placeholder="Input Password"
            />
            <p
              style={{
                marginBottom: "70px",
                color: "rgba(238, 29, 82, 1)",
                fontsize: "14px",
                height: "14px",
              }}
            >
              error
            </p>
          </div>

          <div>
            <div
              style={{
                marginBottom: "70px",
                fontSize: "16px",
                display: "flex",
                alignItems: "left",
              }}
            >
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" style={{ marginLeft: "8px" }}>
                Remember Me
              </label>
            </div>
          </div>

          <div>
            <button
              className={styles["login-button-main"]}
              onClick={login}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
