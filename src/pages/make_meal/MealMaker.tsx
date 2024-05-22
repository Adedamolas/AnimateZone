import MakeMeal from "../../components/makemeal/Makemeal";
import Burger from "../../components/burger/Burger";
import Summary from "../../components/summary/Summary";
import Modal from "../../components/modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
interface MealMakerProps {
  theme: boolean;
  modal: boolean;
}
export default function MealMaker({ theme, modal }: MealMakerProps) {
  return (
    <section className="flex flex-col w-full align-middle justify-center place-items-center py-20 gap-10">
      <div>
        <h1>Make a Meal!</h1>
        <p>You have all the ingredients you could ever need.</p>
      </div>
      <section className="flex flex-row align-middle justify-center gap-24">
        <section className="flex flex-col justify-start gap-6">
          <MakeMeal theme={theme} />
          <Summary />
        </section>
        <section>
          <Burger />
        </section>
      </section>
      {modal ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 w-full h-full"
          >
            <section className="fixed top-0 w-full h-full bg-greytrans backdrop-blur-md text-black flex flex-row justify-center cursor-pointer">
              <Modal />
            </section>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </section>
  );
}
