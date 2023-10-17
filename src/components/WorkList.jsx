import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("WorkList Calling Fail");
  }
  return res.json();
}
const WorkList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-6">
            <div className="mb-16 max-w-md">
              <span className="my-4 text-2xl md:text-3xl font-heading text-green-500  font-medium">
                WORK LIST
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold font-heading">
                We provide the Perfect Solution to your business growth
              </h2>
            </div>
            <div className="flex flex-wrap mx-auto">
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                      {item.step}
                    </span>
                    <h4 className="mb-4 text-2xl font-bold font-heading">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 leading-loose">{item.des}</p>
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

export default WorkList;
