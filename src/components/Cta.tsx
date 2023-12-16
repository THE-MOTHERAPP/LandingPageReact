import { useState } from "react";



const options = ["Weight loss" , "Weight/Muscle Gain" , "Managing Dietary Restrictions" , "General Healthy Eating" , "Exploring New Cuisines" ];
export default  function Cta(){
     
  const [hide , setHide] = useState(false)
 
    return (
      <>
        <section
          id="cta"
          className=" bg-white px-6 py-5 sm:py-10  lg:px-8 mb-20"
        >
          <div className="mx-auto flex flex-col items-center justify-center  mt-20 text-center lg:max-w-4xl md:mb-3 ">
            <h2 className="mt-2 mb-3 text-2xl font-bold tracking-tight text-gray-900 font-semibold leading-7">
              JOIN THE <span className="text-[#1170FF]">WAITLIST</span>
            </h2>
            <p className="text-base font-semibold leading-7 mb-1">
              A Better Way To Live And Eat Awaits You!
            </p>

            <p className="max-w-3xl p-4 pl-4  text-lg text-center text-[#62677F] ">
              Join our waitlist to embark on a{" "}
              <span className="font-medium text-black"> wellness</span> journey
              like no other. Explore nutritious meals aligned with your
              <span className="font-medium text-black"> goals</span>, track your
              <span className="font-medium text-black"> progress</span> and
              savour a{" "}
              <span className="font-medium text-black">healthier </span>{" "}
              lifestyle. This your chance to make a lasting change to your
              health , starting now.
            </p>
          </div>
          <div className="max-w-9xl flex flex-col items-center justify-center translate-y-5 ">
            {emailMessage || <p className=""> Thank you for joining </p>}
            {hide || (
              <form className="p-5">
                <input
                  className=" block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                  type="text"
                  placeholder="name"
                  id="name"
                  name="name"
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
                  onClick={(e) => {
                    e.preventDefault();
                    setHide(true);
                    
                    console.log("ffer");
                  }}
                >
                  JOIN
                </button>
              </form>
            )}

            {hide && (
              <div>
               
                <form className="p-5 max-w-sm m-2 ml-5 ">
                  <label className="mb-3 block text-base">
                    What are you aiming to achieve with mydietneeds?
                  </label>
                  {/* <select className="block mb-2 w-full p-2 rounded-md" id="cdkd" placeholder="Select all that apply" name="Selectapply">

            <option  value="never" >Never</option>
        <option value="occasionally">Occasionally</option>
        <option value="regularly">Regularly</option>
        <option value="always">Always</option>
              </select> */}
                  <div className="bg-[#dddbdb] p-3 mb-3">
                    {options.map((v, i) => (
                      <label className="block mb-2 text-base" key={i}>
                        <input type="checkbox" name="aims" value="yes" /> {v}
                      </label>
                    ))}
                  </div>

                  <label className="block  mb-2 text-base">
                    Would you be interested in participating in app testing and
                    providing feedback on designs?
                  </label>
                  <label className="block mb-2">
                    <input
                      type="radio"
                      name="testing"
                      className="text-base"
                      value="yes"
                    />{" "}
                    Yes , I am interested in participating.
                  </label>
                  <label className="block mb-2 text-base">
                    <input
                      type="radio"
                      name="testing"
                      className="text-base"
                      value="yes"
                    />{" "}
                    No , I prefer to wait for the official release
                  </label>

                  <button
                    type="submit"
                    className=" block bg-[#1170FF] w-full mb-2 p-2 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      setHide(false);
                      
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </>
    );


}