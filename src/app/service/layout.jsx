import React from "react";
export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/services");
  const data = await res.json();
  return {
    title: data[0]["title"],
    description: data[0]["description"],
    keywords: data[0]["keywords"],
    openGraph: {
      images: data[0]["image"],
    },
  };
}
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
