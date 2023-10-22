import aboutUs from "../assets/about-us.png";

const About = () => {
  return (
    <div className="text-[#62677F]  flex flex-col items-center sm:flex-row justify-between mx-auto max-w-7xl px-6 lg:px-8 py-20 ">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:hidden">
        ABOUT US
      </h1>
      <img
        src={aboutUs}
        className=" w-96 object-cover rounded-2xl aspect-[3/2] mt-4 "
        alt="about-us"
      />
      <div className="sm:w-1/2  w-full space-y-4 sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 hidden sm:block">
          ABOUT US
        </h1>
        <p className="sm:max-w-2xl ">
          Born from a passion for wellness and a desire to make healthy living
          simple and enjoyable for Ghanaians, DietMate is here to guide you
          towards your well-being goals. We understand that health is a personal
          journey, and that's why we're committed to providing personalized
          solutions that resonate with the rhythms of your Ghanaian life.
        </p>
        <p className="sm:max-w-2xl">
          At DietMate, we want to help you live healthier by providing
          personalized meal plans, easy ingredient shopping, progress tracking
          and a supportive community, all influenced by Ghana's rich flavors and
          traditions. Everyone deserves good food that fits their health goals,
          and we're keeping it true to Ghana.
        </p>
        <p className="sm:max-w-2xl">
          DietMate is more than an app, it's a movement for better health in
          Ghana. Join us on this journey, be among the pioneers, and experience
          personalized nutrition and wellness that's authentically Ghanaian.
          Sign up for our waitlist now and become a part of shaping the future
          of wellness in Ghana with DietMate.
        </p>
      </div>
    </div>
  );
};

export default About;
