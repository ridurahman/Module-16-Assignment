import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("TeamList Calling Fail");
  }
  return res.json();
}
const TeamList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-6 ">
            <div className="max-w-md mb-12 ">
              <span className="text-green-500 font-medium text-xl">
                OUR TEAM MEMBERS
              </span>
              <h2 className="text-2xl lg:text-3xl pt-2 font-semibold">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap">
              {data.map((item, i) => {
                return (
                  <div key={i} className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                    <div className="relative pb-8 bg-white rounded-2xl shadow text-center overflow-hidden">
                      <img
                        className="mb-8 w-full h-64 object-cover"
                        src={item.image}
                        alt=""
                      />
                      <div className="absolute bg-white p-3 rounded-3xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 ">
                        <a href={item.facebook}>
                          <img
                            src="atis-assets/social/facebook.svg"
                            className="filter-gray"
                            alt=""
                          />
                        </a>
                        <span className="line-gray">|</span>
                        <a href={item.twitter}>
                          <img
                            src="atis-assets/social/twitter.svg"
                            className="filter-gray"
                            alt=""
                          />
                        </a>
                        <span className="line-gray">|</span>
                        <a href={item.instagram}>
                          <img
                            src="atis-assets/social/instagram.svg"
                            className="filter-gray"
                            alt=""
                          />
                        </a>
                      </div>
                      <h4 className="mb-2 text-2xl font-bold font-heading">
                        {item.name}
                      </h4>
                      <p className="text-gray-500">{item.bio}</p>
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
};

export default TeamList;
