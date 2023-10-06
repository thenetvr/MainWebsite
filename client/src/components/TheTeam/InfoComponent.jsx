// icons
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import TwitchIcon from "../../assets/twitch.png";
import DiscordIcon from "../../assets/discord.png";
import TIkTokIcon from "../../assets/tik-tok.png";
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
      <p className="phone:text-center lg:text-left text-lg">{member.role}</p>
      {/* socials */}
      <div className="flex mt-2 justify-center lg:justify-start">
        <img className={"h-[40px] w-[40px]"} src={LinkedinIcon} />
        <img className={"h-[40px] w-[40px]"} src={TwitterIcon} />
        <img className={"h-[40px] w-[40px]"} src={TwitchIcon} />
        <img className={"h-[40px] w-[40px]"} src={DiscordIcon} />
        <img className={"h-[40px] w-[40px]"} src={TIkTokIcon} />
      </div>
      {/* description */}
      <div className="mt-7">{member.description}</div>
    </div>
  );
}
