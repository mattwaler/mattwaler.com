import type { NextPage } from "next";
import Layout from "components/Layout";
import { Arrow, Blob1, Music, Waves } from "components/Icons";
import content from "content/homepage";
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import Normalizer from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

const Home: NextPage = () => {
  return (
    <Layout meta={content.meta}>
      <>
        <Hero />
        <Skills />
        <CodeblockCTA />
      </>
    </Layout>
  );
};

const Hero = () => (
  <>
    <section className="gradient-purple text-white">
      <div className="container py-12 relative text-center lg:text-left">
        <img
          alt="My family and I cheesin' hard."
          src="/assets/fam.jpg"
          loading="lazy"
          className="object-cover object-top h-72 shadow-lg rounded-lg w-full mx-auto lg:hidden"
        />
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-black leading-none">
            <span>I make awesome websites,</span>
            <span className="block text-indigo-200">
              in exchange for money.
            </span>
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
          className="absolute w-[480px] h-[270px] top-12 right-6 hidden lg:block"
          src="/assets/fam.jpg"
        />
      </div>
    </section>
    <span className="z-0 w-full h-16 block gradient-purple text-gray-100">
      <Waves />
    </span>
    <div
      role="presentation"
      className="hidden lg:block"
      style={{ height: "22px" }}
    ></div>
  </>
);

const Skills = () => (
  <section className="relative section-spacing">
    <div className="z-0 opacity-25 text-gray-300">
      <span
        className="absolute"
        style={{ width: "640px", top: "-128px", left: "-360px" }}
      >
        <Blob1 />
      </span>
      <span
        className="absolute"
        style={{ width: "640px", top: "320px", right: "-360px" }}
      >
        <Blob1 />
      </span>
    </div>
    <div className="container text-center">
      <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl">
        Jack of all trades.
        <br className="sm:hidden" /> Master of some.
      </h2>
      <p className="text-gray-700 mt-1 italic sm:text-lg">
        I can make myself useful in a whole number of ways.
      </p>
      <div className="mt-12 grid gap-12 sm:gap-16 sm:mt-24 sm:grid-cols-3 lg:gap-24">
        {content.skills.map((skill) => (
          <div className="flex flex-col">
            <span
              className={`w-8 h-8 md:w-16 md:h-16 mx-auto animate-grow ${skill.color}`}
            >
              {skill.icon}
            </span>
            <h2 className="mt-4 font-extrabold leading-none text-xl md:mt-6 md:text-2xl">
              {skill.name}
            </h2>
            <p className="mt-2 md:mt-3 text-gray-600">{skill.description}</p>
            <span className="h-4"></span>
            <a
              className={`mt-auto flex justify-center items-center font-extrabold ${skill.color}`}
              href={skill.link}
            >
              {skill.linkText}
              <span className="ml-1 w-4 h-4">
                <Arrow />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CodeblockCTA = () => {
  useEffect(() => {
    new Normalizer({
      "remove-trailing": true,
      "remove-indent": true,
      "left-trim": true,
      "right-trim": true,
    });
    Prism.highlightAll();
  }, []);
  return (
    <section className="container flex flex-wrap items-center section-spacing">
      <div className="w-full lg:w-1/2 bg-gray-900 p-4 text-white rounded-lg shadow-lg text-sm sm:text-base">
        <div className="space-x-2 flex items-center">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="py-6">
          <pre>
            <code className="language-js">
              {`
                let needsMattsHelp = true

                const contactMatt = (message) => {
                  return alert(message)
                }

                if (needsMattsHelp) {
                  contactMatt("Let's get started!")
                }
              `}
            </code>
          </pre>
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-12 text-center lg:mt-0 lg:w-1/2 lg:pl-16 lg:text-left">
        <h3 className="relative inline text-2xl font-extrabold leading-tight lg:text-3xl">
          Do you want to build a website?
          <span
            className="w-6 h-6 absolute lg:hidden animate-bounce"
            style={{ top: "-16px", left: "-32px" }}
          >
            <Music />
          </span>
          <span
            className="w-8 h-8 absolute hidden lg:block animate-bounce"
            style={{ top: "-32px", left: "-32px" }}
          >
            <Music />
          </span>
        </h3>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
          Don't get <strong className="font-bold italic">Frozen</strong> with a
          site you don't love. I can refactor, refresh, or just rebuild you a
          new website that will knock your socks off.
        </p>
        <a
          className="inline-flex items-center mt-6 text-indigo-500 rounded font-bold "
          href="/contact/"
        >
          Contact Me
          <span className="w-4 h-4 ml-1">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Home;
