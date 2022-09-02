import React from "react";

function Appinfo() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-18 py-12 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2  lg:h-[70%] m-auto h-full object-cover object-center rounded"
              src="https://i.postimg.cc/8z7nhFM6/Download.gif"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-6xl title-font font-semibold mb-4">
                Download Chopmoney Now!
              </h1>

              <p class="leading-relaxed">
                If you're looking for a smart and easy way to stick to your
                budget, Chopmoney is the perfect solution.
              </p>
              <p class="leading-relaxed">
                With our daily payouts, you can save up and spend wisely - all
                while living your best life. Best of all, it's free to use!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appinfo;
