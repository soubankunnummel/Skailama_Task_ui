"use client";
import React, { useEffect, useRef, useState } from "react";
import BacktoHome from "../../components/common/BacktoHome";
import Button from "../../components/common/Button";
import plus from "@/public/assets/images/icons/plus.svg";
import ProjectCard from "../../components/common/ProjectCard";
import { useRouter } from "next/navigation";
import { getBgColor, getInitials } from "../../utils/helpers";
import { createProject } from "@/app/services/apis/projectService";
import ProjectCardSkeleton from "@/app/components/common/ProjectSkeleton";
import { useDispatch } from "react-redux";
import useFetchProjects from "@/app/hooks/useFetchProjects";
import Modal from "@/app/components/common/Modal";
import { setId, setTitle } from "@/lib/features/podcasts/projectSlice";

function Projects() {
  const Router = useRouter();
  const modalRef = useRef(null);
  const [isCreate, setIsCreate] = useState(false);
  const { projects, loading, addProject } = useFetchProjects();
  const dispatch = useDispatch();
  // ->>> handle create project

  const handleCreate = () => {
    setIsCreate(true);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  /// ->>> creae porject
  const handleSubmit = (inputValue) => {
    if (isCreate) {
      createProject(inputValue)
        .then((res) => {
          addProject(res.data);
          closeModal();
          Router.push("/projects");
        })
        .catch((error) => {
          toast.error("Failed to create project");
        });
    }
  };

  // ->> close modal

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }; 
  return (
    <div className="w-full h-full px-[3%] flex justify-center md:mt-6 mt-20  items-center relaative ">
      <div className="w-[1100px] overflow-y-auto ">
        <BacktoHome />

        {/* ////////////title /////////////*/}
        <div className="w-full flex md:mt-3 mt-10 justify-between items-center">
          <h1 className="text-primery md:text-[40px] text-[28px] font-bold  ">Projects</h1>
          <Button
            text={"Create New Project"}
            icon={plus}
            className={"md:w-[300px] md:h-[70px] sm:h-[60px] h-[40px] w-[200px] sm:w-[250px] "}
            onClick={handleCreate}
          />
        </div>

        <div className="w-full py-6 flex flex-wrap gap-5  ">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            : projects?.map((item, index) => (
                <ProjectCard
                  bg={getBgColor(index)}
                  title={item.title}
                  smallTittle={getInitials(item.title)}
                  episods={item.episods}
                  onClick={() => {
                    Router.push(`podcasts/${item._id} `);
                    dispatch(setId(item._id));
                    dispatch(setTitle(item.title))
                  }}
                  key={index}
                />
              ))}
        </div>

        <Modal
          id="my_modal"
          label={isCreate && "Enter Project Name"}
          title={isCreate && "Create Project"}
          placeholder="Type here"
          errmsg={isCreate && "Project Name can't be empty"}
          onSubmit={handleSubmit}
          onClose={closeModal}
          ref={modalRef}
        />
      </div>
    </div>
  );
}

export default Projects;
