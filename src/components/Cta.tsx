// import { useState, useRef}  from "react";
import React, { useState, useRef } from "react";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
const options = [
  "Weight loss",
  "Weight/Muscle Gain",
  "Managing Dietary Restrictions",
  "General Healthy Eating",
  "Exploring New Cuisines",
];
export default function Cta() {
  const captchaRef = useRef(null);
  const client = new DynamoDBClient({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,

      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    },
  });

  const docClient = DynamoDBDocumentClient.from(client);

  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameLoading, setnameLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [test, setTest] = useState("");
  const [testLoading, setTestLoading] = useState(false);
  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value.trim() != "") {
      setEmailValid(true);
    }

    // console.log(event.target.value);
  }

  function onPasswordChange(event:React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);

    if (event.target.value.trim() != "") {
      setPasswordValid(true);
    }
  }

  async function onLoginFormSubmit(event:React.MouseEvent<HTMLButtonElement , MouseEvent>) {
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

      if (
        (email.trim() == "" ) ||
        password.trim() == ""
      ) {
        setnameLoading(false);

     
        return;
      }

       if (!password.includes("@")) {
         setnameLoading(false);
         return;
       }


      //  setEmail("")
      //  setPassword("")
      setEmailValid(true);
      setPasswordValid(true);
      setnameLoading(false);
      setHide(true);
    } catch (error) {
      setnameLoading(false);
      // console.log(error);
    }
  }

  return (
    <>
      <section id="cta" className=" bg-white px-6 py-5 sm:py-10  lg:px-8 mb-20">
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
            <span className="font-medium text-black"> progress</span> and savour
            a <span className="font-medium text-black">healthier </span>{" "}
            lifestyle. This your chance to make a lasting change to your health
            , starting now.
          </p>
        </div>
        <div className="max-w-9xl flex flex-col items-center justify-center translate-y-5 ">
          {hide || (
            <form className="p-5">
              <input
                className={
                  emailValid
                    ? " block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                    : " block p-2 focus:outline-none border-2  mb-2 border-rose-500 rounded-md"
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
                    ? " block p-2 focus:outline-none border-2  mb-2 border-black rounded-md"
                    : " block p-2 focus:outline-none border-2  mb-2 border-rose-500 rounded-md"
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

              <button
                type="submit"
                className={
                  !nameLoading
                    ? " block bg-[#1170FF] w-full  p-2 rounded-md text-white"
                    : " block bg-blue-300 w-full  p-2 rounded-md text-white"
                }
                onClick={onLoginFormSubmit}
                disabled={nameLoading}
              >
                NEXT
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
                      <input
                        type="checkbox"
                        name="aims"
                        value={v}
                        onChange={(event) => {
                          const value = event.target.value;
                          const isChecked = event.target.checked;

                          // Update the selectedOptions based on whether the checkbox is checked or unchecked

                          setSelectedOptions(
                            //@ts-ignore
                            (prevSelectedOptions: string[] | never[]) => {
                              if (isChecked) {
                                // If checked, add the value to the array
                                return [...prevSelectedOptions, value];
                              } else {
                                // If unchecked, remove the value from the array
                                return prevSelectedOptions.filter(
                                  (option) => option !== value
                                );
                              }
                            }
                          );
                        }}
                      />{" "}
                      {v}
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
                    onChange={(e) => {
                      // console.log(e.target.value);
                      // console.log(e.target.checked);
                      if (e.target.checked) {
                        setTest(e.target.value);
                      }
                    }}
                  />{" "}
                  Yes , I am interested in participating.
                </label>
                <label className="block mb-2 text-base">
                  <input
                    type="radio"
                    name="testing"
                    className="text-base"
                    value="No"
                    onChange={(e) => {
                      // console.log(e.target.value);

                      // console.log(e.target.checked);
                      if (e.target.checked) {
                        setTest(e.target.value);
                      }
                    }}
                  />{" "}
                  No , I prefer to wait for the official release
                </label>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_SITE_KEY}
                  ref={captchaRef}
                />
                <button
                  type="submit"
                  className={
                    !testLoading
                      ? " block bg-[#1170FF] w-full mb-2 p-2 rounded-md text-white"
                      : " block bg-blue-300 w-full  p-2 rounded-md text-white"
                  }
                  disabled={testLoading}
                  onClick={async (e) => {
                    e.preventDefault();
                    let id;
                    try {
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

                      setTestLoading(true);
                      // console.log(test, selectedOptions);

                      if (test.length == 0 || selectedOptions.length == 0) {
                        // console.log("crej");
                        setTestLoading(false);
                        throw new Error("failed. Please try again")
                      }
                      //@ts-ignore
                      const token = captchaRef.current.getValue();
                      if (!token) {
                        setTestLoading(false);
                        throw new Error("failed. Please try again")
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
                        throw new Error("");
                      }

                      const data = await res.json();

                      // console.log(data);

                      if (!data.res.success) {
                        throw new Error("");
                      }

                      const item = {
                        name: email,
                        email: password,
                        test: test,
                      };

                      for (let a of selectedOptions) {
                        item[a] = a;
                      }

                      const command = new PutCommand({
                        TableName: import.meta.env.VITE_TABLE_NAME,
                        Item: item,
                      });

                        await docClient.send(command);
                      await fetch(import.meta.env.VITE_URI, {
                          body: JSON.stringify({
                            email:password,
                          }),
                          headers: {
                            "Content-Type": "application/json",
                          },
                          method: "POST",
                        });
                        
                      // console.log(response);

                      setEmail("");
                      setPassword("");
                      setTest("");
                      setSelectedOptions([]);
                      setTestLoading(false);
                      setHide(false);
                      toast.update(id, {
                        render: "Thank You.",
                        type: "success",
                        isLoading: false,
                        autoClose: 5000,
                      });
                    } catch (error) {
                      // console.log(error);
                      setTestLoading(false);
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
          )}
        </div>
      </section>
    </>
  );
}
