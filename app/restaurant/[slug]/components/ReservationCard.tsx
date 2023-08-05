import React from "react";

function ReservationCard() {
  return (
    <div className="w-[100%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select name="" className="py-2 border-b  bg-white" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input
            type="text"
            className="py-2 border-2 rounded border-black  w-28 h-[40px] bg-white"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="py-2 h-[40px] border-2 rounded bg-white border-black"
          >
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-2 text-white font-bold h-10">
          Find a Time
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
