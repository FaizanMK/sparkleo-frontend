import Footer from "@/components/Footer";
import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
// import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* <div className="flex gap-x-1 ml-[40] mt-5  items-center text-[#A3AED0]">
        <IoIosArrowBack className="" />
        <p>Back</p>
      </div> */}
      {/*  screen */}

      <div className="bg-[#FFFFFF] min-h-screen w-full flex justify-between max-md:flex-col  ">
        {/* back button */}
        {/* LeftSIde */}

        <div className=" w-full flex justify-center items-center">
          <div className=" ">
            <h1 className=" text-[#E92928] font-sans font-bold text-3xl mb-6 ">
              Sign In
            </h1>
            <p className="text-[#A3AED0] text-lg font-normal mb-6 ">
              Enter your email and password to sign in!
            </p>
            <p className="text-[#A3AED0] text-[14] gap-x-5 ml-10">
              {" "}
              ------------ or ------------
            </p>
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
        {/* rightSide */}
        <div className="bg-[#E92928] w-1/2 max-md:w-full rounded-bl-3xl flex justify-center items-center">
          <div className="flex-col">
            <div className="mb-16 max-md:mb-0 max-lg:mb-6 max-lg:font-bold">
              <Image
                src="/assets/spark.png"
                alt="spark bus"
                width={230}
                height={98}
                className="min-h-16 max-lg:w-[120] max-lg:h-[70] object-contain "
              />
            </div>
            <div className="">
              <Image
                src="/assets/sparkInfo.png"
                alt="spark info"
                width={271}
                height={134}
                className="min-h-16 max-lg:w-[150] max-lg:h-[70] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
