import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-50"
      ></div>

      <div className="bg-white p-6 rounded-lg z-10">
        <div className="flex justify-between ">
          <button
            onClick={onClose}
            type="button"
            className="bg-white rounded-md p-2 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ariaHidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
