import React from "react";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterTitle from "./FooterTitle";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="bg-primary text-white space-y-3 py-20">
      <main className="container">
        <h3 className="text-4xl font-bold">Balance Box</h3>
        <section className="flex justify-between items-start">
          <div className="max-w-72 space-y-8">
            <FooterAddress title="Malang" address="Fakultas Ilmu Komputer Universitas Brawijaya, Malang, Indonesia" />
            <FooterAddress title="Bima" address="JK House, Kota Bima 3004, Indonesia" />
          </div>
          <div className="flex gap-12">
            <FooterLinks title="Company" links={["Contact Us"]} />
            <FooterLinks title="Other" links={["Privacy & Policy", "Terms & Condition"]} />
            <FooterLinks title="Social Media" links={["Instagram", "Youtube Channel", "Telegram", "Facebook"]} />
          </div>
        </section>
        <section className="flex flex-col gap-8 justify-center items-center">
          <p>Ikuti kami di</p>
          <FooterSocialMedia />
          <FooterCopyright />
        </section>
      </main>
    </footer>
  );
};

export default Footer;
