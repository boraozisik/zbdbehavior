import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { ClickAwayListener } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { primary } from "../../theme/themeColors";
import { useNavigate } from "react-router-dom";

type Props = {};

const AppNavbar = (props: Props) => {
  //   const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickPredictionExcel = () => {
    navigate("/predictionexcel");
  };

  const handleClickCharts = () => {
    navigate("/charts");
  };

  const handleClickCampaign = () => {
    navigate("/campaign");
  };

  const about = [
    {
      name: "Potential Sales Excel",
      description: "Upload your sales and get your prediction excel",
      onClick: handleClickPredictionExcel,
      icon: UploadFileOutlinedIcon,
    },
    {
      name: "Charts",
      description: "Examine your data on simple and descriptive charts",
      onClick: handleClickCharts,
      icon: BarChartOutlinedIcon,
    },
    {
      name: "Define Campaign",
      description:
        "Define a campaign that encourages users to buy your products",
      onClick: handleClickCampaign,
      icon: CampaignOutlinedIcon,
    },
    {
      name: "Operation3",
      description: "ZbdBehavior",
      // onClick: () => router.push("/ZbdBehavior"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
    {
      name: "Operation4",
      description: "ZbdBehavior",
      // onClick: () => router.push("/ZbdBehavior"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
    {
      name: "Operation5",
      description: "ZbdBehavior",
      // onClick: () => router.push("/ZbdBehavior"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
  ];

  //   const handleMenuItem = (path: string | undefined) => {
  //     if (path) router.push(path);
  //   };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  //   const handleClickAboutUs = (
  //     section: string | undefined,
  //     isMobile: boolean
  //   ) => {
  //     if (isMobile) {
  //       setMobileMenuOpen(false);
  //       router.push(`/about#${section}`);
  //     } else {
  //       setIsShowing((isShowing) => !isShowing);

  //       router.push(`/aboutUs#${section}`);
  //     }
  //   };

  //   const handleClickMobileMenuItem = (section: string | undefined) => {
  //     setMobileMenuOpen(false);
  //     handleMenuItem(section);
  //   };

  return (
    <header
      className={`fixed w-full  inset-x-0 top-0 z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <nav
        className="flex items-center justify-between p-3 lg:px-8 lg:container lg:mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <button className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto"
              src="/static/logos/zbdbehavior-logo.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button
            className="text-medium italic font-inter leading-6"
            style={{ cursor: "pointer", color: primary.main }}
            onClick={handleClickHome}
          >
            Home
          </button>

          <ClickAwayListener onClickAway={() => setIsShowing(false)}>
            <div className="relative text-center">
              <button
                className="text-medium font-inter flex items-center gap-x-1 leading-6 focus:outline-none"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
              >
                <span
                  className="text-medium italic"
                  style={{ color: primary.main }}
                >
                  Operations
                </span>
                <span className="ml-1">
                  {isShowing ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                      style={{ color: primary.main }}
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                      style={{ color: primary.main }}
                    />
                  )}
                </span>
              </button>

              <Transition
                show={isShowing}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 transform -translate-x-1/2 scale-95"
                enterTo="opacity-100 transform translate-x-0 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 transform translate-x-0 scale-100"
                leaveTo="opacity-0 transform -translate-x-1/2 scale-95"
              >
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[340px] rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {about.map((item) => (
                      <button
                        key={item.name}
                        onClick={item.onClick}
                        className="group w-full flex items-start gap-x-5 p-3 rounded-lg hover:bg-gray-50 focus:outline-none text-left"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-[#6C63FF]"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-inter text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
          </ClickAwayListener>

          <button
            className="text-medium italic"
            onClick={handleClickCharts}
            style={{ color: primary.main }}
          >
            Charts
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button className="-m-1.5 p-1.5">
              <img
                className="h-10 w-auto"
                src="/static/logos/main-logo.svg"
                alt=""
                onClick={() => setMobileMenuOpen(false)}
              />
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button
                  style={{ cursor: "pointer" }}
                  //   onClick={() => handleClickMobileMenuItem("/")}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  //   onClick={() => handleClickAboutUs("", true)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  //   onClick={() => handleClickAboutUs("timeline", true)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  //   onClick={() => handleClickAboutUs("passions", true)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  //   onClick={() => handleClickAboutUs("contact", true)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
                <button
                  //   onClick={() => handleClickMobileMenuItem("/work")}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ZbdBehavior
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default AppNavbar;
