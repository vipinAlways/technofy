:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: #132039; /*heading*/
  --primary-foreground: #132039;
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: #65758B; /* navlinks & para text*/
  --muted-foreground: #e5e7eb; /* hero para & why card whole  & CTA para*/
  --accent: #3853A4; /* highlight*/
  --accent-foreground: oklch(0.208 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: #d3d3d3; /*service card border & footer links*/
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.984 0.003 247.858);
  --sidebar-foreground: oklch(0.129 0.042 264.695);
  --sidebar-primary: oklch(0.208 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.968 0.007 247.896);
  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
  --sidebar-border: oklch(0.929 0.013 255.508);
  --sidebar-ring: oklch(0.704 0.04 256.788);
}





<div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Introduction
          </h1>
          <p className="text-lg leading-7 text-muted">
            This Privacy Policy outlines how Technofy collects, uses, protects,
            and manages your personal information when you visit our website or
            use our services.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start ">
          <h1 className="text-primary font-medium leading- text-2xl">
            Information We Collect
          </h1>
          <ul className="list-disc flex flex-col gap-3 list-inside">
            <li className="text-lg leading-7 text-muted">
              <p>
                {" "}
                Personal Information (Name, email address, phone number, company
                name)
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
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-primary font-medium leading-7 text-2xl">
            How We Use Your Information
          </h1>
          <ul className="list-disc flex flex-col gap-3 list-inside ">
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

        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Data Protection & Security
          </h1>
          <p className="text-lg leading-7 text-muted">
            Technofy implements appropriate technical and organizational
            measures to protect your data from unauthorized access, misuse, or
            disclosure.
          </p>
        </div>
        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Data Sharing
          </h1>
          <p className="text-lg leading-7 text-muted">
            We do not sell or trade personal information. Information may be
            shared with trusted service providers strictly for operational
            purposes or when required by law.
          </p>
        </div>
        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Cookies
          </h1>
          <p className="text-lg leading-7 text-muted">
            Our website may use cookies to enhance user experience and analyze
            website traffic. You may control cookie settings through your
            browser preferences.
          </p>
        </div>
        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Your Rights
          </h1>
          <p className="text-lg leading-7 text-muted">
            You may request access, correction, or deletion of your personal
            data by contacting us directly.
          </p>
        </div>
        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Updates to This Policy
          </h1>
          <p className="text-lg leading-7 text-muted">
            Technofy reserves the right to update this Privacy Policy
            periodically. Any changes will be posted on this page.
          </p>
        </div>
        <div>
          <h1 className="text-primary font-medium leading-7 text-2xl">
            Contact Us
          </h1>
          <p className="text-lg leading-7 text-muted">
            ou have any questions regarding this Privacy Policy, please contact
            us at:
          </p>

          <div className="text-primary text-lg flex flex-col gap-2 ">
            <a href="mailto:support@technofy.com">
              Email: support@technofy.com
            </a>
            <a href="tel:00000000">Phone: +91 XXXXX XXXXX</a>
          </div>
        </div>








            <section
        id="hero"
        className="relative w-full border-8 border-border bg-[url('/images/hero-background.png')] bg-cover bg-center flex  justify-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6  text-white">
          <div className="text-center flex flex-col gap-3 max-w-xl items-center justify-center ">
            <h1 className="text-6xl md:text-6xl leading-17 font-bold">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              We value your privacy and are committed to protecting your
              personal information with transparency and integrity.
            </p>
          </div>
        </div>
      </section>












      /////////////////////////////////
      @custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: #132039; /*heading*/
  --primary-foreground: #132039;
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: #65758b; /* navlinks & para text*/
  --muted-foreground: #e5e7eb; /* hero para & why card whole  & CTA para*/
  --accent: #3853a4; /* highlight*/
  --accent-foreground: oklch(0.208 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: #d3d3d3; /*service card border & footer links*/
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.984 0.003 247.858);
  --sidebar-foreground: oklch(0.129 0.042 264.695);
  --sidebar-primary: oklch(0.208 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.968 0.007 247.896);
  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
  --sidebar-border: oklch(0.929 0.013 255.508);
  --sidebar-ring: oklch(0.704 0.04 256.788);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

body {
  scroll-behavior: smooth;
}
h1,
h3,
h4,
h2 {
  font-family: var(--font-heading);
}

p {
  font-family: var(--font-body);
  font-weight: 400;
}
