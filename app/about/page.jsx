import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const about = () => {
    return(
 
        <main className="flex flex-col justify-center font-extrabold">
        <Header />
            <div className="flex flex-row justify-center m-4 border border-red-600">

            <h1>Wowee an abouts page!</h1>
            </div>

        <Footer/>
        </main>

    )
}

export default about;