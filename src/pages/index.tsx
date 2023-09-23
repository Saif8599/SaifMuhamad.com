import React from "react";
import NavbarBlock from "../features/blocks/navbar/NavbarBlock";
import HeroSection from "../features/blocks/hero-section/HeroSection";
import QuoteBlock from "../features/blocks/quote/QuoteBlock";
import FooterBlock from "../features/blocks/footer/FooterBlock";
import ContactBlock from "../features/blocks/contact/ContactBlock";
import AboutBlock from "../features/blocks/about/AboutBlock";

const Index: React.FC = () => {
  return (
    <div>
      <div className="">
        <NavbarBlock />
        <HeroSection
          data={{
            title: "Saif Muhamad",
            description:
              "A Front-end Web developer based in Amsterdam, The Netherlands.",
            buttonText: "Contact me",
            backgroundImageUrl: "./assets/travisScott.gif",
          }}
        />
        <QuoteBlock
          data={{
            quote:
              "Fuck the money, never leave your people behind. It's never love, no matter what you try.",
            author: "Travis Scott",
            authorSubscript: "STOP TRYING TO BE GOD",
          }}
        />
        <AboutBlock
          data={{
            title: "About Me",
            description:
              "I'm a Front-end Web developer student at ROC of Amsterdam. As a person, I'm eager to learn new skills to improve myself",
            buttonText: "My Resume",
            imageUrl: "https://picsum.photos/500/600",
          }}
        />
        <ContactBlock
          data={{
            title: "Get in Touch",
            description:
              "Do you want to ask questions? or have some advice for me or just want to say 'Hi' in any case feel free to get in touch with me, I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. The quickest way to reach out to me is via my email.",
            buttonText: "ninja_saif@hotmail.com",
          }}
        />
        <FooterBlock />
      </div>
    </div>
  );
};

export default Index;
