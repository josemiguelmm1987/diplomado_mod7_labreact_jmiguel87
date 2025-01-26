import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, type }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <motion.div
        className={`notification-${type}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`modal-content ${type}`}>
          <h2>{type === "success"}</h2>
          <p>{message}</p>
          <button className="close-btn-success" onClick={onClose}>
            X
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalInfo;
