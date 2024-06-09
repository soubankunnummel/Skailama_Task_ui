"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import potcast from "@/public/assets/images/img/potcast.png";
import plus from "@/public/assets/images/icons/plus.svg";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import BacktoHome from "../components/common/BacktoHome";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import { createAccount } from "../services/apis/userService";
import { toast } from "sonner";
import { createProject } from "../services/apis/projectService";


export default function Home() {
  const [isCreate, setIsCreate] = useState(false);
  const modalRef = useRef(null);
  const Router = useRouter();
  const user = cookie.get("token");

  // ->>>  auto mate modal in first render

  useEffect(() => {
    if (!user && modalRef.current) {
      modalRef.current.showModal();
    }
  },);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  // ->>> handle create project

  const handleCreate = () => {
    if (!user) {
      toast.error("Please create an account first");
      return;
    }
    setIsCreate(true);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };


  const handleSubmit = (inputValue) => {
    if (isCreate) {
      createProject(inputValue).then((res) => {
        closeModal();
        Router.push("/projects");
      }).catch((error) => {
        toast.error("Failed to create project");
      });
    } else {
      createAccount(inputValue).then((res) => {
        Cookies.set("token", res.data.token);
        closeModal();
        Router.push("/projects");
      }).catch((error) => {
        toast.error("Failed to create account");
      });
    }
  };


  return (
    <>
      <div className="h-full w-full px-[3%] sm:px-[5%] sm:h-fit flex justify-center items-center">
        <div className="mt-10 md:mt-0 md:w-[1100px] sm:w-[500px] sm:h-fit   ">
          <BacktoHome />
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-[37.41px] text-primary font-bold">
              Create a New Project
            </h1>
            <Image
              alt="landing"
              src={potcast}
              className="w-[310.03px] h-[180.67px]"
            />
            <p className="text-center px-9 text-[16px] text-[#838383]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              consectetur ut aliquam minus accusantium laboriosam ipsa.
              Voluptatum, fugit debitis! Accusantium tempora est numquam
              delectus reprehenderit nostrum nihil architecto totam possimus.
            </p>
            <Button
              text={"Create New Project"}
              className="w-[330.83px] h-[78px] hover:-translate-y-1"
              icon={plus}
              onClick={handleCreate}
            />
          </div>
        </div>
      </div>

      <Modal
        id="my_modal"
        label={isCreate ? "Enter Project Name" : "Enter Email"}
        title={isCreate ? "Create Project" : "Welcome"}
        placeholder="Type here"
        errmsg={
          isCreate ? "Project Name can't be empty" : "Email can't be empty"
        }
        onSubmit={handleSubmit}
        onClose={closeModal}
        ref={modalRef}
      />
    </>
  );
}
