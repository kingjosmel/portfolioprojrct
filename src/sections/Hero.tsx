import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      {/* grain image */}
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>

      {/* Hero ring */}

      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>

      {/* stars, circles and sparkles */}
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon  className="size-28 text-emerald-300"/>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <StarIcon  className="size-12 text-emerald-300"/>
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <StarIcon  className="size-8 text-emerald-300"/>
      </HeroOrbit>

        {/* sparkle */}

      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon  className="size-8 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon  className="size-5 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon  className="size-10 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={710} rotation={144}>
        <SparkleIcon  className="size-14 text-emerald-300/20"/>
      </HeroOrbit>

      {/* circle */}

      <HeroOrbit size={720} rotation={95}>
        <div  className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={520} rotation={-41}>
        <div  className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={-5}>
        <div  className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>

      </div>
        {/* wraper container  */}

      <div className="container">
        {/* image and avalbility */}

        <div className="flex flex-col items-center">
        <Image 
        className="size-[100px]"
        src={memojiImage}
        alt="person peaking from laptop"        
        />

        {/* Avalabilty container */}
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">

          <div className="bg-green-500 size-2.5 rounded-full"></div>

          <div className="text-sm font-medium">Available for new projects</div>
        </div>
        </div>

          {/* heading texts */}
          <div className="max-w-lg mx-auto">

        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Building Exceptional User Expirence</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">I specialise in transforming designs into functional, high-performing web applications. Let's discuss yout next project.</p>
        </div>


        {/* Buttons  */}

        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explor My Work </span>
            <ArrowDown  className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>😉</span>
            <span className="font-semibold ">Let's connect </span>
          </button>
        </div>
      </div>
    </div>
  );
};
