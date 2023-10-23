// icons
import LinkedinIcon from "../../assets/linkedin.png";
// prop types
import { PropTypes } from "prop-types";

InfoComponent.propTypes = {
  member: PropTypes.object,
};

export default function InfoComponent({ member }) {
  return (
    <div className="sm:w-3/4 px-10 lg:text-left w-full">
      {/* person name */}
      <h1 className="lg:text-left text-center text-3xl uppercase text-sky-500">
        {member.name}
      </h1>
      {/* role */}
      <p className="lg:text-left text-center text-lg">{member.role}</p>
      {/* socials */}
      <div className="flex mt-2 justify-center lg:justify-start">
        <a href={member.linkedIn} rel="noreferrer" target="_blank">
          <img
            className={
              "h-[40px] w-[40px] hover:opacity-30 ease-in-out duration-300"
            }
            src={LinkedinIcon}
          />
        </a>
      </div>
      {/* description */}
      <div className="my-7 lg:text-left text-center">{member.description}</div>
    </div>
  );
}
