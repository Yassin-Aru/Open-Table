import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city: string; cuisine?: string; price?: PRICE };
}) {
  const prices: string[] = ["$", "$$", "$$$"];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Regions</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className="uppercase text-reg"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>

      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisines</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className="uppercase text-reg"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price:
                    price === "$"
                      ? "Cheap"
                      : price === "$$"
                      ? "Regular"
                      : "High",
                },
              }}
              className="border w-full text-reg  rounded-l p-2"
            >
              {price}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
