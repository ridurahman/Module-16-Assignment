import React from "react";

const Brand = () => {
  return (
    <>
      <section className="py-2 bg-linear">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="mb-4 w-full md:w-1/2 lg:w-1/5">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/logos_google.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="mb-4 w-full md:w-1/2 lg:w-1/5">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/Trello-logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="mb-4 w-full md:w-1/2 lg:w-1/5">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/logos_monday.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/Notion.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5">
              <div className="py-8 bg-gray-50 rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/slack.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
