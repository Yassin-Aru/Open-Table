import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurant = async () => {
  const restauratns = await prisma.restaurant.findMany();
  return restauratns;
};

export default async function Home() {
  const restauratns = await fetchRestaurant();
  
  console.log({restauratns});
  

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
}
