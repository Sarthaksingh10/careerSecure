"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};
export default function ModalWindow({ isOpen, setIsOpen }: ModalProps) {
  const [message, setMessage] = useState("");

  const handleSendMessageToDatabase = async () => {
    if (!message.trim()) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setMessage(""); // Clear after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="fixed right-[50px] bottom-[100px] w-[300px] h-[400px]   bg-white rounded-lg shadow-xl flex flex-col justify-between border z-50">
        {/* Header */}
        <div className="flex justify-between bg-blue-600  text-lg font-semibold  rounded-t-lg">
          <div className="p-4 border-b  text-white">Chat Support</div>
          <div>
            <AiOutlineClose
              onClick={() => setIsOpen(!isOpen)}
              className="mt-[22px] mr-[4px]"
            />
          </div>
        </div>
        {/* Body  */}
        <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 break-words">
          <p className="text-center text-gray-400">
            {message.trim().length > 0 ? message : "How Can I help You?"}
          </p>
        </div>

        {/* Footer - Input box */}
        <div className="p-2 border-t flex items-center gap-2 bg-gray-100 rounded-b-lg">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            className="flex-1 px-3 py-2 text-sm border  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button
            onClick={handleSendMessageToDatabase}
            className="p-2 text-blue-600 hover:text-blue-800"
          >
            <GoChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
