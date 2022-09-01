import React from "react";

function Features() {
  return (
    <div id="what">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl pr-16 mx-auto mb-10">
            <img src="https://i.postimg.cc/hGsWCgFV/home.gif" alt="" />
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="max-w-xs border p-8 h-[15rem]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Easy-to-use</h6>
              <p className="text-sm text-gray-700">
                Chopmoney's interface is straight forward as we aim to make your
                experience as snappy as possible.
              </p>
            </div>
            <div className="max-w-xs border p-8 h-[15rem]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Just like clock-work{" "}
              </h6>
              <p className="text-sm text-gray-700">
                Your payments come right on your chosen time with no delay.
              </p>
            </div>
            <div className="max-w-xs border p-8 h-[15rem]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Customised plans</h6>
              <p className="text-sm text-gray-700">
                We've all got different needs. Chopmoney knows this, so it
                allows you to fully customise every major part of the
                experience.
              </p>
            </div>
            <div className="max-w-xs border p-8 h-[15rem]">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Totally freeeee!{" "}
              </h6>
              <p className="text-sm text-gray-700">
                The Chopmoney mobile app is available on both Android and iOS
                and comes at no charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
