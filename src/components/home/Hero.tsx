import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              width={100}
              height={100}
              className="h-full w-full object-cover"
              src="/images/chess-2.jpg"
              alt="Chess board bg image"
            />
            {/* Photo by Vlada Karpovich: https://www.pexels.com/photo/black-chess-pieces-on-the-board-6114991/ */}
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">
                All Assam Chess Association
              </span>
            </h1>
            <p className="hidden md:block mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
              The All Assam Chess Association (Assamese: সদৌ অসম দবা সন্থা) is a
              registered (under the Societies Registration Act: XXI of 1860,
              Number 1347 of 1981–82) chess association of the Assam state of
              India.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="/events"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                >
                  Check Events
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
