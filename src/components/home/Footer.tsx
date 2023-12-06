import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-gray-800">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3 font-semibold italic">ZBDBehavior</h3>
          <p className="font-semibold italic">
            Shape the Future with Data, Connect with Customers.
          </p>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0 font-semibold italic">
            {" "}
            &copy; ZBDBehavior.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
