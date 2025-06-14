"use client";

import { useState } from "react";
import ModalWindow from "@/app/_components/ModalWindow";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(): void {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className=" absolute bottom-[70px] right-[50px] ">
        <button onClick={handleClick} className="cursor-pointer">
          💬 Let&apos;s Talk
        </button>
      </div>
      {isOpen && <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
