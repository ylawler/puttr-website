import Link from "next/link";

import { siteDetails } from "../data/siteDetails";
import { footerDetails } from "../data/footer";
import { getPlatformIconByName } from "../utils";
import Image from "next/image";

function Footer() {
  const { siteName } = siteDetails;
  const { quickLinks, email, socials, policies, companyName, kofi } =
    footerDetails;

  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* Optional Logo */}
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteName}
            </h3>
          </Link>
          <div>
            {policies.map((policy) => (
              <Link
                href={policy.to}
                key={policy.text}
                className="block mt-2 text-foreground-accent hover:text-foreground"
              >
                {policy.text}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.to} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          {email && (
            <a
              href={`mailto:${email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Email: {email}
            </a>
          )}
          {socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(socials).map((platformName) => {
                if (platformName && socials[platformName]) {
                  return (
                    <Link
                      href={socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
              <a href={kofi.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={kofi.imageSrc}
                  alt="Support me on Ko-fi"
                  width={175}
                  height={35}
                />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {companyName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
