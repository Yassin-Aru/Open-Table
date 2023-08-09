import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await primsa.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);
  console.log(menu);
  

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
