import { useNavigate } from "react-router-dom";
import { primary } from "../../theme/themeColors";

type Props = {};

const Timeline = (props: Props) => {
  const navigate = useNavigate();

  const handleClickExplore = () => {
    navigate("/predictionexcel");
  };
  return (
    <section>
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
              onClick={handleClickExplore}
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
                      Use our Potential Sales Excel operation and free yourself
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
                      save yourself the hassle
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Easily review your sales
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Declarative Charts operation and see your
                      company's sales with any kind of graph you want. Analyze
                      and take action on your products sales.
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
                      persuade to buy
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Multiply your sales with a click
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Define Campaign operation and encourage the user
                      who added one of your products to their cart to buy
                      another product.
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
                      keep them in company
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Reward the loyals
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Use our Reward Loyal Ones operation and reward users
                      identified as loyal to your company with campaigns. Keep
                      them loyal to your products and keep them happy.
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
                      effective communication
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Win back the reactive ones
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      It is very important to evaluate users' feedback and
                      satisfy them. Use our Produce a Solution operation and
                      analyze users' feedback, communicate with them and win
                      them back by offering a special campaign.
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
                      don't forget the newcomers
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl italic">
                      Connect from very beginning
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100 font-medium lg:text-justify italic">
                      Identify first-time shoppers, offer them limited-time
                      offers and hook them from the start. With our Special
                      Offers For Newcomers operation, it's easy to do. Win love
                      right from the start.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt=""
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
