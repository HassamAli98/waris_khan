import React from "react";
import img from "../assets/Frame_1171.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import cardimg1 from "../assets/cardimg1.jpg";
import cardimg2 from "../assets/cardimg2.jpg";
import cardimg3 from "../assets/cardimg3.jpg";
const LandingPage = () => {
  const Card = (props) => {
    return (
      <div className="flex gap-8  flex-col items-center justify-center p-8  rounded shadow-gray-950 h-[250px] w-[263px] border-2">
        <div>
          <img className="h-16 w-16 rounded-full" src={props.img} alt="img" />
        </div>
        <div className="text-center">
          <span className="text-1xl">{props.title}</span>
        </div>
        <div>
          <span className="text-center  text-gray-500 text-sx">
            {props.desc}
          </span>
        </div>
      </div>
    );
  };

  const data = [
    {
      img: cardimg1,
      title: "Fully Automated",
      desc: "Our system generate fully automated timetable.",
    },
    {
      img: cardimg2,
      title: "No Conflict",
      desc: "Conflict free schedule.",
    },
    {
      img: cardimg3,
      title: "Manual Adjustmant",
      desc: "You can manually adjust the changes you want.",
    },
  ];

  return (
    <>
      <nav class="bg-white  dark:border-gray-700">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              CHRONOCAMPUS
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  ENG(US)
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </a>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 px-3 bg-[#B7DFE8] text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="p-4">SignUp</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex max-w-screen-xl  mx-auto p-4 gap-8 items-center mb-16">
        <div className="content flex gap-16 flex-col w-6/12">
          <span className="text-black text-6xl">
            Empower Your Day With Precision Planning
          </span>
          <span className="text-gray-500 text-2xl">
            Introducing Chronocampus, the ultimate Automated Timetable
            generator. Effortless Scheduling, Maximum Efficiency, Your Time,
            Your Way!
          </span>
        </div>
        <div className="Images flex gap-4 items-center">
          <div className="flex flex-col gap-8">
            <img src={img1} alt="" className="w-128 h-72 rounded" />
            <img src={img2} className="w-128 h-72 rounded" alt="" />
          </div>
          <div>
            <img src={img3} className="w-128 h-80 rounded" alt="" />
          </div>
        </div>
      </div>

      <div className="sec-3 flex items-center justify-between max-w-screen-xl  mx-auto mb-16">
        <div>
          <span className="text-2xl text-[#f29dac]">SERVICES</span>
        </div>
        <div className="flex gap-8">
          {data.map((d) => {
            return <Card img={d.img} title={d.title} desc={d.desc} />;
          })}
        </div>
      </div>
      <div className="sec-3 flex items-center justify-between max-w-screen-xl  mx-auto mb-32">
        <div className="bg-[#cae2e7] rounded-lg w-full px-8 py-32 flex flex-col gap-32 items-center">
          <span className="text-4xl text-[#f29dac]">Contanct Us</span>
          <div className="flex gap-8 w-full items-center justify-around">
            <div class="relative w-[75%]">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full ps-10 p-2.5 rounded  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="">
              <button className="bg-[#97D4E1] p-4 rounded">Send</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer max-w-screen-xl    flex flex-col gap-4  mx-auto mb-32 ">
        <div className="flex">
          <div className="icon">
            <img src={img} className="w-8 h-8" alt="img" />
          </div>
          <div className="title">
            <span>CHRONOCAMPUS</span>
          </div>
        </div>
        <div className="w-56">
          <span className="text-gray-500 text-sx">
            An automated timetable generator desktop application
          </span>
        </div>

        <div>Icon here</div>
      </div>
    </>
  );
};

export default LandingPage;
