import React from "react";
import { formatDate } from "@/app/utils/helpers";
import TableSkeleton from "./TableSkelton";
// import TableSkeleton from "@/app/components/specific/TableSkeleton";

const PodcastTable = ({ podcasts, loading, handleEdit, handleDelete }) => (
  <div className="w-full h-full rounded-lg overflow-x-auto hide-scrollbar">
    {loading ? (
      <TableSkeleton />
    ) : (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <h1 className="font-bold">Name</h1>
              </th>
              <th>Upload Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {podcasts.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.status}</td>
                <td>
                  <div className="flex">
                    <button
                      className="p-2 rounded-l-md border hover:border-black"
                      onClick={() => handleEdit(item._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-2 rounded-r-md hover:border-black border text-red-600"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default PodcastTable;
