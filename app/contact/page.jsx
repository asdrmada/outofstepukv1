import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contact = () => {
    return (
        <main className="flex flex-col justify-center align-middle font-extrabold">
        <Header />
            <div className="flex flex-row justify-center m-4 border border-blue-600">

            <h1>Holy piss flaps, a fuckin contact page!</h1>
            </div>

            <div className="flex flex-col align-middle m-2 p-4 border border-red-600">
                <form>
                    <input typeof="text" />
                    <input typeof="text" />

                    <button typeof="submit" />                
                </form>
            </div>

        <Footer />
        </main>
    )
}

export default contact;