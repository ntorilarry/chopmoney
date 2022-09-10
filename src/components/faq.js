import React from "react";
import { useState } from "react";

function Faq() {
  const [faq, setFaq] = useState([
    {
      question: "How much does it cost to use Chopmoney?",
      answer:
        "Chopmoney is budgeting made better and free, so you can focus on what's important to you. With Chopmoney, you're in control of your spending and can take care of yourself without overspending.",
      open: false,
    },
    {
      question: "How is Chopmoney different from other 'budgeting' apps?",
      answer:
        "Books on financial knowledge all say “Create a budget and stick to it” as if it’s that easy, we’ve realized the problem does not lie with the budget creation but rather the habit of sticking to it. Chopmoney is a lifestyle mobile app that allows you to stick to your budget by sending you only the amount you have pre-selected every day. ",
      open: false,
    },
    {
      question: "What do I need to be able use Chopmoney?",
      answer:
        "You only need any smartphone at all, being it android or iOS and also any mobile money number being it MTN mobile money, Vodafone Cash or Airteltigo Cash.",
      open: false,
    },
    {
      question:
        "What happens if I need my money before the date or time I pre-selected?",
      answer:
        "Because we both know there is a habit we are trying to create, we make sure you do not exceed your set amount within the day. However, you can always withdraw your daily, weekly, or bi-weekly allocated before the exact time assigned at a fee. We are trying to create a habit here guys.",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <div id="faq">
      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className=" xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <section>
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                  <div className="max-w-2xl mx-autor">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                      <div
                        key={index}
                        className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
                      >
                        <button
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="flex text-md text-left text-black">
                            {" "}
                            {item.question}{" "}
                          </span>

                          <svg
                            className={`w-6 h-6 text-gray-400 ${
                              item.open ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        <div
                          className={`${
                            item.open ? "block" : "hidden"
                          } px-4 pb-5 sm:px-6 sm:pb-6`}
                        >
                          <p className="text-md"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          ></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="xl:col-span-3">
              <img
                className="w-[80%] mx-auto scale-110"
                src="https://i.postimg.cc/bJ6dDckh/faq-image-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
