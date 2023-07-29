import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn:React.FC<FooterColumnProps> = ({title, links}) => {
    return(
        <div className="footer_column w-fit">
            <h4 className="font-semibold w-fit">{title}</h4>
            <ul className="flex flex-col gap-2 font-normal w-fit">{links.map((link, ind) => (
                <Link className="w-fit" href="/" key={ind + link}>{link}</Link>
            ))}</ul>
        </div>
    )
}

const Footer = () => {
  return <section className="flexStart footer"><div className="flex flex-col mt-6 w-full">
    <div className="flex flex-col mb-4">
        <Image src='logo-purple.svg' alt="flexxible-purple" width={116} height={43} />
        <p className="text-start text-sm font-normal mt-5 max-w-xs">Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.</p>
    </div>
    <div className="flex flex-wrap gap-12 justify-between">
        <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

        <div className="flex flex-col gap-4">
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
        </div>

        <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

        <div className="flex flex-col gap-4">
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
        </div>
    </div>
  </div>
  <div className="flexBetween footer_copyright">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>
  </section>;
};

export default Footer;
