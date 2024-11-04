"use client";

import { fetchUserData, updateUserImage } from "./apis/userApi";
import { useUserContext } from "./UserContext";
import { useRouter, usePathname } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { user, logout } = useUserContext();
  const router = useRouter();
  const currentPath = usePathname();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserData(user.userId)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setError(error);
        });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return user ? (
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
        <button
          onClick={() => router.push("/all-events")}
          className={styles["menu-item-button"]}
          style={{
            color: currentPath.includes("/all-events") ? "green" : "inherit",
          }}
        >
          กิจกรรมทั้งหมด
        </button>
        <button
          onClick={() => router.push("/created-events")}
          className={styles["menu-item-button"]}
          style={{
            color: currentPath.includes("/created-events")
              ? "green"
              : "inherit",
          }}
        >
          กิจกรรมที่สร้าง
        </button>
        <button
          onClick={() => router.push("/joined-events")}
          className={styles["menu-item-button"]}
          style={{
            color: currentPath.includes("/joined-events") ? "green" : "inherit",
          }}
        >
          กิจกรรมที่เข้าร่วม
        </button>
      </ul>

      <div className={styles["container"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => router.push("/profile")}
        >
          <Image style={{borderRadius:'100%'}}
            src={userData?.imageUrl || "/images/default-profile-picture.png"}
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
          <p
            onClick={() => router.push("/profile")}
            className={styles["text-username"]}
          >
            {user.firstName} {user.lastName}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={handleLogout} className={styles["logout-button"]}>
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
    </nav>
  );
}
