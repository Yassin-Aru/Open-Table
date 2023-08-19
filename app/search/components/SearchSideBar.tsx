

function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="uppercase text-reg">Toronto</p>
        <p className="uppercase text-reg">Ottawa</p>
        <p className="uppercase text-reg">Montreal</p>
        <p className="uppercase text-reg">Hamilton</p>
        <p className="uppercase text-reg">Kingston</p>
        <p className="uppercase text-reg">Niagara</p>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <p className="uppercase text-reg">Italian</p>
        <p className="uppercase text-reg">Mexican</p>
        <p className="uppercase text-reg">Chinese</p>
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
