//@ts-ignore
import  veges from '../assets/Convenience img.png'
import watch from "../assets/progress tracking img.png";
import mealPlan from "../assets/Personalization img new.png";
import {
  featureGroupOne,
  featureGroupTwo,
  featureGroupThree,
} from "../constants/constants";
const Features = () => {
  return (
    <section id="features" className="">
      <div className="  mx-auto max-w-6xl px-6 lg:px-8 py-10 ">
        <div className="flex sm:justify-between flex-col md:flex-row items-center justify-center mb-10 ">
          <div className="space-y-5 text-center md:text-left  lg:text-2xl">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border py-1.5">
              PERSONALIZATION
            </span>
            <h2 className="text-2xl lg:max-w-sm">
              Say goodbye to generic, unpersonalized diets!
            </h2>
            <p className="max-w-2xl text-[#62677F]">
              With Mydietneeds, your journey starts with you, your tastes, your
              health goals, your preferences.Unlock the power of tailored
              nutrition plans that cater to your specific needs.
            </p>
            <p className="max-w-2xl text-[#62677F]">
              Whether you're aiming to lose weight, gain muscle, eat healthy or
              manage dietary restrictions. Your journey starts with your unique
              goals.
            </p>
          </div>
          <img src={mealPlan} className=" " alt="meal-image" />
        </div>
        <div className="flex   flex-col sm:flex-row space-y-2 sm:space-y-0 items-center  justify-between w-full ">
          {featureGroupOne.map((feature, index) => (
            <div key={index} className=" flex  sm:mb-2 items-center space-x-1">
              <div className="w-10 h-10 p-2 rounded-lg bg-[#EEF4FD] flex items-center justify-center">
                <img className="w-5" src={feature.Imgsrc} />
              </div>
              <p className=" text-xs block sm:max-w-[150px] font-bold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="veggie mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-b ">
        <div className=" flex flex-col-reverse md:flex-row sm:justify-between items-center justify-center mb-10">
          <img
            src={veges}
            className="veges"
            alt="veges-image"
          />

          <div className="space-y-5 text-center md:text-left  lg:text-xl ">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border px-2.5 py-1.5">
              CONVENIENCE
            </span>
            <h2 className="text-2xl lg:max-w-sm ">
              Navigate the world of wellness with ease.
            </h2>
            <p className="max-w-2xl text-[#62677F]">
              Life can be busy, and we get it. That's why we bring you the
              convenience you deserve. No more endless searches or complicated
              meal planning, we've got you covered!
            </p>
            <p className="max-w-2xl text-[#62677F]">
              kip the hunt for food items. Our vendor directory makes sourcing
              specific food items a breeze, ensuring you have what you need to
              create delicious and nutritious meals.
            </p>
          </div>
        </div>
        <div className=" flex   flex-col sm:flex-row space-y-2 sm:space-y-0 items-center  justify-between w-full ">
          {featureGroupTwo.map((feature, index) => (
            <div key={index} className=" flex  sm:mb-2 items-center space-x-0">
              <div className="w-10 h-10  p-2 rounded-lg bg-[#EEF4FD]  flex items-center justify-center">
                <img className="w-5 " src={feature.Imgsrc} />
              </div>
              <p className=" text-xs block  sm:max-w-[150px] w-full font-bold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="progress space-y-6  mx-auto max-w-7xl px-6 lg:px-8  py-20   ">
        <div className=" flex flex-col md:flex-row sm:justify-between items-center justify-center">
          <div className="space-y-5 text-center sm:text-left  lg:text-2xl">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border px-2.5 py-1.5  ">
              PROGRESS TRACKING
            </span>
            <h2 className="text-2xl lg:max-w-sm">
              Set goals and watch yourself thrive.
            </h2>
            <p className="max-w-xl text-[#62677F]">
              Stay motivated by visualizing your progress and celebrating
              milestones as you stick to your meal plans.Make informed decisions
              by monitoring your journey and enjoy continuous improvement as we
              adapt your plans for ongoing success.
            </p>
            <p className="max-w-2xl text-[#62677F]">
              With Mydietneeds, achieving your health goals becomes a rewarding
              journey.
            </p>
          </div>
          <img src={watch} className="" alt="veges-image" />
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0  justify-between w-full ">
          {featureGroupThree.map((feature, index) => (
            <div key={index} className=" flex sm:mb-2  items-center space-x-1">
              <div className="w-10 h-10 p-2 rounded-lg bg-[#EEF4FD] flex items-center justify-center">
                <img className="w-5" src={feature.Imgsrc} />
              </div>
              <p className=" text-xs block sm:max-w-[150px] w-full font-bold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
