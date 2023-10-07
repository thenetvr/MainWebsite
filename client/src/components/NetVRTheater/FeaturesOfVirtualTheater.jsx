// constants
import { netVRTheaterPoints } from "../../utils/Constants";
// eslint-disable-next-line react/prop-types
export default function FeaturesOfVirtualTheater({ listStyling }) {
  const { features } = netVRTheaterPoints;
  return (
    <div className="phone:flex phone:flex-col grid grid-cols-3 gap-4 mb-10">
      <div className="text-sky-500 text-3xl">Features Of Virtual Theater</div>
      <div className="col-span-2">
        <ul
          role="list"
          className={listStyling}
          style={{ listStyleType: "circle" }}
        >
          {features.map((point, idx) => (
            <li className="w-6/12 pr-6" key={idx}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
