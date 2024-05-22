import AddLineIcon from "remixicon-react/AddLineIcon";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import { useContext } from "react";
import { AppContext } from "../../helper/Context";
import { motion, AnimatePresence } from "framer-motion";

interface MakeMealProps {
  theme: boolean;
}
export default function MakeMeal({ theme }: MakeMealProps) {
  const { burgerData, setBurgerData, countData, setCountData } =
    useContext(AppContext);
  const handleIncrement = (id: number, burgerObj: any) => {
    const updatedItems = countData.map(
      (item: {
        id: number;
        image: string;
        name: string;
        bg: string;
        count: number;
      }) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      }
    );
    setCountData(updatedItems);
    setBurgerData([...burgerData, burgerObj]);
  };

  const handleDecrement = () => {
    const updatedItems = countData.map(
      (item: {
        id: number;
        image: string;
        name: string;
        bg: string;
        count: number;
      }) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
          const updatedItems = [...countData];
        }
      }
    );
  };

  return (
    <section className=" flex flex-row justify-around h-[40%] md:flex-col">
      <div className=" grid grid-cols-2 gap-6 overflow-scroll p-4">
        {countData.map(
          (data: {
            id: number;
            image: string;
            name: string;
            bg: string;
            count: number;
          }) => {
            return (
              // <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <article
                  className={`flex flex-col align-middle p-5 bg-${data.bg} bg-opacity-30 rounded-2xl`}
                  key={data.id}
                >
                  <div>
                    <img width={"100px"} src={data.image} alt="" />
                  </div>
                  <div className=" flex flex-col justify-between gap-5">
                    <span>
                      <h3> {data.name} </h3>
                      <p>Size: small</p>
                    </span>
                    <span className=" flex flex-row align-middle justify-center place-items-center gap-3">
                      <button className="p-2 rounded-md">
                        <AddLineIcon
                          onClick={() =>
                            handleIncrement(data.id, {
                              name: data.name,
                              image: data.image,
                            })
                          }
                          className={theme ? `text-white` : `text-black`}
                        />{" "}
                      </button>
                      <p>{data.count}</p>
                      <button className="p-2 rounded-md">
                        <SubtractLineIcon
                          onClick={handleDecrement}
                          className={theme ? `text-white` : `text-black`}
                        />{" "}
                      </button>
                    </span>
                  </div>
                </article>
              </motion.div>
              // </AnimatePresence>
            );
          }
        )}
      </div>
    </section>
  );
}
