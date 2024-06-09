"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pen from "@/public/assets/images/icons/Pen.svg";
import Search from "@/public/assets/images/icons/Search.svg";
import Button from "@/app/components/common/Button";
import { getProjectById } from "@/app/services/apis/projectService";
import { useParams } from "next/navigation";
import ParaSkelton from "@/app/components/specific/ParaSkelton";
import { EditPodcast, getPodcastById } from "@/app/services/apis/podcstsService";

function Edit() {
  const { project } = useParams();
  const [description, setDescription] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPodcastById(project).then((res) => {
      setDescription(res?.data?.description);
      setEditedDescription(res?.data?.description);
      setLoading(false);
    });
  },);

  const handleSave = () => {
    EditPodcast(project, editedDescription).then((res) => {
     setDescription(res?.data?.description);
    })
    setShow(false);
    setDescription(editedDescription);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-primery text-[30px] font-bold mb-4">
          Edit Transcript
        </h1>
        <div className="flex gap-4">
          {show && (
            <>
              <button
                className="border border-red-500 text-rose-500 rounded-xl flex justify-center items-center p-4"
                onClick={() => setShow(false)}
              >
                Discard
              </button>
              <Button
                text={"Save & Exit"}
                className={"p-3 text-[14px]"}
                onClick={handleSave}
              />
            </>
          )}
        </div>
      </div>

      <div className="w-full h-[370px] border-primery border rounded-xl p-3 flex flex-col">
        <div className="w-full h-10 flex justify-between items-center">
          {/* Edit button */}
          <div
            className="w-[120px] h-[30px] rounded-full cursor-pointer transition-opacity duration-300 opacity-100 flex justify-center items-center bg-secondery text-white gap-3"
            onClick={() => setShow(!show)}
          >
            <Image alt="Edit" src={pen} width={15} height={15} />
            <h1 className="text-sm">Edit Mode</h1>
          </div>
          {/* Edit button */}

          <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full border border-primery bg-[#75747477]">
            <Image alt="search" src={Search} width={15} height={15} />
          </div>
        </div>

        <div className="w-full overflow-y-auto hide-scrollbar p-2">
          {loading ? (
            <ParaSkelton />
          ) : show ? (
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-lg"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;
