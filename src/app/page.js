import App from "./components/App";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-blue-400">
     <div className="mt-2 mx-auto px-2 py-2 max-w-screen w-full">
     <Navbar />
      <App />
      </div>
    </main>
  );
}
