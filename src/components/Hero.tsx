

 import { useState ,useRef } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const Hero = () => {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [emailValid, setEmailValid] = useState(true);
 const [passwordValid, setPasswordValid] = useState(true);
 const [nameLoading, setnameLoading] = useState(false);

  const captchaRef = useRef(null);
  const client = new DynamoDBClient({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,

      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    },
  });

  const docClient = DynamoDBDocumentClient.from(client);

 function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
   setEmail(event.target.value);

   if (event.target.value.trim() != "") {
     setEmailValid(true);
   }

   // console.log(event.target.value);
 }

 function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
   setPassword(event.target.value);

   if (event.target.value.trim() != "") {
     setPasswordValid(true);
   }
 }


 async function onLoginFormSubmit(
   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
 ) {
  let id;
   try {
     event.preventDefault();

     setnameLoading(true);
     // console.log("ffer") ;

     if (email.trim() == "") {
       setEmailValid(false);
     }
     if (password.trim() == "") {
       setPasswordValid(false);
     }

     if (email.trim() == "" || password.trim() == "") {
       setnameLoading(false);

       return;
     }

     if (!password.includes("@")) {
       setnameLoading(false);
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
     //@ts-ignore
     const token = captchaRef.current.getValue();
     if (!token) {
       setnameLoading(false);
       throw new Error("failed. Please try again");
     }
     // console.log(token);

     const res = await fetch(import.meta.env.VITE_URI, {
       body: JSON.stringify({
         token,
       }),
       headers: {
         "Content-Type": "application/json",
       },
       method: "POST",
     });

     if (!res.ok) {
      setnameLoading(false);  
       throw new Error("");
     }

     const data = await res.json();

     // console.log(data);

     if (!data.res.success) {
      setnameLoading(false);
       throw new Error("");
     }

      const item = {
        name: email,
        email: password,
      
      };
       const command = new PutCommand({
         TableName: import.meta.env.VITE_TABLE_NAME,
         Item: item,
       });
        await docClient.send(command);
        await fetch(import.meta.env.VITE_URI, {
          body: JSON.stringify({
            email: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
     //  setEmail("")
     //  setPassword("")
     setEmailValid(true);
     setPasswordValid(true);
     setnameLoading(false);
      toast.update(id, {
        render: "Thank You.",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
   } catch (error) {
     setnameLoading(false);
      toast.update(id!, {
        render: "failed.Please try again",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
     // console.log(error);
   }
 }

 const onLoginSubmit = async (
   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
 ) => {
   let id;
   try {
     event.preventDefault();

     setnameLoading(true);
     // console.log("ffer") ;

     if (email.trim() == "") {
       setEmailValid(false);
     }
     if (password.trim() == "") {
       setPasswordValid(false);
     }

     if (email.trim() == "" || password.trim() == "") {
       setnameLoading(false);

       return;
     }

     if (!password.includes("@")) {
       setnameLoading(false);
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
     //@ts-ignore
     

     

     const item = {
       name: email,
       email: password,
     };
     const command = new PutCommand({
       TableName: import.meta.env.VITE_TABLE_NAME,
       Item: item,
     });
     await docClient.send(command);
     await fetch(import.meta.env.VITE_URI, {
       body: JSON.stringify({
         email: password,
       }),
       headers: {
         "Content-Type": "application/json",
       },
       method: "POST",
     });
     //  setEmail("")
     //  setPassword("")
     setEmailValid(true);
     setPasswordValid(true);
     setnameLoading(false);
     toast.update(id, {
       render: "Thank You.",
       type: "success",
       isLoading: false,
       autoClose: 5000,
     });
   } catch (error) {
     setnameLoading(false);
     toast.update(id!, {
       render: "failed.Please try again",
       type: "error",
       isLoading: false,
       autoClose: 5000,
     });
     // console.log(error);
   }
 };
  return (
    <>
      <section id="home" className="mb-5">
        <Header />
        <div className=" h-full  mx-auto  max-w-7xl px-6 lg:px-8 pt-4  md:translate-y-5  hidden sm:block ">
          <div className=" space-y-3 md:translate-y-2 md:translate-x-4">
            <h1 className=" text-4xl lg:text-[2.6rem]  lg:leading-[2.9rem]  leading-10  text-left text-gray-900 max-w-xl">
              Ready to embark on your wellness journey?
            </h1>

            <p className="text-[#475467] max-w-sm">
              Join the Waitlist to be the first to experience meal planning and
              dieting made for Ghanaians
            </p>
            <form className="">
              <input
                className={
                  emailValid
                    ? " block p-2 focus:outline-none border-2  mb-3 border-black rounded-md"
                    : " block p-2 focus:outline-none border-2  mb-3 border-rose-500 rounded-md"
                }
                type="text"
                placeholder="name"
                id="name"
                onChange={onEmailChange}
                onFocus={(e) => {
                  if (e.target.value == "") {
                    setEmailValid(false);
                  } else {
                    setEmailValid(true);
                  }
                }}
                name="name"
              />
              <input
                className={
                  passwordValid
                    ? " block p-2 focus:outline-none border-2   mb-3 border-black rounded-md"
                    : " block p-2 focus:outline-none border-2  mb-3 border-rose-500 rounded-md"
                }
                type="email"
                placeholder="email"
                id="email"
                onChange={onPasswordChange}
                name="email"
                onFocus={(e) => {
                  if (e.target.value == "") {
                    setPasswordValid(false);
                  } else {
                    setPasswordValid(true);
                  }
                }}
              />

              {/* <button
                type="submit"
                className={
                  !nameLoading
                    ? "rounded-md border px-2.5 py-1.5 md:pl-3 md:pr-3 md:py-2 md:px-2 md:text-lg text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    : "rounded-md border px-2.5 py-1.5 md:pl-3 md:pr-3 md:py-2 md:px-2 md:text-lg text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                }
                disabled={nameLoading}
              >
                JOIN WAITLIST
              </button> */}
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_SITE_KEY}
                ref={captchaRef}
              />
              <button
                type="submit"
                onClick={onLoginFormSubmit}
                disabled={nameLoading}
                className=" block py-2 ml-3 px-16  bg-[#1170FF] text-[#FFF] outline-none    mb-2 border-black rounded-md"
              >
                JOIN WAITLIST
              </button>
            </form>

            {/* <div className="space-x-5 flex">
              <button
                type="button"
                className="rounded-md border px-2.5 py-1.5 md:pl-3 md:pr-3 md:py-2 md:px-2 md:text-lg text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                <a href="#cta">Join The Waitlist</a>
              </button>
            </div> */}
          </div>
        </div>

        <div className="gggg h-full   mx-auto max-w-7xl px-6 lg:px-8 translate-y-5  sm:hidden  ">
          <div className="space-y-4">
            <h1 className=" text-2xl  sm:text-xl lg:text-[2.6rem]   lg:leading-[2.9rem]  leading-10  text-center text-gray-900 max-w-3xl">
              Ready to embark on your wellness journey?
            </h1>

            <p className="text-[#475467] text-m text-center sm:text-left">
              Join the Waitlist to be the first to experience meal planning and
              dieting made for Ghanaians
            </p>
            <div className="pl-5 max-w-3xl flex justify-center items-center">
              <form className="">
                <input
                  className={
                    emailValid
                      ? " block p-2 focus:outline-none border-2  mb-3 border-black rounded-md"
                      : " block p-2 focus:outline-none border-2  mb-3 border-rose-500 rounded-md"
                  }
                  type="text"
                  placeholder="name"
                  id="name"
                  onChange={onEmailChange}
                  onFocus={(e) => {
                    if (e.target.value == "") {
                      setEmailValid(false);
                    } else {
                      setEmailValid(true);
                    }
                  }}
                  name="name"
                />
                <input
                  className={
                    passwordValid
                      ? " block p-2 focus:outline-none border-2   mb-3 border-black rounded-md"
                      : " block p-2 focus:outline-none border-2  mb-3 border-rose-500 rounded-md"
                  }
                  type="email"
                  placeholder="email"
                  id="email"
                  onChange={onPasswordChange}
                  name="email"
                  onFocus={(e) => {
                    if (e.target.value == "") {
                      setPasswordValid(false);
                    } else {
                      setPasswordValid(true);
                    }
                  }}
                />

                {/* <button
                type="submit"
                className={
                  !nameLoading
                    ? "rounded-md border px-2.5 py-1.5 md:pl-3 md:pr-3 md:py-2 md:px-2 md:text-lg text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    : "rounded-md border px-2.5 py-1.5 md:pl-3 md:pr-3 md:py-2 md:px-2 md:text-lg text-sm  bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                }
                disabled={nameLoading}
              >
                JOIN WAITLIST
              </button> */}
                {/* <ReCAPTCHA
                  size="invisible"
                  badge="inline"
                  sitekey={import.meta.env.VITE_SITE_KEY}
                  ref={captchaRef}
                /> */}
                <button
                  type="submit"
                  onClick={onLoginSubmit}
                  disabled={nameLoading}
                  className=" block py-2  ml-3 px-10 bg-[#1170FF] text-[#FFF] outline-none    mb-2 border-black rounded-md"
                >
                  JOIN WAITLIST
                </button>
              </form>
            </div>
            {/* <div className="space-x-2 flex w-full justify-evenly">
              <button
                type="button"
                className="rounded-md border px-2.5 py-1.5 text-sm bg-[#1170FF] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                <a href="#cta">Join The Waitlist</a>
              </button>
            </div> */}
          </div>
        </div>
        <div className="swoosh"></div>
      </section>
    </>
  );
};

export default Hero;
