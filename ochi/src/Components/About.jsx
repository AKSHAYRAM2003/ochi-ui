import React from "react";
// import pic3 from "../assets/images/img.png";

function About() {
  return (
    <div className="W-full py-20 px-[4.5vw] bg-[#CDEA68] rounded-t-3xl">
      <h1 className="text-[3.5vw] leading-[4vw] tracking-tight font-['nav']">
        Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
        that need to <u>raise funds</u>, <u>sell prod­ucts</u>,
        <br /> <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
      </h1>

      <div className=" textpart  flex justify-between mt-[3vw]  border-y border-black  pt-[1.5vw] pb-[4vw] font-['nav']">
        <p>What you can expect:</p>
        <p>
          We create tailored presentations to help
          <br /> you persuade your colleagues, clients, or
          <br /> investors. Whether it’s live or digital,
          <br /> delivered for one or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and <br />
          design (with a bit of coffee) is what
          <br /> makes your message clear, convincing,
          <br /> and captivating.
        </p>
        <p >
          <br />
          <br />
          <br />
          S:
          <br />
          <br />
          Instagram
          <br />
          Behance
          <br />
          Facebook
          <br />
          Linkedin
          <br />
        </p>
      </div>

      <div className="w-full flex gap-10 pt-[2vw] pb=[2vw] ">
        <div className="w-1/2">
          <h1 className="text-[3.8vw] font-['nav']">Our approch:</h1>
          <button className=" group flex hover:bg-black  gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white font-['nav']">
            READ MORE
            <div className=" group-hover:scale-150  rounded-full bg-white w-[0.8vw] h-[0.8vw]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh]">
          <img className="rounded-lg" src="https://github.com/Rahul02M/React--ochi-clone/blob/main/Ochi%20clone/src/assets/img/img.jpg?raw=true" alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;