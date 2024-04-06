import React from "react";
import { Button, Modal, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";
import PostModal from "./PostModal";

const ModalContent = ({ type, handleClose }) => {
  switch (type) {
    case "editpost":
      return (
        <PostModal handleClose={handleClose}/>
      );
    default:
      return null;
  }
};

const AppModal = () => {
  const modalType = useSelector((state) => state.modalReducer.type);
  const isOpen = useSelector((state) => state.modalReducer.isOpen);
  console.log("saas", isOpen, modalType);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent
    >
      <View className="flex-1 justify-center w-full p-4 bg-black bg-opacity-70 absolute bottom-0 border border-x-[#4d4b4b] border-t-[#4d4b4b] rounded-t-lg ">
        <ModalContent type={modalType} handleClose={handleClose} />
      </View>
    </Modal>
  );
};

export default AppModal;
