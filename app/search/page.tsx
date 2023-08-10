import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";


const prisma = new PrismaClient();

const fetchRestaurantByCity = (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany();
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      location: true,
      cuisine: true
    }
  });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city.toLowerCase());
    
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              
              <SearchRestaurantCard key={restaurant.id} restaurant={restaurant}/>
            ))
          ) : (
            <p className="font-reg text-3xl capitalize text-gray-700">Sorry, There is not restauratns in this area!</p>
          )
          }
        </div>
      </div>
    </>
  );
};
export default Search;
