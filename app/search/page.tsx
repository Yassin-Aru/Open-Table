import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        {/* SEARCH HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
          <SearchSideBar />
          <div className="w-5/6">
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Search;
