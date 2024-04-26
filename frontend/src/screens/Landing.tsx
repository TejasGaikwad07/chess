import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-2 gap-4 ">
        <div className="px-28 py-10 flex justify-end">
          <img className="h-auto max-w-2lg" src={"/ChessBoard.jpeg"} />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-start py-10 grid grid-cols-1">
            <div className="pb-3 text-5xl text-gray-50 font-bold">
              <h1> Play Chess Online on the #2 Site! </h1>
            </div>
            <div className="mt-4 flex justify-center ">
              <Button
                onClick={() => {
                  navigate("/game");
                }}
              >
                Play Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
