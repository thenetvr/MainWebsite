import viewers from "../../assets/NetVRTheater/viewers.png";
import contentCreators from "../../assets/NetVRTheater/contentCreators.png";
import { netVRTheaterPoints } from "../../utils/Constants";
import ListValues from "./listValues";

// eslint-disable-next-line react/prop-types
export default function AvailableFeatures({ listStyling }) {
  const { userViewers, contentCreatorsFeatures } = netVRTheaterPoints;

  const data = [
    {
      val: userViewers,
      mar: "mr-2",
      headText: "User/Viewers",
      image: viewers,
      pad: 5,
      listValues: false,
    },
    {
      val: contentCreatorsFeatures,
      mar: "ml-2",
      headText: "Content Creators",
      image: contentCreators,
      pad: 3,
      listValues: true,
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col py-8">
      {data.map((section, idx) => (
        <div
          className={`w-3/6 w-full border-2 border-sky-500 ${section.mar} p-4`}
          key={idx}
        >
          <h1 className="font-bold text-2xl text-sky-500">
            {section.headText}
          </h1>
          <img className="py-9" src={section.image} alt={section.headText} />

          <div className="p-3">
            <ul
              role="list"
              className={listStyling}
              style={{ listStyleType: "circle" }}
            >
              {section.val.map((point, idx) => {
                return !section.listValues ? (
                  <li className="w-full py-5" key={idx}>
                    {point}
                  </li>
                ) : (
                  <ListValues key={idx} point={point} paddingYSize={4} />
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
