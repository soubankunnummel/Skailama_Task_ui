import React from "react";
import ParaSkelton from "../specific/ParaSkelton";

const EditableArea = ({
  loading,
  isEditing,
  description,
  editedDescription,
  setEditedDescription,
}) => {
  return (
    <div className="w-full overflow-y-auto hide-scrollbar p-2">
      {loading ? (
        <ParaSkelton />
      ) : isEditing ? (
        <textarea
          className="w-full h-full p-2 border border-gray-300 rounded-lg"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default EditableArea;
