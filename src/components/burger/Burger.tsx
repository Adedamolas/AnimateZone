import { useContext } from "react";
import { AppContext } from "../../helper/Context";
import { motion, AnimatePresence } from "framer-motion";

export default function Burger() {
  const { burgerData } = useContext(AppContext);
  return (
    <section className="flex flex-col align-middle justify-start gap-0">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
      >
        <img
          width={"400px"}
          src="./assets/bun_top.svg"
          alt=""
          className="bun-top"
        />
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-start w-full place-items-center align-top h-[10rem] overflow-scroll object-contain"
        >
          {burgerData.map((data: any) => {
            return (
              <img
                className=" object-contain"
                width={"300px"}
                src={data.image}
                alt=""
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
      >
        <img
          width={"400px"}
          src="./assets/burger_bottom.svg"
          alt=""
          className="bun-bottom"
        />
      </motion.div>
    </section>
  );
}
