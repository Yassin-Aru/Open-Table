import { Location, Cuisine } from "@prisma/client";

function SearchSideBar({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Regions</h1>
        {locations.map((location) => (
          <p className="uppercase text-reg" key={location.id}>
            {location.name}
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisines</h1>
        {cuisines.map((cuisine) => (
          <p className="uppercase text-reg" key={cuisine.id}>
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg  rounded-l p-2">$</button>
          <button className="border-r border-t border-b w-full text-reg  p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg  p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
