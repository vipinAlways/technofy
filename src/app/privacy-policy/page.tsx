import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col md:gap-24 gap-12 pb-24">
      <div className="w-full bg-[url('/images/about-hero.png')] bg-cover bg-center relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div className="max-w-7xl mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
          <section
            id="hero"
            className={"relative w-full  flex  justify-center  items-center"}
          >
            {/* Dark Overlay */}

            <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6  text-white">
              <div className="text-center flex flex-col gap-3 max-w-2xl items-center justify-center ">
                <h1 className="text-6xl md:text-6xl leading-[4.25rem] font-bold">
                  Privacy Policy
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  We value your privacy and are committed to protecting your
                  personal information with transparency and integrity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:max-w-4xl w-full mx-auto flex flex-col  gap-24 items-stretch">
        <section
          id="clause"
          className="w-full flex  flex-col items-start justify-center gap-10
          "
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Introduction
            </h1>
            <p className="text-lg leading-7 text-muted">
              This Privacy Policy outlines how Technofy collects, uses,
              protects, and manages your personal information when you visit our
              website or use our services.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-startw-full ">
            <h1 className="text-primary font-medium leading- text-2xl">
              Information We Collect
            </h1>
            <ul className="list-disc flex flex-col gap-3 pl-5">
              <li className="text-lg leading-7 text-muted">
                <p>
                  {" "}
                  Personal Information (Name, email address, phone number,
                  company name)
                </p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>
                  Technical Information (IP address, browser type, device
                  information)
                </p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>
                  Communication Data (Messages submitted through contact forms)
                </p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>Usage Data (Website interaction and analytics data)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-start w-full">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              How We Use Your Information
            </h1>
            <ul className="list-disc flex flex-col gap-3 pl-5 w-full">
              <li className="text-lg leading-7 text-muted">
                <p> Respond to inquiries and provide support</p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>Deliver and improve our services</p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>Maintain security and prevent fraud</p>
              </li>
              <li className="text-lg leading-7 text-muted">
                <p>Comply with legal obligations</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Data Protection & Security
            </h1>
            <p className="text-lg leading-7 text-muted">
              Technofy implements appropriate technical and organizational
              measures to protect your data from unauthorized access, misuse, or
              disclosure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Data Sharing
            </h1>
            <p className="text-lg leading-7 text-muted">
              We do not sell or trade personal information. Information may be
              shared with trusted service providers strictly for operational
              purposes or when required by law.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Cookies
            </h1>
            <p className="text-lg leading-7 text-muted">
              Our website may use cookies to enhance user experience and analyze
              website traffic. You may control cookie settings through your
              browser preferences.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Your Rights
            </h1>
            <p className="text-lg leading-7 text-muted">
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Updates to This Policy
            </h1>
            <p className="text-lg leading-7 text-muted">
              Technofy reserves the right to update this Privacy Policy
              periodically. Any changes will be posted on this page.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary font-medium leading-7 text-2xl">
              Contact Us
            </h1>
            <p className="text-lg leading-7 text-muted">
              ou have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <div className="text-primary text-lg flex flex-col gap-2 ">
              <a href="mailto:support@technofy.com">
                <p> Email: support@technofy.com</p>
              </a>
              <a href="tel:00000000">
                <p>Phone: +91 XXXXX XXXXX</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
