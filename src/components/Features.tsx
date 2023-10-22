import React from "react";
import veges from "../assets/veges.svg";
import watch from "../assets/watch.svg";
import mealPlan from "../assets/meal-plan.png";
import {
  featureGroupOne,
  featureGroupTwo,
  featureGroupThree,
} from "../constants/constants";
const Features = () => {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 ">
        <div className="flex sm:justify-between flex-col sm:flex-row items-center justify-center  ">
          <div className="space-y-4">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border px-2.5 py-1.5">
              PERSONALIZATION
            </span>
            <h2 className="text-2xl">
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
          <img
            src={mealPlan}
            className=" object-cover rounded-2xl w-60 border sm:pt-0 mt-5"
            alt="meal-image"
          />
        </div>
        <div className="flex   flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between w-full mt-7">
          {featureGroupOne.map((feature, index) => (
            <div key={index} className=" flex  items-center space-x-1">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-b ">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <img
            src={veges}
            className=" w-96 object-cover rounded-2xl aspect-[3/2]"
            alt="veges-image"
          />
          <div className="space-y-4  ">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border px-2.5 py-1.5">
              CONVENIENCE
            </span>
            <h2 className="text-2xl">
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
        <div className="flex justify-between w-full mt-7">
          {featureGroupTwo.map((feature, index) => (
            <div key={index} className=" flex  items-center space-x-1">
              <div className="w-10 h-10 p-2 rounded-lg bg-[#EEF4FD] flex items-center justify-center">
                <img className="w-5" src={feature.Imgsrc} />
              </div>
              <p className=" text-xs block max-w-[150px] font-bold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" space-y-6  mx-auto max-w-7xl px-6 lg:px-8  py-20  border-b ">
        <div className="flex justify-between">
          <div className="space-y-4">
            <span className=" text-[#1170FF] bg-[#EEF4FD]  rounded-md border px-2.5 py-1.5">
              PROGRESS TRACKING
            </span>
            <h2 className="text-2xl">Set goals and watch yourself thrive.</h2>
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
          <img
            src={watch}
            className=" w-96 object-cover rounded-2xl aspect-[3/2]"
            alt="veges-image"
          />
        </div>
        <div className="flex justify-between w-full">
          {featureGroupThree.map((feature, index) => (
            <div key={index} className=" flex  items-center space-x-1">
              <div className="w-10 h-10 p-2 rounded-lg bg-[#EEF4FD] flex items-center justify-center">
                <img className="w-5" src={feature.Imgsrc} />
              </div>
              <p className=" text-xs block max-w-[150px] font-bold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
