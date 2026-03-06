import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col md:gap-24 gap-12 pb-24">
      <div className="w-full relative h-[50vh] pt-10  flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        {/*  */}
      <div className="pointer-events-none absolute z-40 left-0 w-full -bottom-8 h-16  bg-white blur-md " />
        {/* Content */}
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src="/images/about-hero.png"
            alt=" Smart IT Solutions That Drive Business Growth"
            className="
          w-full h-full object-cover object-center -z-20"
            loading="eager"
          />
        </div>
        <div className="md:max-w-7xl  lg:px-0 px-6 mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
          <section
            id="hero"
            className={"relative w-full  flex  justify-center  items-center"}
          >
            {/* Dark Overlay */}

            <div className="relative z-10 flex w-full md:max-w-7xl  lg:px-0 px-6 flex-col items-center justify-center gap-8  text-white">
              <div className="text-center flex flex-col gap-3 max-w-2xl items-center justify-center ">
                <h1 className="text-4xl md:text-6xl md:leading-[4.25rem] font-bold">
                  Privacy Policy
                </h1>

                <p className="text-base md:text-xl md:leading-relaxed text-muted-foreground">
                  We value your privacy and are committed to protecting your
                  personal information with transparency and integrity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:max-w-4xl w-full mx-auto flex flex-col   lg:px-0 px-4   gap-24 items-stretch">
        <section
          id="clause"
          className="w-full flex  flex-col items-start justify-center gap-10
          "
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Introduction
            </h1>
           <p className="text-base md:text-xl md:leading-relaxed text-muted">
              This Privacy Policy outlines how Technofy collects, uses,
              protects, and manages your personal information when you visit our
              website or use our services.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-startw-full ">
            <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Information We Collect
            </h1>
            <ul className="list-disc flex flex-col gap-3 pl-5">
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>
                  {" "}
                  Personal Information (Name, email address, phone number,
                  company name)
                </p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>
                  Technical Information (IP address, browser type, device
                  information)
                </p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>
                  Communication Data (Messages submitted through contact forms)
                </p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>Usage Data (Website interaction and analytics data)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-start w-full">
            <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              How We Use Your Information
            </h1>
            <ul className="list-disc flex flex-col gap-3 pl-5 w-full">
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p> Respond to inquiries and provide support</p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>Deliver and improve our services</p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>Maintain security and prevent fraud</p>
              </li>
              <li className="text-base md:text-xl md:leading-relaxed text-muted">
                <p>Comply with legal obligations</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
             <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Data Protection & Security
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              Technofy implements appropriate technical and organizational
              measures to protect your data from unauthorized access, misuse, or
              disclosure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
           <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Data Sharing
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              We do not sell or trade personal information. Information may be
              shared with trusted service providers strictly for operational
              purposes or when required by law.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Cookies
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              Our website may use cookies to enhance user experience and analyze
              website traffic. You may control cookie settings through your
              browser preferences.
            </p>
          </div>
          <div className="flex flex-col gap-3">
           <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Your Rights
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Updates to This Policy
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              Technofy reserves the right to update this Privacy Policy
              periodically. Any changes will be posted on this page.
            </p>
          </div>
          <div className="flex flex-col gap-3">
          <h1 className="text-primary font-medium md:leading-7 md:text-2xl text-xl">
              Contact Us
            </h1>
            <p className="text-base md:text-xl md:leading-relaxed text-muted">
              ou have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <div className="text-primary text-lg flex flex-col gap-2 ">
              <a href="mailto:support@technofy.com">
                <p> Email: <span className="text-accent">support@technofy.com</span></p>
              </a>
              <a href="tel:00000000">
                <p>Phone: <span className="text-accent">+91 XXXXX XXXXX</span></p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
