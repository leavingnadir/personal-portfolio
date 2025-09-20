import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full grid content-center mx-auto max-w-[1280px]" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
