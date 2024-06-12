"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pen from "@/public/assets/images/icons/Pen.svg";
import searchIcon from "@/public/assets/images/icons/Search.svg";
import Button from "@/app/components/common/Button";
import { useParams } from "next/navigation";
import Header from "@/app/components/Edit/Header";
import EditableArea from "@/app/components/Edit/EditableArea";
import {
  EditPodcast,
  getPodcastById,
} from "@/app/services/apis/podcstsService";

function Edit() {
  const { project } = useParams();
  const [description, setDescription] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPodcastById(project).then((res) => {
      const description = res?.data?.description || "";
      setDescription(description);
      setEditedDescription(description);
      setLoading(false);
    });
  }, [project]);

  const handleSave = () => {
    EditPodcast(project, editedDescription).then((res) => {
      const description = res?.data?.description || editedDescription;
      setDescription(description);
      setEditedDescription(description);
    });
    setIsEditing(false);
  };

  return (
    <div className="w-full h-full">
      <Header
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleSave={handleSave}
      />

      <div className="w-full h-[370px] border-primary border rounded-xl p-3 flex flex-col">
        <div className="w-full h-10 flex justify-between items-center">
          <div
            className="w-[120px] h-[30px] rounded-full cursor-pointer transition-opacity duration-300 opacity-100 flex justify-center items-center bg-secondery text-white gap-3"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Image alt="Edit" src={pen} width={15} height={15} />
            <h1 className="text-sm">Edit Mode</h1>
          </div>
          <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full border border-primary bg-[#75747477]">
            <Image alt="search" src={searchIcon} width={15} height={15} />
          </div>
        </div>

        <EditableArea
          loading={loading}
          isEditing={isEditing}
          description={description}
          editedDescription={editedDescription}
          setEditedDescription={setEditedDescription}
        />
      </div>
    </div>
  );
}

export default Edit;
