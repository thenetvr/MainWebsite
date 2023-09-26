import { useEffect, useState } from "react";
import { teamMembers } from "../../utils/Constants";
import InfoComponent from "./InfoComponent";

export default function AllMembers() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center flex-col">
      {/* person */}
      {teamMembers.map((member, idx) => {
        const teamMemberClasses =
          "w-full p-10 flex lg:flex-row flex-col items-center";

        const memberImageClasses =
          "w-[300px] h-[300px] border border-4 border-sky-500 rounded-xl";

        //   check for screen width mobile responsive
        if (screenWidth > 1023) {
          return (
            <div key={idx} className={teamMemberClasses}>
              {/* index used to alternate profiles */}
              {idx % 2 ? (
                <div key={idx} className={teamMemberClasses}>
                  <img className={memberImageClasses} src={member.image} />
                  <InfoComponent member={member} />
                </div>
              ) : (
                <div key={idx} className={teamMemberClasses}>
                  <InfoComponent member={member} />
                  <img className={memberImageClasses} src={member.image} />
                </div>
              )}
            </div>
          );
        } else {
          return (
            <div key={idx} className={teamMemberClasses}>
              <div key={idx} className={teamMemberClasses}>
                <img className={memberImageClasses} src={member.image} />
                <div className="pt-4">
                  <InfoComponent member={member} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
