import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllService Calling Fail");
  }
  return res.json();
}
async function AllService() {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-6 mx-auto">
            <div className="mb-12 px-4 max-w-xl flex flex-wrap">
              <div className="lg:text-left">
                <span className="text-green-500 font-medium text-xl">
                  OUR ALL SERVICES
                </span>
                <h2 className="text-2xl lg:text-3xl pt-2 font-semibold">
                  We Provide BestWeb design services
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/2 mb-8 px-4 ">
                    <div className="bg-slate-100 mx-1 p-7 shadow-md rounded-2xl">
                      <div className="max-w-md ">
                        <span className="text-green-600 font-bold">
                          {item.tag}
                        </span>
                        <h2 className="mb-6 text-xl lg:text-2xl font-semibold font-heading">
                          {item.title}
                        </h2>
                        <div className="mb-6 max-w-sm">
                          <p className="text-gray-400 text-lg font-normal leading-loose">
                            {item.des}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-4">
                        <div className="mb-4 lg:mb-2 w-full lg:w-2/3 px-3">
                          <a href="#">
                            <img
                              className="h-32 lg:h-48 object-cover rounded"
                              src={item.image1}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mb-4 lg:mb-2 w-full lg:w-1/3 px-3">
                          <a href="#">
                            <img
                              className="h-32 lg:h-48 object-cover rounded"
                              src={item.image2}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="flex flex-wrap mb-4">
                          <div className="mb-4 lg:mb-2 w-full lg:w-1/3 px-3">
                            <a href="#">
                              <img
                                className="h-32 lg:h-48 object-cover rounded"
                                src={item.image3}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="mb-4 lg:mb-2 w-full lg:w-2/3 px-3">
                            <a href="#">
                              <img
                                className="h-32 lg:h-48 object-cover rounded"
                                src={item.image4}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllService;
