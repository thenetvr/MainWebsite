import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-24 text-center mb-0 bg-black flex flex-col items-center justify-center">
      <div>©2023 THE NET VR</div>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
  );
}
