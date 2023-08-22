import Footer from "../components/Footer";
import HomeLogo from "../assets/Home-logo.png";

export default function Home() {
  // replace for any other pathname
  if (window.location.pathname !== "/") return window.location.replace("/");

  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <div className="flex justify-center items-center h-3/6 bg-black w-full mt-1">
          <img src={HomeLogo} width={400} alt="Home Logo" />
        </div>
        <div>
          <div>test</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
