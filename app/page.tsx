import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurant = async () => {
  const restauratns = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true
    }
  });
  return restauratns;
};

export default async function Home() {
  const restauratns = await fetchRestaurant();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restauratns.map(() => (
          <RestaurantCard />
        ))}
      </div>
    </main>
  );
}
