import { Link } from "react-router-dom";

interface DiscoverProps {
  theme: boolean;
}

export default function Discover({ theme }: DiscoverProps) {
  return (
    <div>
      <section className=" flex flex-row pt-20 w-full justify-around align-middle">
        <div className=" flex flex-col align-middle justify-center space-y-3">
          <h1>Make your Meal</h1>
          <Link to={"/make"}>
            <button>Make Meal</button>
          </Link>
          <p>Make the perfect burger for yourself</p>
        </div>
        <div>
          <h1>Make your Meal</h1>
        </div>
      </section>
    </div>
  );
}
