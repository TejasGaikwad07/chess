import { Button } from "../components/Button";

export const Landing = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 ">
      <div className="px-28 py-10 flex justify-end">
        <img className="h-auto max-w-md" src={"/ChessBoard.jpeg"} />
      </div>
      <div className="flex justify-start py-10 grid grid-cols-1">
        <div className="pb-3 text-4xl text-gray-50">
          Play Chess Online on the #2 Site!
        </div>
        <div className="py-2">
          <Button />
        </div>
      </div>
    </div>
  );
};
