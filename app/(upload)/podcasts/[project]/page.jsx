// "use client";
// import Modal from "@/app/components/common/Modal";
// import Podcasts from "@/app/components/common/Podcasts";
// import TableSkeleton from "@/app/components/specific/TableSkelton";
// import {
//   CreatePodcast,
//   deletePodcats,
// } from "@/app/services/apis/podcstsService";
// import { getProjectById } from "@/app/services/apis/projectService";
// import { formatDate } from "@/app/utils/helpers";
// import { Data } from "@/public/assets/data/podcstData";
// import { useRouter, useParams } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import { useSelector } from "react-redux";

// export default function Project() {
//   const modalRef = useRef(null);
//   const Router = useRouter();
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [podcasts, setPodcasts] = useState([]);
//   const { project } = useParams();
//   const title = useSelector((state) => state.project.title);

//   // ->>> get all podcsts from one project
//   useEffect(() => {
//     getProjectById(project).then((res) => {
//       setPodcasts(res?.data?.podcast);
//       setLoading(false);
//     });
//   });

//   const openModal = (icon) => {
//     setSelectedIcon(icon);
//     if (modalRef.current) {
//       modalRef.current.showModal();
//     }
//   };

//   /// ->>> create podcast
//   const handleCreate = (inputValue, secondInputValue) => {
//     CreatePodcast(project, inputValue, secondInputValue).then((res) => {
//       setPodcasts((priv) => [...priv, res.data]);
//     });
//   };

//   const closeModal = () => {
//     if (modalRef.current) {
//       modalRef.current.close();
//     }
//   };

//   /// ->>> Edit podcast

//   const handleEdit = (id) => {
//     Router.push(`/podcasts/${id}/Edit`);
//   };

//   /// ->>> delete podcast

//   const handleDelete = (id) => {
//     confirmAlert({
//       message: "Are you sure you want to delete this podcast?",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             deletePodcats(id).then((res) => {
//               setPodcasts(podcasts.filter((podcast) => podcast._id !== id));
//             });
//           },
//         },
//         {
//           label: "No",
//         },
//       ],
//     });
//   };

//   return (
//     <div className="w-full md:h-[395px]   h-full flex flex-col gap-3 md:relative  overflow-y-auto hide-scrollbar">
//       <h1 className="text-primery md:text-[30px] text-[24px]  font-bold">
//         {title}
//       </h1>
//       <div className="w-full flex items-center md:justify-start justify-center gap-5 flex-wrap">
//         {Data.map((item, index) => (
//           <Podcasts
//             key={index}
//             title={item.title}
//             icon={item.icon}
//             onClick={() => openModal(item.icon)}
//           />
//         ))}

//         {/* /// ->>> modal reuing */}

//         <Modal
//           ref={modalRef}
//           id="my_modal"
//           placeholder="Podcast Name"
//           title="Podcast"
//           icon={selectedIcon}
//           input={true}
//           label="Podcast Name"
//           label2="Description"
//           onClose={closeModal}
//           errmsg="Please Enter Podcast Name"
//           errmsg2="Please Enter Description"
//           onSubmit={handleCreate}
//         />
//       </div>
//       <div className="w-full h-[70px] p-4 rounded-lg flex justify-between items-center text-white bg-primery">
//         <h1 className="md:font-semibold font-normal text-[14px] ">
//           All files are processed! Your widget is ready to go!
//         </h1>
//         <button className="md:w-[130px] md:h-[45px] w-[90px] h-[36px] sm:rounded-md  bg-white md:rounded-xl rounded-sm text-[13px] md:text-[16px] font-semibold text-black ">
//           {" "}
//           Try it out!
//         </button>
//       </div>
//       <div className="w-full  h-full  rounded-lg  overflow-x-auto hide-scrollbar">

//         {/* table */}

//         {podcasts?.length <= 0 && <TableSkeleton />}
//         {loading ? (
//           <TableSkeleton />
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="table">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th>
//                     {" "}
//                     <h1 className="font-bold">Nmae</h1>
//                   </th>
//                   <th>Upload Date & Time</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* row 1 */}

//                 {podcasts?.map((item, index) => (
//                   <tr key={index}>
//                     <td> {item.title} </td>
//                     <td>{formatDate(item.date)} </td>
//                     <td>{item.status} </td>
//                     <td>
//                       <div className="flex ">
//                         <button
//                           className="p-2 rounded-l-md  border hover:border-black   "
//                           onClick={() => handleEdit(item._id)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="p-2 rounded-r-md hover:border-black  border text-red-600"
//                           onClick={() => handleDelete(item._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Podcasts from "@/app/components/common/Podcasts";
import {
  CreatePodcast,
  deletePodcats,
} from "@/app/services/apis/podcstsService";
import { Data } from "@/public/assets/data/podcstData";
import PodcastModal from "@/app/components/specific/PodcastModal ";
import PodcastTable from "@/app/components/specific/PodcastTable ";
import { usePodcasts } from "@/app/hooks/usePodcasts ";
import { toast } from "sonner";

export default function Project() {
  const modalRef = useRef(null);
  const Router = useRouter();
  const { project } = useParams();
  const title = useSelector((state) => state.project.title);

  const { podcasts, loading, setPodcasts } = usePodcasts(project);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const openModal = (icon) => {
    setSelectedIcon(icon);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleCreate = (inputValue, secondInputValue) => {
    if (!project) {
      toast.error("Pleas select a project");
    }
    CreatePodcast(project, inputValue, secondInputValue).then((res) => {
      setPodcasts((prev) => [...prev, res.data]);
    });
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleEdit = (id) => {
    Router.push(`/podcasts/${id}/Edit`);
  };

  const handleDelete = (id) => {
    confirmAlert({
      message: "Are you sure you want to delete this podcast?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deletePodcats(id).then(() => {
              setPodcasts(podcasts.filter((podcast) => podcast._id !== id));
            });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="w-full md:h-[395px] h-full flex flex-col gap-3 md:relative overflow-y-auto hide-scrollbar">
      <h1 className="text-primery md:text-[30px] text-[24px] font-bold">
        {title}
      </h1>
      <div className="w-full flex items-center md:justify-start justify-center gap-5 flex-wrap">
        {Data.map((item, index) => (
          <Podcasts
            key={index}
            title={item.title}
            icon={item.icon}
            onClick={() => openModal(item.icon)}
          />
        ))}
      </div>
      <PodcastModal
        isId={project}
        ref={modalRef}
        selectedIcon={selectedIcon}
        handleCreate={handleCreate}
        closeModal={closeModal}
      />
      <div className="w-full h-[70px] p-4 rounded-lg flex justify-between items-center text-white bg-primery">
        <h1 className="md:font-semibold font-normal text-[14px]">
          All files are processed! Your widget is ready to go!
        </h1>
        <button className="md:w-[130px] md:h-[45px] w-[90px] h-[36px] sm:rounded-md bg-white md:rounded-xl rounded-sm text-[13px] md:text-[16px] font-semibold text-black">
          Try it out!
        </button>
      </div>
      <PodcastTable
        podcasts={podcasts}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
