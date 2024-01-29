// src/components/Modal.js

import React, { useState } from "react";

const Modal = ({ showModal, onClose }) => {
  return (
    // The modal backdrop
    showModal && (
      <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
        {/* Modal overlay */}
        <div className="fixed inset-0 bg-black opacity-50"></div>

        {/* Modal content */}
        <div className="bg-white p-6 rounded-lg z-10">
          <div className="flex justify-between ">
            <h2 className="text-xl font-bold p-2">Modal Title</h2>
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
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p>Modal content goes here.</p>

          <div className="mt-4 flex justify-center">{/* Close button */}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
