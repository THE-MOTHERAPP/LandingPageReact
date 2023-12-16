import featureOneIcon from "../assets/feature-one.svg";
import featureTwoIcon from "../assets/feature-two.png";
import featureThreeIcon from "../assets/feature-three.svg";
import featureFourIcon from "../assets/feature-four.png";

import featureFiveIcon from "../assets/feature-five.svg";
import featureSixIcon from "../assets/feature-six.svg";
import featureSevenIcon from "../assets/feature-seven.svg";
import featureEightIcon from "../assets/feature-eight.svg";

import featureNineIcon from "../assets/feature-nine.png";
import featureTenIcon from "../assets/feature-ten.svg";
import featureEleventIcon from "../assets/feature-eleven.svg";
import featureTwelveIcon from "../assets/feature-twelve.svg";

import { Home, Star, Messages1, Receipt1 } from "iconsax-react";

type NavLink = {
  id: string;
  title: string;
  icon?: React.ElementType ;
};

export const navLinks: NavLink[] = [
  { id: "#home", title: "Home", icon: Home },
  { id: "#features", title: "Features", icon: Star },
  { id: "#pricing", title: "Pricing", icon: Receipt1 },
  { id: "#contact", title: " Contact us", icon: Messages1 },
  { id: "#about", title: "About us", icon: Messages1 },
  { id: "#cta", title: "Join Waitlist", icon: Messages1 },
];

export const featureGroupOne = [
  {
    content: "Tailored Ghanaian nutrition plans",
    Imgsrc: featureOneIcon,
  },
  {
    content: "Customized meal plans for your goals",
    Imgsrc: featureTwoIcon,
  },
  {
    content: "Unique solutions for managing health conditions",
    Imgsrc: featureThreeIcon,
  },
  {
    content: "Diets tailored to your dietary preferences",
    Imgsrc: featureFourIcon,
  },
];

export const featureGroupTwo = [
  {
    content: "Effortless Ingredient Sourcing",
    Imgsrc: featureFiveIcon,
  },
  {
    content: "Time-Saving Meal Plans",
    Imgsrc: featureSixIcon,
  },
  {
    content: "Local Ingredients, Global Flavors",
    Imgsrc: featureSevenIcon,
  },
  {
    content: "Seamless Wellness Integration",
    Imgsrc: featureEightIcon,
  },
];

export const featureGroupThree = [
  {
    content: "Visualize success, stay motivated",
    Imgsrc: featureNineIcon,
  },
  {
    content: "Celebrate achievements along the way",
    Imgsrc: featureTenIcon,
  },
  {
    content: "Adjust, evolve, and thrive",
    Imgsrc: featureEleventIcon,
  },
  {
    content: "Consistent Progress, Continuous Improvement",
    Imgsrc: featureTwelveIcon,
  },
];

export const footerNavigation = {
  features: [
    { name: "Personalization", href: "#" },
    { name: "Convenience", href: "#" },
    { name: "Progress tracking", href: "#" },
  ],
  pricing: [
    { name: "Free plan", href: "#" },
    { name: "Premium plan", href: "#" },
  ],
  socialMedia: [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
  contact: [{ name: "psam64850@gmail.com", href: "#" }],
};

export const tiers = [
  {
    name: "Free Plan",
    id: "free-tier",
    href: "#",
    priceMonthly: "Free",

    features: [
      "Discover Diverse Recipes For Your Dietary Needs",
      "Create Shopping Lists For Your Meals",
      "Nutrition And Weight Tracking",
      "Calorie Tracking",
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    id: "premium-tier",
    href: "#",
    priceMonthly: "GH₵49.99",

    features: [
      "Discover Diverse Recipes For Your Dietary Needs",
      "Create Shopping Lists For Your Meals",
      "Nutrition And Weight Tracking",
      "Calorie Tracking",
      "Personalized Meal Plans Tailored To You",
      "Set And Track Custom Goals",
      "Macro Tracking With Custom Goals",
      "Guided Grocery And Ingredient Sourcing ",

      "Gain Detailed Nutrition Insights For Informed Choices",
    ],
    featured: false,
  },
];
