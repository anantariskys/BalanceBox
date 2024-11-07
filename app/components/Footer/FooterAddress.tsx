import React from "react";
import FooterTitle from "./FooterTitle";

const FooterAddress:React.FC<{ title: string; address: string }> = ({ title, address }) => (
  <div>
    <FooterTitle title={title} />
    <p>{address}</p>
  </div>
);

export default FooterAddress;
