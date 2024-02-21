import { footerNavigation } from "../constants/constants";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Foooter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value.trim() != "") {
      setEmailValid(true);
    }

    // console.log(event.target.value);
  }

  function onPasswordChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setPassword(event.target.value);

    if (event.target.value.trim() != "") {
      setPasswordValid(true);
    }
  }
  return (
    // <footer classNameName="bg-gray-900 text-white my-grid" aria-labelledby="footer-heading">
    //   <h2 id="footer-heading" className="sr-only">
    //     Footer
    //   </h2>
    //   <h1 className="my-header"></h1>
    //   <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
    //     <div className="xl:grid xl:grid-cols-3 xl:gap-8">
    //       <h1 className="font-bold">DIETMATE</h1>
    //       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:col-span-2 xl:mt-0 gap-8">
    //         <div>
    //           <h3 className="text-sm font-semibold leading-6 text-white">
    //             Features
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {footerNavigation.features.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm leading-6 text-gray-600 hover:text-gray-200"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-sm font-semibold leading-6 text-white">
    //             Pricing
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {footerNavigation.pricing.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm leading-6 text-gray-600 hover:text-gray-100"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="sm:order-last">
    //           <h3 className="text-sm font-semibold leading-6 text-white">
    //             Social media
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {footerNavigation.socialMedia.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm leading-6 text-gray-600 hover:text-gray-100"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-sm font-semibold leading-6 text-white">
    //             Contact us
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-6">
    //             {footerNavigation.contact.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm leading-6 text-gray-600 hover:text-gray-100"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="my-copyright">
    //     &copy; 2023 MYDIETNEEDS. All rights reserved.
    //   </div>
    // </footer>

    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl py-5">
        <div className="my-content">
          <div className="my-section">
            <h2 className="my-subheader">Features</h2>
            <ul role="list" className="my-list">
              {footerNavigation.features.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="my-subheader mt-4">Pricing</h2>
            <ul role="list" className="my-list">
              {footerNavigation.pricing.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="my-section">
            <h2 className="my-subheader">Pricing</h2>
            <ul role="list" className="my-list">
              {footerNavigation.pricing.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="my-section my-social-media">
            <h2 className="my-subheader">Social media</h2>
            <ul role="list" className="my-list">
              {footerNavigation.socialMedia.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-section">
            <h2 className="my-subheader mb-4">Contact us</h2>

            <form className="my-form" id="contact">
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                className={
                  emailValid
                    ? "  focus:outline-none border-2  border-black "
                    : " focus:outline-none border-2  border-rose-500 "
                }
                onChange={onEmailChange}
                onFocus={(e) => {
                  if (e.target.value == "") {
                    setEmailValid(false);
                  } else {
                    setEmailValid(true);
                  }
                }}
              />

              <textarea
                id="message"
                placeholder="message"
                name="message"
                className={
                  passwordValid
                    ? "  focus:outline-none border-2  border-black "
                    : " focus:outline-none border-2  border-rose-500 "
                }
                rows={4}
                onChange={onPasswordChange}
                onFocus={(e) => {
                  if (e.target.value == "") {
                    setPasswordValid(false);
                  } else {
                    setPasswordValid(true);
                  }
                }}
              ></textarea>
              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  let id;
                  try {
                    if (email.trim() == "") {
                      setEmailValid(false);
                    }
                    if (password.trim() == "") {
                      setPasswordValid(false);
                    }

                    if (email.trim() == "" || password.trim() == "") {
                      return;
                    }
                    id = toast.loading("Please wait ..", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });

                    toast.update(id, {
                      render: "Done",
                      type: "success",
                      isLoading: false,
                      autoClose: 5000,
                    });
                  } catch (error) {
                    // console.log(error);

                    toast.update(id!, {
                      render: "failed.Please try again",
                      type: "error",
                      isLoading: false,
                      autoClose: 5000,
                    });
                  }
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-copyright">
        &copy; 2024 MYDIETNEEDS. All rights reserved.
      </div>
    </footer>
  );
}
