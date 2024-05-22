import { useContext } from "react";
import { AppContext } from "../../helper/Context";

import TimeLineIcon from "remixicon-react/TimeLineIcon";
import TempHotLineIcon from "remixicon-react/TempHotLineIcon";
import FireLineIcon from "remixicon-react/FireLineIcon";

export default function Summary() {
  const { countData, modal, setModal } = useContext(AppContext);

  return (
    <article className=" bg-red text-white p-5 rounded-lg flex flex-col w-72 gap-2">
      <section className=" flex flex-col gap-4">
        <div>
          <h2>Summary</h2>
        </div>
        <div className="flex flex-row justify-between place-items-center">
          <span>${countData[0].count}.00 </span>
          <button onClick={() => setModal(!modal)}>Checkout</button>
        </div>
      </section>
      <div className=" flex flex-row place-items-center justify-between">
        <span>
          {" "}
          <TimeLineIcon /> <p> {countData[0].count} min</p>
        </span>
        <span>
          {" "}
          <TempHotLineIcon /> <p> {countData[0].count} oz</p>
        </span>
        <span>
          {" "}
          <FireLineIcon /> <p> {countData[0].count} kcal</p>
        </span>
      </div>
    </article>
  );
}
