import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = prisma.restaurant.findUnique({
    where: {
      slug
    }
  })
}

const RestaurantDetails = async (props: any) => {
  console.log({props});
  
  // const restaurant = await fetchRestaurantBySlug()
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
          {/* REVIEWS */}
        </div>
        <div className="w-[27%] relative text-reg pb-8">
          <ReservationCard />
        </div>
    </>
  );
};

export default RestaurantDetails;
