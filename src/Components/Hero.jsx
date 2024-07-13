import React,{useMemo} from "react";
import Facebook from '../assets/facebook.svg'
import Disney from '../assets/disney.svg'
import Airbnb from '../assets/airbnb.svg'
import Apple from '../assets/apple.svg'
import Spark from '../assets/spark.svg'
import Samsung from '../assets/samsung.svg'
import Quora from '../assets/quora.svg'
import Sass from '../assets/sass.svg'


const Hero = () => {

    const logos = useMemo(() => [
        { src: Facebook, alt: 'Facebook' },
        { src: Disney, alt: 'Disney' },
        { src: Airbnb, alt: 'Airbnb' },
        { src: Apple, alt: 'Apple' },
        { src: Spark, alt: 'Spark' },
        { src: Samsung, alt: 'Samsung' },
        { src: Quora, alt: 'Quora' },
        { src: Sass, alt: 'Sass' },
      ], []);

  return (
    <section className="max-w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center pt-16 md:pt-24 w-full z-10">
        <div className="text-center md:px-4 mb-4 md:w-[70%]">
          <h1 className="text-[2.5rem] md:text-[4rem] font-semibold md:font-medium leading-tight">
            Buy, sell and trade crypto
            <span className="inline"> like never before</span>
          </h1>
        </div>
        <div className="text-center px-5 md:px-6 mb-6 md:mb-12 w-full md:w-[70%]">
          <p className="text-sm md:text-[20px] leading-loose text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam
            ducimus totam sit,Lorem ipsum pariatur vitae quos enim eveniet
            temporibus recusandae, obcaecati ad Lorem.
          </p>
        </div>
        <div className="md:flex justify-center items-center space-y-4 md:space-y-0 gap-10 h-auto w-full px-5">
          <button className="h-[65px] w-full md:h-[4.60rem] md:w-44 bg-gradient-to-tr rounded-lg outline-none hover:shadow-[1px_1px_15px_1px_#6248ff] hover:-translate-y-1 from-secondary1 via-secondary2 to-secondary3 duration-300 text-xl">
            Get Started
          </button>
          <button className="text-xl h-[65px] w-full md:h-[4.60rem] md:w-44 backdrop-opacity-5 backdrop-invert bg-white/10 hover:bg-slate-100 hover:text-black hover:-translate-y-1 duration-300 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] md:h-[500px] bg-cover -mt-[9%] contrast-200 -z-10 mix-blend-lighten relative animate-pulse"
          style={{
            backgroundImage:
              'url("https://assets-global.website-files.com/62ea94aa50fb59ad3ea476f0/62ead55139e1cec1d88f4986_image-hero-v1-cryptocurrency-template.webp")',
          }}
        ></div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index)=>(
                    <li key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </li>
                ))}
          </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index)=>(
                    <li key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </li>
                ))}
          </ul>
        </div>
    </section>
  );
};

export default Hero;
