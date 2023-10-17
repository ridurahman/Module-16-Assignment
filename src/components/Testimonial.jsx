import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("TestimonialList Calling Fail");
  }
  return res.json();
}
const Testimonial = async () => {
  const data = await getData();
  return (
    <>
      <section className="  pt-20 pb-12">
        <div className="container px-6">
          <div className="max-w-lg mb-12 px-5">
            <h2 className="my-2 font-medium text-xl font-heading text-green-500">
              TESTIMONIAL LIST
            </h2>
            <h2 className="my-2 text-2xl lg:text-3xl pt-2 font-semibold font-heading">
              Better Agency/SEO Solution At Your Fingertips
            </h2>
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="flex flex-wrap">
            {data.map((item, i) => {
              return (
                <div key={i} className="w-full md:w-1/3 py-5 md:px-5 ">
                  <div
                    className="py-3 px-2 bg-white shadow rounded-2xl hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <div className=" mb-4">
                      <img
                        className="my-4 h-16 w-16 mx-auto rounded-2xl object-cover"
                        src={item.image}
                        alt="Monst"
                      />

                      <div className="text-center">
                        <p className="leading-loose text-lg font-normal text-gray-400 mb-5">
                          {item.msg}
                        </p>
                        <strong className="mt-6 mb-2 text-2xl font-semibold">
                          {item.name}
                        </strong>
                        <p className="text-gray-500 text-sm font-normal mt-3">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
