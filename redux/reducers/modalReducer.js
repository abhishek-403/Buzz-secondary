import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";

const initialStateModal = {
  isOpen: false,
  type: null,
  id:null,
};
const modalReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        type: action.payload.type,
        id: action.payload.id,
      };
    case CLOSE_MODAL:
      return { ...state, isOpen: false, type: null,id:null };
    default:
      return state;
  }
};

export default modalReducer;
