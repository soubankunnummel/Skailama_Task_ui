"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import settings from "@/public/assets/images/icons/settings.svg";
import bell from "@/public/assets/images/icons/bell.svg";
import Logo from "../common/Logo";
import Cookies from "js-cookie";
import Modal from "../common/Modal";
import { createAccount } from "@/app/services/apis/userService";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/hooks/useTheam";
import { IoMoonOutline } from "react-icons/io5";
import { toast } from "sonner";

export default function Nave() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const modalRef = useRef(null);
  const Router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    setShowDropdown(false);
    Router.push("/");
  };

  // Open login modal
  const openLoginModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  // Handle login
  const handleLogin = (inputValue) => {
    createAccount(inputValue).then((res) => {
      Cookies.set("token", res.data.token);
      setIsLoggedIn(true);
      closeModal();
      Router.push("/projects");
    });
  };

  // Close modal
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  

  return (
    <nav className="sticky top-0 backdrop-blur-sm">
      <div className="w-full h-[70px] flex justify-between items-center z-30 p-4 relative">
        <div className="flex justify-between items-center gap-2">
          {/* Logo */}
          <Logo />
        </div>
        <div className="flex justify-between items-center gap-4">
          {/* Bell & Settings */}
          <Image
            alt="settings"
            src={settings}
            width={30}
            height={30}
            className={`${showDropdown ? "rotate-45" : "rotate-0"}`}
            onMouseEnter={() => setShowDropdown(true)}
          />
          <div
            className={`${showDropdown ? "block" : "hidden"} justify-center items-center absolute shadow-xl  z-10 right-16 top-12 md:right-28`}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <ul className="p-2 shadow-xl menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => {
                isLoggedIn ?  Router.push('/podcasts/1/Settings') : toast.error("Please create an account first")
              }}  className={`  ${isLoggedIn ? 'cursor-pointer':'cursor-not-allowed text-gray-400'}`}  >
                <a>Profile</a>
              </li>
              <li onClick={isLoggedIn ? handleLogout : openLoginModal}>
                <a>{isLoggedIn ? "Log Out" : "Log In"}</a>
              </li>
            </ul>
          </div>
          <Image alt="settings" src={bell} width={30} height={30} />
         
        </div>
      </div>
      <Modal
        id="my_modal"
        label={"Enter Email"}
        title={"Welcome"}
        placeholder="Type here"
        errmsg={"Email can't be empty"}
        onSubmit={handleLogin}
        onClose={closeModal}
        ref={modalRef}
      />
    </nav>
  );
}
