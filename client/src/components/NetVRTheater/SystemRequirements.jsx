import { netVRTheaterPoints } from "../../utils/Constants";

export default function SystemRequirements() {
  const { windows10, macOS10 } = netVRTheaterPoints;
  return (
    <div className="py-3">
      <div className="text-sky-500 text-3xl font-bold">System Requirements</div>
      {[windows10, macOS10].map((system, idx) => (
        <div className="p-3" key={idx}>
          <div className="text-sky-500 text-2xl">
            {system === windows10 ? "Windows 10" : "MacOS 10"}
          </div>
          <ul
            role="list"
            className="flex flex-row flex-wrap items-start justify-center items-center pl-5 py-4 space-y-3 text-slate-400 text-2xl"
            style={{ listStyleType: "circle" }}
          >
            {system.map((point, idx) => (
              <li className="w-full" key={idx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
