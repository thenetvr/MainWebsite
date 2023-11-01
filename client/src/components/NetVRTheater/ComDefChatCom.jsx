import { netVRTheaterPoints } from "../../utils/constants";
import ListValues from "./listValues";

// eslint-disable-next-line react/prop-types
export default function ComDefChatCom({ listStyling }) {
  const { commandDefinitions, chatCommand } = netVRTheaterPoints;
  return (
    <div className="py-3">
      {/* Command Definitions & Chat Command */}
      <div className="flex">
        <div className="text-sky-500 text-3xl w-1/2">Command Definitions</div>
        <div className="text-sky-500 text-3xl w-1/2 pl-2">Chat Command</div>
      </div>
      <div className="flex sm:flex-row flex-col py-8">
        <div className={`w-3/6 w-full border-2 border-sky-500 m-2 p-4`}>
          <div className="p-3">
            <ul
              role="list"
              className={listStyling}
              style={{ listStyleType: "circle" }}
            >
              {commandDefinitions.map((point, idx) => (
                <ListValues key={idx} point={point} paddingYSize={3} />
              ))}
            </ul>
          </div>
        </div>
        <div className={`w-3/6 w-full border-2 border-sky-500 m-2 p-4`}>
          <div className="p-3">
            <ul
              role="list"
              className={listStyling}
              style={{ listStyleType: "circle" }}
            >
              {chatCommand.map((point, idx) => (
                <li className="w-full py-3" key={idx}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
