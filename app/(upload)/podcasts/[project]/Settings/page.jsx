"use client";
import Loading from "@/app/components/common/Loading";
import Subscription from "@/app/components/specific/Subscription";
import { edituser, getUser } from "@/app/services/apis/userService";
import React, { useEffect, useState } from "react";
import User from '@/public/assets/images/img/user.png'
import Image from "next/image";

export default function Settings() {
  const [user, setUser] = useState({ name: "", email: "", profile: "" });
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => setUser({ name: res.data.name, email: res.data.email, profile: res.data.profile }))
      .catch((error) => console.error("Error fetching user data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e) => {
    setUser({ ...user, name: e.target.value });
    setIsEditing(true);
  };

  const handleSave = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", user.name);
    try {
      const res = await edituser(formData);
      setUser({ ...user, name: res.data.name });
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 relative">
      {/* Loading */}
      {loading && (
        <div className="w-full h-full bg-white/[0.5] z-30 flex justify-center items-center backdrop-blur-[0.05px] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">
          <Loading className="ring-2 ring-rose-500" />
        </div>
      )}
      {/* Loading */}

      <div className="w-full">
        <h1 className="md:text-[30px] text-[20px] text-start font-bold">Account Settings</h1>
      </div>

      {/* Edit Profile */}
      <div className="w-full flex items-center sm:flex-row flex-col sm:gap-0 gap-3  justify-evenly p-2">
        <div className="sm:w-[100px] h-[68px] w-[68px] sm:h-[100px] rounded-full flex justify-center items-center bg-blue-100">
          <Image alt="User Profile" src={User} />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            title="Name"
            value={user.name}
            onChange={handleInputChange}
            className="w-full sm:p-4 p-2 border-black h-[30px]  sm:h-[55px] rounded-md border"
          />
          {isEditing && (
            <button
              onClick={handleSave}
              className="mt-2 border border-blue-500 text-black p-1 rounded-md"
            >
              Save
            </button>
          )}
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            title="Email"
            readOnly
            className="w-full md:p-4 p-2 border-black h-[30px]  sm:h-[55px] rounded-md border bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>
      {/* Edit Profile */}

      {/* Subscription bar */}
      <Subscription />
      {/* Subscription bar */}
    </div>
  );
}
