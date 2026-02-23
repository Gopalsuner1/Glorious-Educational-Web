import React from "react";
import { IoIosCall, IoIosPerson } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";

const StudentCard = () => {
  return (
    <div className="w-[280px] bg-gray-100 p-4 flex flex-col gap-4 rounded-2xl shadow-sm">
      
      {/* Header */}
      <div className="flex gap-3 items-center">
        <div className="w-20 h-20 rounded-full  overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-base">Gopal Suner</h1>
            <span className="text-xs rounded bg-gray-200 px-2 py-0.5">
              Nursery
            </span>
          </div>
          <p className="text-sm text-gray-600">Scholar : 434</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <IoIosPerson className="text-lg" />
          <span>Malkhan Singh</span>
        </div>

        <div className="flex items-center gap-2">
          <IoIosCall className="text-lg" />
          <span>9770905127</span>
        </div>

        <div className="flex items-start gap-2">
          <RiUserLocationFill className="text-xl mt-0.5" />
          <p className="text-xs leading-relaxed break-words">
            Dhaturiya Semlya Chau, Indore, Madhya Pradesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
