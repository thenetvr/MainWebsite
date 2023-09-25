// utils
import { platforms } from "../../utils/Constants";

export default function Platforms({ padding }) {
  return (
    <div className={`py-${padding}`}>
      <div className="flex justify-around">
        {platforms.map((platform, idx) => (
          <div key={idx} className="p-4">
            <div className="lg:h-400 lg:p-100 h-240">
              <img src={platform.image} alt={platform.description} />
            </div>
            <div className="text-center">{platform.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
