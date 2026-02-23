import React from "react";
import { IoIosCall, IoIosPerson } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ data }) => {
  if (!data) return null;
    const navigate = useNavigate();
  const {
    firstName,
    lastName,
    className,
    scholar,
    fatherName,
    phoneNumber,
    address,
    profileImage,
  } = data;

  return (
    <div 
     onClick={() => navigate(`/studentprofile`,{state:data})}
     className="w-[280px] cursor-pointer hover:scale-[1.02] transition bg-gray-100 p-4 flex flex-col gap-4 rounded-2xl shadow-sm">

      {/* Header */}
      <div className="flex gap-3 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <img
            src={
              profileImage ||
              "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-base">
              {firstName} {lastName}
            </h1>
            {className && (
              <span className="text-xs rounded bg-gray-200 px-2 py-0.5">
                {className}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            Scholar : {scholar}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <IoIosPerson className="text-lg" />
          <span>{fatherName}</span>
        </div>

        <div className="flex items-center gap-2">
          <IoIosCall className="text-lg" />
          <span>{phoneNumber}</span>
        </div>

        <div className="flex items-start gap-2">
          <RiUserLocationFill className="text-xl mt-0.5" />
          <p className="text-xs leading-relaxed break-words">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
