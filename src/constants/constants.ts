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

export const navLinks = [
  { id: "#home", title: "Home", icon: Home },
  { id: "#features", title: "Features", icon: Star },
  { id: "#pricing", title: "Pricing", icon: Receipt1 },
  { id: "#contact", title: " Contact us", con: Messages1 },
  { id: "#about", title: "About us", con: Messages1 },
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
      "Discover diverse recipes for your dietary needs",
      "Create shopping lists for your meals",
      "Basic progress tracking",
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    id: "premium-tier",
    href: "#",
    priceMonthly: "GH₵35",

    features: [
      "Personalized meal plans tailored to you",
      "Advanced progress tracking",
      "Easily find local ingredient sources",
      "Set and achieve your health goals effectively",
      "Gain detailed nutrition insights for informed choices",
    ],
    featured: false,
  },
];
