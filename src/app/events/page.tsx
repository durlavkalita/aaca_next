import React from "react";
import Link from "next/link";

const events = [
  {
    id: "0001",
    name: "5th Ayodhana International FIDE Rating Chess Tournament 2023",
    code: 319932,
    start: "11-07-2023",
    end: "16-07-2023",
    venue: "Guwahati, Assam",
    organizer: 7086255583,
  },
  {
    id: "0002",
    name: "Sivasagar Fide Rating Chess Tournament",
    code: 334959,
    start: "23-07-2023",
    end: "26-07-2023",
    venue: "Assam",
    organizer: 7086255583,
  },
  {
    id: "0011",
    name: "All Assam Under 19 Open Chess Championship",
    code: 339319,
    start: "25-08-2023",
    end: "27-08-2023",
    venue: "Guwahati, Assam",
    organizer: 7086255583,
  },
  {
    id: "1001",
    name: "Kurukshetra Open International Fide Rating Chess Tournament 2023",
    code: 336775,
    start: "23-11-2023",
    end: "27-11-2023",
    venue: "Guwahati, Assam",
    organizer: 7086255583,
  },
];

export default function Events() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="lg:block hidden text-lg font-bold text-gray-500 lg:text-xl dark:text-gray-400 mb-4">
          All Events
        </h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Event Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        End Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Venue
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Organizer
                      </th>
                    </tr>
                  </thead>
                  <tbody x-max="2">
                    {events.map((event) => (
                      <tr
                        key={event.id}
                        className="bg-white"
                        x-description="Odd row"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <Link href={`/events/${event.id}`}>{event.name}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.start}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.end}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.venue}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.organizer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
