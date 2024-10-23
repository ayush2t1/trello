import React from "react";

const page = async ({ params }: any) => {
  const { car } = await params;
  return <div>{car}</div>;
};

export default page;
