import React from "react";

export default function PlayerRegistration() {
  return (
    <div className="px-4">
      <form>
        <div className="space-y-12">
          <div className=" pb-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
            <div className="sm:col-span-3 py-8">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">
                Player/Arbiter Registration
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provided details will be used in any event participated by
                player.
              </p>
            </div>
            <div className="sm:col-span-9 bg-white p-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Middle name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="middlename"
                    id="middlename"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Son/Daughter of <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="parent"
                    id="parent"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Relationship <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="relationship"
                    name="relationship"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-5">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  State <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="state"
                    name="state"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Assam</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  District <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="district"
                    name="district"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Kamrup</option>
                    <option>Kamrup Metro</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Player/Arbiter <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="type"
                    name="type"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Player</option>
                    <option>Arbiter</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  FIDE ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="fideid"
                    id="fideid"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  AICF ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="aicfid"
                    id="aicfid"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Passport Photo
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="passport"
                    id="passport"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Birth Certificate
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="birthcertificate"
                    id="birthcertificate"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-6">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
