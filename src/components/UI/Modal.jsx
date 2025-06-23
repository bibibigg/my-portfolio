import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Modal({ title, children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-gray-700/50 z-10"
        onClick={onClose}
      />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="fixed top-1/8 rounded-md p-5 w-2xl max-w-11/12 z-20 m-auto text-shadow-gray-900 dark:text-white bg-white dark:bg-gray-700 dark:border dark:border-gray-600 max-h-[85vh] overflow-y-auto"
      >
        <h2 className="text-xl text-center font-semibold">{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
