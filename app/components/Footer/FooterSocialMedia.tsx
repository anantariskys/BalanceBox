import React from "react";
import { Icon } from "@iconify/react";

const iconData = [
  { id: 1, name: "instagram", icon: "mdi:instagram" },
  { id: 2, name: "youtube", icon: "mdi:youtube" },
  { id: 3, name: "telegram", icon: "mdi:telegram" },
  { id: 4, name: "facebook", icon: "mdi:facebook" },
];

const FooterSocialMedia = () => (
  <div className="flex gap-8 items-center">
    {iconData.map((item) => (
      <Icon key={item.id} icon={item.icon} className="text-2xl" />
    ))}
  </div>
);

export default FooterSocialMedia;
