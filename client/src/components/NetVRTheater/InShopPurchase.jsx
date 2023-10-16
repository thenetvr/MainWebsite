import { netVRTheaterPoints } from "../../utils/Constants";
import ListValues from "./listValues";

// eslint-disable-next-line react/prop-types
export default function InShopPurchase({ listStyling }) {
  const data = [
    { val: netVRTheaterPoints.inShopPurchase, mar: "mr-2", pad: 5 },
    { val: netVRTheaterPoints.inShopPurchase2, mar: "ml-2", pad: 3 },
  ];

  return (
    <div className="py-3">
      <div className="text-sky-500 text-3xl">In-Shop Purchase</div>
      <div className="flex sm:flex-row flex-col py-8">
        {data.map((obj, idx) => (
          <div
            className={`w-3/6 w-full border-2 border-sky-500 m-2 p-4`}
            key={idx}
          >
            <div className="p-3">
              <ul
                role="list"
                className={listStyling}
                style={{ listStyleType: "circle" }}
              >
                {obj.val.map((point, idx) => (
                  <ListValues key={idx} point={point} paddingYSize={obj.pad} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
