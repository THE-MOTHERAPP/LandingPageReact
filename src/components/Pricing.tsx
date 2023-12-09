import { CheckIcon } from "@heroicons/react/20/solid";
import { tiers } from "../constants/constants";



export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate bg-white px-6 py-5 sm:py-10  lg:px-8 mb-10"
    >
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl mb-5">
        <h2 className="text-sm font-semibold leading-7">
          Unlock your wellness journey, Choose your plan
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Pricing
        </p>
      </div>
      <div className="container  max-w-9xl">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="pricing bg-white p-5 rounded-lg"
          >
            <h3 id={tier.id} className="text-base font-semibold leading-7">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {tier.priceMonthly}
              </span>
              <span className="text-base text-gray-500">/month</span>
            </p>

            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <div className="h-6 w-6 flex-none bg-green-100 p-1 rounded-full">
                    <CheckIcon className=" text-green-600" aria-hidden="true" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
