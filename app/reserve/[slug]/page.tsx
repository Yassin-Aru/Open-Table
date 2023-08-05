import Navbar from "../../components/Navbar";
import From from "./components/From";
import Header from "./components/Header";

const Reservation = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <From />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reservation;
