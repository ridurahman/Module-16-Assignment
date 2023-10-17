import React from "react";

function Subscribe() {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <a
                className="mb-6 inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <span className="text-green-500 font-medium">SUBSCRIBE</span>
              </a>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                Subscribe to get the latest news about us
              </h2>
              <p className="mb-8 text-gray-400 leading-loose">
                Please drop your email below to get daily update about what we
                do
              </p>
              <form className="mx-auto" action="">
                <div className="max-w-md mx-auto flex flex-wrap border border-black rounded-xl items-center">
                  <input
                    className="flex-grow m-1 py-3 px-4 mr-4 text-xs rounded leading-loose"
                    type="email"
                    placeholder="Enter Your Email Adress"
                  />
                  <button className="w-auto m-1 py-2 px-6 rounded-xl bg-orange hover:bg-green-500 text-gray-50 font-bold leading-loose transition duration-200">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
