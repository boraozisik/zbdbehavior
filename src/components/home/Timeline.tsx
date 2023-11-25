import React from "react";
import { primary } from "../../theme/themeColors";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <section>
      <a href="#timeline" id={"timeline"}></a>
      <div className="text-gray-800 py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p
              className="ml-2 uppercase tracking-loose font-medium italic"
              style={{ color: primary.main }}
            >
              Company to Top
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-medium text-gray-800 italic">
              Path to Success
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-4 font-medium italic">
              Here, you can find a guide that will take your company and budget
              to the top level. The path to success provided by ZbdBehavior
            </p>
            <button
              //   onClick={() => router.push("/#brabout")}
              className="italic font-medium bg-transparent mr-auto hover:bg-[#6C63FF] text-[#6C63FF]  hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#6C63FF] hover:border-transparent"
            >
              Explore Now
            </button>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 absolute h-full border right-1/2 border-2 border-solid rounded-1"
                  style={{ borderColor: primary.main }}
                ></div>
                <div
                  className="border-2-2  absolute h-full border left-1/2 border-2 border-solid  rounded-1"
                  style={{ borderColor: primary.main }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p
                      className="mb-3 text-base font-medium italic"
                      style={{ color: primary.main }}
                    >
                      predict the future
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Get rid of overthinking
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Potential Sales Excel feature and free yourself
                      from overthinking. Let the system handle it; you just set
                      yourself up for the future.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p
                      className="mb-3 text-base font-medium italic"
                      style={{ color: primary.main }}
                    >
                      predict the future
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Get rid of overthinking
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Potential Sales Excel feature and free yourself
                      from overthinking. Let the system handle it; you just set
                      yourself up for the future.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p
                      className="mb-3 text-base font-medium italic"
                      style={{ color: primary.main }}
                    >
                      predict the future
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Get rid of overthinking
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Potential Sales Excel feature and free yourself
                      from overthinking. Let the system handle it; you just set
                      yourself up for the future.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p
                      className="mb-3 text-base font-medium italic"
                      style={{ color: primary.main }}
                    >
                      predict the future
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Get rid of overthinking
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Potential Sales Excel feature and free yourself
                      from overthinking. Let the system handle it; you just set
                      yourself up for the future.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto  w-[24rem] h-[24rem]"
                src="/static/illustrations/launching-illustration-timeline.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
