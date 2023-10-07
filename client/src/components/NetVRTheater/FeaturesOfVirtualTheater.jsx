// constants
import { netVRTheaterPoints } from "../../utils/Constants";
// eslint-disable-next-line react/prop-types
export default function FeaturesOfVirtualTheater({ listStyling }) {
  const { features } = netVRTheaterPoints;
  return (
    <div className="mb-10 flex flex-col justify-center">
      <div className="sm:text-left sm:text-3xl text-sky-500 text-2xl text-center">
        Features Of Virtual Theater
      </div>
      <div className="sm:flex col-span-2">
        <ul
          role="list"
          className={listStyling}
          style={{ listStyleType: "circle" }}
        >
          {features.map((point, idx) => (
            <li className="phone:w-6/12 w-full pr-6" key={idx}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
