import React from "react";

const FooterTitle: React.FC<{ title: string }> = ({ title }) => (
  <h5 className="text-xl font-bold">{title}</h5>
);

export default FooterTitle;
