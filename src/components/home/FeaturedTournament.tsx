import Image from "next/image";

export default function FeaturedTournament() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      ></div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  FIDE rated International Tournament
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  In 2018, a FIDE-rated tournament was organised by Cachar
                  District Chess Association (CDCA) in Silchar featuring
                  participants of 4 countries including India. Dibyendu Barua,
                  who has the distinction of becoming the second Grand Master of
                  India after Vishwanathan Anand, was the top seed at the
                  tournament.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              width={100}
              height={100}
              src={"/images/latest_1.jpg"}
              alt="Tournament Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
