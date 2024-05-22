import { useContext } from "react";
import { AppContext } from "../../helper/Context";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

export default function Modal() {
  const { countData, setModal, modal } = useContext(AppContext);
  return (
    <article className="flex flex-col p-4 py-10 rounded-md bg-darkblue text-white h-min mt-20">
      <div className=" flex flex-row justify-end">
        <span
          onClick={() => setModal(!modal)}
          className=" bg-black cursor-pointer p-2 rounded-lg"
        >
          <CloseLineIcon />
        </span>
      </div>
      <div>
        <h2>Cart</h2>
      </div>
      <div className=" grid grid-cols-2 gap-10">
        {countData.map(
          (data: {
            id: number;
            image: string;
            name: string;
            bg: string;
            size: string;
            count: number;
          }) => {
            return (
              <div className=" flex flex-row justify-between gap-4 place-items-center bg-blue p-2 rounded-2xl">
                <div>
                  <img className="w-[100px]" src={data.image} alt="" />
                </div>
                <div>
                  <h4> {data.name} </h4>
                  <p> {data.size} </p>
                </div>
                <div className="text-black p-1">
                  <h3>{data.count}</h3>
                </div>
              </div>
            );
          }
        )}
      </div>
    </article>
  );
}
