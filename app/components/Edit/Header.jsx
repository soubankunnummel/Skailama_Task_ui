import React from "react";
import Button from "@/app/components/common/Button";

const Header = ({ isEditing, setIsEditing, handleSave }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-primary md:text-[30px] text-[20px] font-bold mb-4">
        Edit Transcript
      </h1>
      <div className="flex gap-4">
        {isEditing && (
          <>
            <button
              className="border border-red-500 text-rose-500 rounded-xl flex justify-center items-center md:p-4 p-1"
              onClick={() => setIsEditing(false)}
            >
              Discard
            </button>
            <Button
              text={"Save & Exit"}
              className={"md:p-3 p-3 text-[12px] md:text-[14px]"}
              onClick={handleSave}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
