import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const Search = ({searchParams}: {searchParams: {city: string}}) => {
  
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard city={searchParams.city}/>
        </div>
      </div>
    </>
  );
};

export default Search;
