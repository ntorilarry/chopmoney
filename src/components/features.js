import React from "react";
import "../styles/features.css"

function Features() {
  return (
    <div id="what">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <h2 className="max-w-lg mb-14 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Create a budget and stick to it! We help you do the latter.
          <img className="line mx-auto" src="https://i.postimg.cc/ZRdtVH1K/title-line-2.png" alt=""/>
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl mx-auto mb-10">
            <img src="https://i.postimg.cc/hGsWCgFV/home.gif" alt="" />
          </div>
          <div className="grid content-center row-gap-5 sm:grid-cols-2 m-auto">
            <div className="max-w-xs border p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 circle1">
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
              <h6 className="mb-2 text-xl font-semibold leading-5 pt-4">
                Easy-to-use
              </h6>
              <p className="text-base text-gray-700 pt-4">
                Chopmoney's interface is straight forward as we aim to make your
                experience as snappy as possible.
              </p>
            </div>
            <div className="max-w-xs border p-8 ">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 circle2">
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
              <h6 className="mb-2 text-xl font-semibold leading-5 pt-4">
                Just like clock-work{" "}
              </h6>
              <p className="text-base text-gray-700 pt-4">
                Your payments come right on your chosen time with no delay.
              </p>
            </div>
            <div className="max-w-xs border p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 circle3">
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
              <h6 className="mb-2 font-semibold text-xl leading-5 pt-4">
                Customised plans
              </h6>
              <p className="text-base text-gray-700 pt-4">
                We've all got different needs. Chopmoney knows this, so it
                allows you to fully customise every major part of the
                experience.
              </p>
            </div>
            <div className="max-w-xs border p-8 ">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 circle4">
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
              <h6 className="mb-2 text-xl font-semibold leading-5 pt-4">
                Totally freeeee!{" "}
              </h6>
              <p className="text-base text-gray-700 pt-4">
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
