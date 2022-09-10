import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="text-center bg-white">
        <div class="px-4 py-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto space-y-6">
            <nav class="py-12">
              <ul class="flex flex-wrap justify-center text-xl font-bold gap-10">
                <li>
                  <Link
                    class="text-gray-900 transition hover:text-gray-900/75 bg-[#f2f2f3] py-4 px-4 rounded-full"
                    to="/the-chopmoney-story"
                    rel="noopener noreferrer"
                  >
                    The Chopmoney Story
                  </Link>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 bg-[#f2f2f3] py-4 px-4 rounded-full"
                    href="/#faq"
                    rel="noopener noreferrer"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 bg-[#f2f2f3] py-4 px-4 m-4 rounded-full"
                    href="mailto:okatakyie@chopmoney.co"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="divide-y divide-slate-700 "></div>

            <p class="max-w-lg mx-auto text-xl text-[#A6A7B0]">
              If you're looking for a smart and easy way to stick to your
              budget, Chopmoney is the perfect solution. It's free to use
              <span class="block mt-4 py-6"> &copy; 2022 Chopmoney </span>
            </p>
          </div>
          <div class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-12">
            <a
              class="text-gray-500"
              href="https://web.facebook.com/chopmoney.co"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500"
              href="https://twitter.com/chopmoneyco"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500"
              href="https://www.linkedin.com/company/chopmoney/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500"
              href="https://www.youtube.com/channel/UCh49UPSYL6bhN5iYyiU1OXA"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500"
              href="https://www.tiktok.com/@chopmoney.co?lang=en"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
