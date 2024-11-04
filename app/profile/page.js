'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { fetchUserData, updateUserImage } from "../apis/userApi";
import { useUserContext } from "../UserContext";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useUserContext();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();

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

  const handleEditProfile = () => {
    router.push("/profile/edit");
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const newImageUrl = await updateUserImage(user.userId, formData);
      setUserData((prevData) => ({
        ...prevData,
        imageUrl: newImageUrl,
      }));
      console.log("New Image URL:", newImageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error loading user data: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        {/* Profile Avatar */}
        <Image
            src={userData.imageUrl || "/images/default-profile-picture.png"}
            alt="Profile Avatar"
            width={100}
            height={100}
            className={styles.avatarImage}
          />

        {/* Profile Info */}
        <div className={styles.profileInfo}>
          <div className={styles.profileHeaderContent}>
            <div className={styles.profileNameRow}>
              <h1 className={styles.profileName}>{userData.firstName} {userData.lastName}</h1>
            </div>
            <div className={styles.profileButtonRow}>
              <button className={styles.profileGreyButton}>แก้ไขโปรไฟล์</button>
              <button className={styles.profileGreyButton} onClick={handleEditProfile}>แก้ไขรายละเอียด</button>
            </div>
          </div>
          <p className={styles.profileFaculty}>
            {userData.departmentNameTh} {userData.majorName}
          </p>
          <h2>อีเมล์</h2>
          <p>{userData.email}</p>
          <p className={styles.profileEmail}>{userData.email}</p>
          <h2>รายละเอียด</h2>
          <p>{userData.description}</p>
        </div>
      </div>
      <hr className={styles.profileDivider} />
      <form onSubmit={handleImageUpload} className={styles.imageUploadForm}>
        <label htmlFor="imageUpload">Upload Profile Picture</label>
        <input type="file" id="imageUpload" onChange={handleImageChange} />
        <button type="submit" className={styles.uploadButton}>Upload</button>
      </form>
    </div>
  );
}