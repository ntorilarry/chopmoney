import React from "react";
import { useState } from "react";

function Faq() {
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-center">
              Frequently Asked Questions
            </h2>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="space-y-4">
                  <Item title="How much does it cost to use Chopmoney?">
                    Chopmoney is budgeting made better and free, so you can
                    focus on what's important to you. With Chopmoney, you're in
                    control of your spending and can take care of yourself
                    without overspending.
                  </Item>
                  <Item title="How is Chopmoney different fro other 'budgeting' apps?">
                    Books on financial knowledge all say “Create a budget and
                    stick to it” as if it’s that easy, we’ve realized the
                    problem does not lie with the budget creation but rather the
                    habit of sticking to it. Chopmoney is a lifestyle mobile app
                    that allows you to stick to your budget by sending you only
                    the amount you have pre-selected every day.
                  </Item>
                  <Item title=" What do I need to be able use Chopmoney?">
                    You only need any smartphone at all, being it android or iOS
                    and also any mobile money number being it MTN mobile money,
                    Vodafone Cash or Airteltigo Cash.
                  </Item>
                  <Item title=" What happens if I need my money before the date or time I pre-selected?">
                    Because we both know there is a habit we are trying to
                    create, we make sure you do not exceed your set amount
                    within the day. However, you can always withdraw your daily,
                    weekly, or bi-weekly allocated before the exact time
                    assigned at a fee. We're trying to create a habit here guys.
                  </Item>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://i.postimg.cc/bJ6dDckh/faq-image-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
