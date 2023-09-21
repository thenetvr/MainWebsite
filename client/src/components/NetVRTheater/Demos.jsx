// images
import demo1 from "../../assets/NetVRTheater/demo1.png";
import demo2 from "../../assets/NetVRTheater/demo2.png";
import demo3 from "../../assets/NetVRTheater/demo3.png";
import shop from "../../assets/NetVRTheater/shop.png";

export default function Demos() {
  return (
    <div>
      <div className="flex">
        <div className="w-3/6 p-4">
          <img className="py-3" src={demo1} alt="Demo 1" />
          <div>
            Viewers can hang out with friends and other viewers while watching
            their favorite content creator!
          </div>
        </div>
        <div className="w-3/6 p-4">
          <img className="py-3" src={demo2} alt="Demo 2" />
          <div>
            Content creators can stream directly to a theater or use our
            application as an add-on for Twitch, FacebookLive with other live
            streaming platforms to come
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/6 p-4">
          <img className="py-3" src={demo3} alt="Demo 3" />
          <div>A feature to come!</div>
        </div>
        <div className="w-3/6 p-4">
          <img className="py-3" src={shop} alt="Shop" />
          <div>
            Content creators can choose their theater design within our
            marketplace!
          </div>
        </div>
      </div>
    </div>
  );
}
