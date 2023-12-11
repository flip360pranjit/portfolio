import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col items-center max-w-2xl font-nunito gap-10">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
        alt="photo"
        className="w-32 rounded-full"
      />
      <h2 className="text-center text-2xl opacity-80">
        “Matt's a clear communicator with the tenacity and confidence to really
        dig in to tricky design scenarios and the collaborative friction that's
        needed to produce excellent work.”
      </h2>
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-xl font-semibold font-exo">Alex Martin</h4>
        <h5 className="">Web Team Lead, The Artistry</h5>
      </div>
    </div>
  );
}

export default Testimonial;
