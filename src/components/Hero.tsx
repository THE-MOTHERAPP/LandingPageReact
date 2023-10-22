import { Video } from "iconsax-react";

const Hero = () => {
  return (
    <>
      <div className="md:bg-hero  bg-hero_mobile bg-no-repeat sm:h-screen h-[45vh] sm:w-screen ">
        <div className=" h-full  mx-auto max-w-7xl px-6 lg:px-8 pt-20   hidden sm:block ">
          <div className=" space-y-5">
            <h1 className=" text-4xl lg:text-[2.6rem]  lg:leading-[2.9rem]  leading-10  text-left text-gray-900 max-w-3xl">
              Your Personalized Meal Planning Companion
            </h1>

            <p className="text-[#475467] text-xl">
              Discover personalized nutrition and health support, like never
              before.
            </p>
            <div className="space-x-2 flex">
              <button
                type="button"
                className="rounded-md text-stone-900 border px-2.5 py-1.5 text-sm  hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex  space-x-1"
              >
                <Video size="15" color="black" variant="Bold" />
                <span>Watch video</span>
              </button>
              <button
                type="button"
                className="rounded-md border px-2.5 py-1.5 text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Sign up for waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full   mx-auto max-w-7xl px-6 lg:px-8  sm:hidden  ">
        <div className=" space-y-5">
          <h1 className=" text-4xl lg:text-[2.6rem]   lg:leading-[2.9rem]  leading-10  text-center text-gray-900 max-w-3xl sm:text-left ">
            Your Personalized Meal Planning Companion
          </h1>

          <p className="text-[#475467] text-xl text-center sm:text-left">
            Discover personalized nutrition and health support, like never
            before.
          </p>
          <div className="space-x-2 flex w-full justify-evenly">
            <button
              type="button"
              className="rounded-md text-stone-900 border px-2.5 py-1.5 text-sm  hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex  space-x-1"
            >
              <Video size="15" color="black" variant="Bold" />
              <span>Watch video</span>
            </button>
            <button
              type="button"
              className="rounded-md border px-2.5 py-1.5 text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Sign up for waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
