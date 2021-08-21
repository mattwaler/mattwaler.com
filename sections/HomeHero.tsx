import { Waves } from "components/Icons"

const Hero = () => (
  <>
    <section className="gradient-purple text-white">
      <div className="container py-12 relative text-center lg:text-left">
        <img
          alt="My family and I cheesin' hard."
          src="/assets/fam.jpg"
          loading="lazy"
          className="object-cover object-top h-72 bg-gray-200 shadow-lg rounded-lg w-full mx-auto lg:hidden"
          width="480"
          height="288"
        />
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-black leading-none">
            <span>I make awesome websites,</span>
            <span className="block text-indigo-200">in exchange for money.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-indigo-100 ">
            I also love Tennis, Chipotle, and
            <br />
            spending time with my family.
          </p>
        </div>
        <img
          loading="lazy"
          alt="My family and I cheesin' hard."
          className="absolute w-[480px] h-[270px] top-12 right-6 hidden bg-gray-200 lg:block"
          src="/assets/fam.jpg"
          width="480"
          height="270"
        />
      </div>
    </section>
    <span className="z-0 w-full h-16 block gradient-purple text-gray-100">
      <Waves />
    </span>
    <div role="presentation" className="hidden lg:block" style={{ height: "22px" }}></div>
  </>
)

export default Hero
