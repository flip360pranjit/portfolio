import React from "react";
import { FaRegHandPeace } from "react-icons/fa";

function Collaborate() {
  return (
    <div className="px-[5%]">
      <div className="bg-[#141c3a] text-[#fff] grid grid-cols-3 items-center gap-10 px-[5%] py-10 rounded-lg font-exo relative -bottom-20">
        <div className="text-3xl font-semibold">Start a project</div>
        <div className="text-xl text-center">
          Interested in working together? We should queue up a time to chat.
          I’ll buy the coffee.
        </div>
        <div className="text-right">
          <div className="bg-gradient-to-r from-actionTo to-actionFrom inline-block rounded-full">
            <button className="bg-[#141c3a] px-10 py-5 m-1 rounded-full flex gap-2 items-center text-lg hover:bg-gradient-to-r hover:from-actionTo hover:to-actionFrom">
              <FaRegHandPeace />
              Let's do this
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
