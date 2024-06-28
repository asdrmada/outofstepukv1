import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-center align-middle font-extrabold">
    <Header />
    <div className="flex flex-row m-4">    
      <div className="w-8/12 border border-red-600">
        <h1>Out of Step UK</h1>
        <h3>Yeah, We're finally doing this shit!</h3>

        <p>
          qrubfwghuiwerhgfpuiqerhqpuirehfpqiurfhquiprefnuipqerfn
        </p>
      </div>

      <div className="w-4/12 m-4 border border-blue-500">
        <h3>HUIHIHJ9J90J9P9</h3>
      </div>
    </div>

    <div className="flex flex-col m-4">
      <div className="w-6/12 m-auto border border-orange-500">
         <h2>uahefiusehfiusehfipu</h2>
      </div>

      <div>
        <ul>
          <li>Last issue</li>
          <li>last last issue</li>
          <li>last last last issue</li>
        </ul>
      </div>
    </div>

    <Footer />
    </main>
  );
}
