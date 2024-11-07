import React from "react";
import FooterTitle from "./FooterTitle";

const FooterLinks:React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div>
    <FooterTitle title={title} />
    {links.map((link, index) => (
      <p key={index}>{link}</p>
    ))}
  </div>
);

export default FooterLinks;
