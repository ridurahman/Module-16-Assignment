import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
}
const FeaturedProject = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="my-4 text-xl md:text-3xl font-heading text-green-500  font-medium">
                    FEATURED PROJECT
                  </span>
                  <h2 className="mt-6 mb-4 text-2xl md:text-3xl font-bold font-heading">
                    We provide the Perfect Solution to your business growth
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:-ml-5">
                    <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-l-xl rounded-t-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative mb-4 flex flex-wrap items-end">
                  {data.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="relative mb-4 lg:mb-0 w-full lg:w-1/3 p-2"
                      >
                        <img
                          className="w-full h-32 lg:h-48 object-cover rounded"
                          src={item["image"]}
                          alt=""
                        />
                        <div className="absolute inset-0 opacity-0 hover:opacity-75 hover:bg-gray-900 p-6 m-2 flex flex-col items-start">
                          <span className="text-gray-400">2021</span>
                          <p className="mb-auto text-xl lg:text-lg text-white font-bold">
                            {item["title"]}
                          </p>
                          <a
                            className="inline-block p-2 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                            href="#"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
