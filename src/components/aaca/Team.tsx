import React from "react";
import dp from "../../assets/dp.png";

const team = [
  {
    name: "Kandarpa Kalita",
    role: "President",
    social: null,
    image: "/dp.png",
  },
  {
    name: "Rajib Dhar",
    role: "General Secretary",
    social: null,
    image: "/dp.png",
  },
];

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our team
          </h2>
          <p className="text-xl text-gray-500">
            Meet the members of All Assam Chess Association.
          </p>
        </div>
        <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
          {team.map((member) => (
            <li key={member.name}>
              <div className="space-y-6">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={dp}
                  alt={member.name}
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
