"use client";

import Image from "next/image";
import React, { useRef } from "react";
import "@/styles/hero.css";
import bannerImage from "@/images/main-card.jpg";
import card1Top from "@/images/1480.jpg";
import card1Bottom from "@/images/1482.jpg";
import card2Bottom from "@/images/1483.jpg";
import { ArrowDown } from "lucide-react";

function Home() {

  const nextSectionRef = useRef<HTMLElement | null>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[100vh] flex flex-col bg-[#faf5f5]">
      <div className="w-full  container flex space-x-5 pt-20">
        <div className="main-card w-[50%] h-[400px] rounded-xl">
          <div>
            <Image
              src={bannerImage}
              alt="Banner"
              className="relative  rounded-xl w-[100%] h-[400px] object-cover  "
            />
            <div className="absolute top-36 ml-10 space-y-5 flex flex-col justify-center  ">
              <h2 className="text-white uppercase text-xs tracking-wide">Unique promotions, don't miss out</h2>
              <div className="flex flex-col space-y-2">
              <h1 className="text-5xl font-bold text-[#333]">iPad S13+ Pro.</h1>
              <p className="text-[10px] tracking-wider">
                <span className="line-through ">$1499.99</span> from $1299.99 or <br />
                4 payments of $324.99
              </p>
              </div>
              <button className="bg-[rgb(31,41,55)] h-10 rounded-xl cursor-pointer  text-xs border-none text-white w-36">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="secundary-cards  w-[50%] h-[400px] flex space-y-5 flex-col">
          <div className="card-top flex space-x-5 ">
            <div className="card-top1 h-[190px] w-[50%] bg-[rgb(200,223,255)] rounded-xl">
              <Image src={card1Top} alt="Card 1" className="object-cover h-full w-full"  />
              <div className="absolute rotate top-44  space-y-5 flex flex-col justify-center  ">
              <div className="flex flex-col space-y-2 ">
              <h1 className="text-2xl font-bold text-[#333]">iPad S13+ Pro</h1>
              <p className="text-[10px] tracking-wider">
                <span className="line-through ">$1499.99</span> from $1299.99 or <br />
                4 payments of $324.99
              </p>
              </div>

            </div>
            </div>
            <div className="h-[190px] w-[50%] bg-[rgb(200,223,255)] rounded-xl flex justify-end">
              <Image src={card1Top} alt="Card 1" className="card-top2-img object-cover h-full w-full"  />
              <div className="absolute  rotate2 top-44  space-y-5 flex flex-col justify-center  ">
              <div className="flex flex-col space-y-2 ">
              <h1 className="text-2xl font-bold text-[#333]">iPad S13+ Pro</h1>
              <p className="text-[10px] tracking-wider">
                <span className="line-through ">$1499.99</span> from $1299.99 or <br />
                4 payments of $324.99
              </p>
              </div>

            </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="card-bottom1  h-[190px] w-[50%] rounded-xl">
              <Image src={card1Bottom} alt="Card 1" className="object-cover relative  h-full w-full rounded-xl"  />
              <div className="absolute top-96  text-white font-bold  space-y-5 flex flex-col justify-center  ">
              <div className="flex flex-col space-y-2  relative left-[6.5rem] bottom-8">
              <h1 className="text-xl font-bold  ">
              Air Pods Pro.
              </h1>
              <p className="text-[6px] tracking-wider text-end">
                <span className="line-through ">$1499.99</span> from $1299.99 or <br />
                4 payments of $324.99
              </p>
              </div>

            </div>
            </div>
            <div className="card-bottom2  h-[190px] w-[50%] rounded-xl">
            <Image src={card2Bottom} alt="Card 2" className="object-cover relative  h-full w-full rounded-xl"  />
            <div className="absolute top-96  text-white font-bold flex flex-col justify-center  ">
              <div className="flex flex-col relative left-36 bottom-8">
              <h1 className="text-xl font-bold leading-[1.20rem]">
              Air Pods Pro.
              </h1>
              <h2 className=" text-[1rem] font-bold text-end leading-[1.20rem]">
                Sound quality
              </h2>
              <h3 className=" text-[0.75rem] font-bold text-end leading-[1.20rem]">
                Comfort & style
              </h3>
              <div className="w-full flex justify-end mt-2">
                <button className="bg-[rgb(31,41,55)] rounded-xl cursor-pointer  text-[10px] border-none text-white w-14 h-5
                ">
                  Buy 
                </button>
                  </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marcas mt-20">
        <div className="flex justify-center items-center space-x-5">
          <div onClick={scrollToNextSection} className="cursor-pointer airpods1 h-[100px] w-[100px]  rounded-full">
          <Image src={card1Bottom} alt="Card 1" className="object-cover relative  h-full w-full rounded-full"  />
          </div>
          <div onClick={scrollToNextSection} className="cursor-pointer airpods2 h-[100px] w-[100px]  rounded-full">
          <Image src={card2Bottom} alt="Card 1" className="object-cover relative  h-full w-full rounded-full"  />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center mt-4'>
      <button className='border-none bg-inherit animate-bounce hover:rounded-[50%] hover:bg-[#ffffff] hover:text-black hover:transition-all cursor-pointer w-12 h-12 flex justify-center items-center '>
		<ArrowDown onClick={scrollToNextSection} size={30} className=' text-black '  />
      </button>
		</div>

    <section ref={nextSectionRef}/>
    </section>
  );
}

export default Home;
