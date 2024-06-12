import React, { forwardRef } from "react";
import Modal from "@/app/components/common/Modal";

const PodcastModal = forwardRef(
  ({ selectedIcon, handleCreate, closeModal, isId }, ref) => {


    return (
      <>
        <Modal
          isId={isId}
          ref={ref}
          id="my_modal"
          placeholder="Podcast Name"
          title="Podcast"
          icon={selectedIcon}
          input={true}
          label="Podcast Name"
          label2="Description"
          onClose={closeModal}
          errmsg="Please Enter Podcast Name"
          errmsg2="Please Enter Description"
          onSubmit={handleCreate}
        />
      </>
    );
  }
);

PodcastModal.displayName = "PodcastModal";

export default PodcastModal;
