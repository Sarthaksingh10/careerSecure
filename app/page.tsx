import ChatBox from "./_components/ChatBox";

export default function page() {
  return (
    <div>
      <h1 className="text-[30px] font-semibold m-[5px] p-[2px]">
        CareerSource
      </h1>
      <div className="flex flex-col justify-center items-center text-[20px]">
        <p>
          Problem Statement- FrontEnd-Builduing a chat modal with floating
          action
        </p>
        <p>
          {" "}
          button Backend-All the text entered by user should go in the database.
        </p>
      </div>
      <ChatBox />
    </div>
  );
}
