

export default  function Cta(){
 

    return (
      <>
        <section
          id="cta"
          className="relative isolate bg-white px-6 py-5 sm:py-10  lg:px-8 mb-20"
        >
          <div className="mx-auto max-w-2xl mt-20 text-center lg:max-w-4xl md:mb-5 ">
            <h2 className="mt-2 mb-3 text-2xl font-bold tracking-tight text-gray-900 font-semibold leading-7">
              JOIN THE <span className="text-[#1170FF]">WAITLIST</span>
            </h2>
            <p className="text-sm font-semibold leading-7 mb-1">
              A Better Way To Live And Eat Awaits You!
            </p>

            <p className="max-w-3xl p-4 pl-4 text-center text-[#62677F] leading-7">
              Join our waitlist to embark on a wellness journey like no other.
              Explore nutritious meals aligned with your goals , track your
              progress and savour a healthier lifestyle. This your chance to
              make a lasting change to your health , starting now.
            </p>
          </div>
          <div className="max-w-9xl flex flex-col items-center justify-center translate-y-5 ">
            <form className="p-5">
              <input
                className=" block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                type="text"
                placeholder="name"
                id="email"
                name="email"
              />
              <input
                className=" block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                type="email"
                placeholder="email"
                id="email"
                name="email"
              />

              <button
                type="submit"
                className=" block bg-[#1170FF] w-full  p-2 rounded-md"
              >
                JOIN
              </button>
            </form>

            <form className="p-5 max-w-sm m-2 ml-5 ">
              <label>What are you aiming to achieve with mydietneeds</label>
              <select className="block"></select>

              <label className="max-w-sm text-center">
                Would you be interested in participating in app testing and
                providing feedback on designs.
              </label>

              <input
                className=" block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                type="radio"
                placeholder="email"
                id="email"
                name="email"
              />

              <button
                type="submit"
                className=" block bg-[#1170FF] w-full  p-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </>
    );


}