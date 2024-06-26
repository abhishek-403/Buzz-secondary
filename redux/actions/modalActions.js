export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (type,id) => {
  return { type: OPEN_MODAL, payload: { type,id } };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
