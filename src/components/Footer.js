"use client";
import React from "react";

const Footer = () => {
  const otherLinks = [
    "Online Medications",
    "Download App",
    "Start Treatment",
    "Online Urgent Care",
    "FAQ",
  ];

  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Owners", href: "#" },
    { name: "Tenants", href: "#" },
    { name: "Properties", href: "#" },
  ];
  return (
    <footer>
      <div className="pt-[120px] pb-8 px-5 sm:px-8 md:px-16">
        <div className="max-w-screen-3xl mx-auto">
          {/* Main Footer Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* First Column (Logo & About) */}
            <div className="">
              <h1 className="text-5xl md:text-[76px] uppercase text-primary font-bold leading-normal">
                Logo
              </h1>
              <p className="text-customGray text-lg  font-normal leading-7 ">
                Experience the convenience of Recovery Delivered, your trusted
                source for online medication delivery. We bring the pharmacy to
                your doorstep, ensuring fast, discreet, and reliable service.
              </p>
            </div>

            <div className="flex md:flex-end md:justify-end flex-start justify-start ">
              <div>
                <h4 className="text-primary text-2xl font-normal leading-8 font-spacegrotesk mb-4">
                  Quick Links
                </h4>
                <ul>
                  {links.map((link, index) => (
                    <li key={index} className="mt-3">
                      <a href={link.href}>
                        <div className="transition-transform duration-500 ease-in-out hover:translate-x-3">
                          <p className="text-customGray text-lg font-normal leading-7">
                            {link.name}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex md:flex-end md:justify-end flex-start justify-start ">
              <div>
                <h4 className="text-primary text-2xl font-normal leading-8 font-spacegrotesk mb-4">
                  Other Links
                </h4>
                <ul>
                  {otherLinks.map((service, index) => (
                    <li key={index} className="mt-3">
                      <a href="#">
                        <div className="flex items-center gap-2 transition-transform duration-500 ease-in-out hover:translate-x-3">
                          <i className="fas fa-chevron-right text-secondary" />
                          <p className="text-customGray text-lg font-normal leading-7">
                            {service}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex md:flex-end md:justify-end flex-start justify-start ">
              <div>
                <div>
                  <h4 className="text-primary text-2xl font-normal leading-8 font-spacegrotesk mb-4">
                    Contact
                  </h4>
                 <div className="flex items-center gap-3">
                  <img src="/assets/svgs/phone.svg" />
                 <a href="tel:18667579868" className="text-customGray text-lg font-normal leading-7">
                    1-866-757-9868
                  </a>
                 </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-primary text-2xl font-normal leading-8 font-spacegrotesk mb-4">
                    Social Media
                  </h4>
                  <div className="flex items-center gap-4">
                    <img className="cursor-pointer" src="/assets/svgs/twitter.svg" />
                    <img className="cursor-pointer" src="/assets/svgs/facebook.svg" />
                    <img className="cursor-pointer" src="/assets/svgs/youtube.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ borderTop: "1px solid #C6C6C6" }}
            className="mt-20 pt-7 flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="text-customGray text-sm font-normal leading-7 font-inter text-center sm:text-left">
              ©2024 – Recovery Delivered | All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
