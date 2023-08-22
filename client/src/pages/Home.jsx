import Footer from "../components/Footer";

export default function Home() {
  // replace for any other pathname
  if (window.location.pathname !== "/") return window.location.replace("/");

  return (
    <div className="bg-zinc-900 h-full">
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <div className="text-9xl">test</div>
      <Footer />
    </div>
  );
}
