import Media from "./components/Media";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-blue-400">
     <div className="mt-2 mx-auto px-12 py-2 container">
     <Navbar />
      <Media />
      </div>
    </main>
  );
}
