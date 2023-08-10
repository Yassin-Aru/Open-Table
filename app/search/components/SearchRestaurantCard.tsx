import Link from "next/link";
import { RestaurantCardType } from "../../page";
import Price from "../../components/Price";

interface Props {
  restaurant: RestaurantCardType;
}

function SearchRestaurantCard({ restaurant }: Props) {
  return (
    <div className="border-b flex pb-5">
      <img
        src={restaurant.main_image}
        alt={restaurant.name}
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className=" flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/ivarus">View more information</Link>
        </div>
      </div>
    </div>
  );
}

export default SearchRestaurantCard;
