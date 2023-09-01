import { PRICE, PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { RestaurantCardType } from "../page";

const prisma = new PrismaClient();

const fetchRestaurantByCity = async(city: string | undefined) => {
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
      cuisine: true,
    },
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisine = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: { city: string, cuisine: string, price: PRICE} }) => {
  const restaurants = await fetchRestaurantByCity(
    searchParams.city.toLowerCase()
  ) as RestaurantCardType[];
  const location = await fetchLocations();
  const cuisine = await fetchCuisine();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar locations={location} cuisines={cuisine} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <SearchRestaurantCard
                restaurant={restaurant}
                key={restaurant.id}
              />
            ))
          ) : (
            <p className="font-reg text-3xl capitalize text-gray-700">
              Sorry, There is not restaurants in this area!
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
