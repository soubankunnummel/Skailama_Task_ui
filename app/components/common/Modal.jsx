"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import React, { useState, forwardRef } from "react";

const Modal = forwardRef(
  (
    {
      id,
      title,
      onClose,
      placeholder,
      errmsg,
      errmsg2,
      label,
      label2,
      onSubmit,
      icon,
      input,
      isId,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [secondInputValue, setSecondInputValue] = useState("");
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const Pathname = usePathname()

    const handleUpload = () => {
      let valid = true;
      if (!inputValue.trim()) {
        setError(errmsg);
        valid = false;
      } else {
        setError("");
      }

      if (input && !secondInputValue.trim()) {
        setError2(errmsg2);
        valid = false;
      } else {
        setError2("");
      }

      if (valid) {
        onSubmit(inputValue, secondInputValue);
        setInputValue("");
        setSecondInputValue("");
        onClose();
      }
    };

    return (
      <dialog id={id} className="modal" ref={ref}>
        <div className="bg-white w-[90%] md:w-[60%] flex justify-center items-start text-center rounded-lg p-[3%] gap-3 flex-col">
          { Pathname === '/' || isId?.length >= 5 ? (
            <>
              <div className="flex gap-3">
                {icon && <Image alt="log" src={icon} width={40} height={40} />}
                <h3 className="font-bold text-[25px]">{title}</h3>
              </div>
              <label htmlFor="modal-input" className="text-secondery">
                {label}
              </label>
              <input
                type="text"
                id="modal-input"
                className="border border-black w-[80%] h-[60px] p-5 rounded-[8px]"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {error && <p className="text-red-600 text-[9px]">{error}</p>}
              {input && (
                <>
                  <label htmlFor="modal-input-2" className="text-secondery">
                    {label2}
                  </label>
                  <input
                    type="text"
                    id="modal-input-2"
                    className="border border-black w-[80%] h-[60px] p-5 rounded-[8px]"
                    placeholder={placeholder}
                    value={secondInputValue}
                    onChange={(e) => setSecondInputValue(e.target.value)}
                  />
                  {error2 && (
                    <p className="text-red-600 text-[9px]">{error2}</p>
                  )}
                </>
              )}
              <div className="modal-action flex justify-end w-full">
                {!input ? (
                  <>
                    <button className="btn text-red-500" onClick={onClose}>
                      Cancel
                    </button>
                    <button
                      className="w-[80px] rounded-lg bg-primery text-white"
                      onClick={handleUpload}
                    >
                      Create
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="w-[100px] h-[40px] rounded-lg bg-white border border-black text-black"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-[100px] h-[40px] rounded-lg bg-btn text-white"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between w-full items-center ">
                <h3 className="text-[25px] font-bold">
                  Please select one project
                </h3>
                <Link
                  href={"/projects"}
                  className=" btn  "
                >
                  <h3>Go to projects</h3>
                </Link>
              </div>
            </>
          )}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
