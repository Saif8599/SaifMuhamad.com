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
        <NavbarBlock/>
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
            quote: "The single most powerful asset we all have is our mind.",
            author: "Robert T. Kiyosaki",
            authorSubscript: "Rich Dad, Poor Dad",
          }}
        />
        <AboutBlock
          data={{
            title: "About Me",
            description:
              "I'm a Fullstack Webdeveloper student at ROC of Amsterdam. As a person, I'm eager to learn new skills to improve myself",
            buttonText: "My Resume",
            imageUrl: "https://picsum.photos/500/600",
          }}
        />
        <ContactBlock />
        <FooterBlock />
      </div>
    </div>
  );
};

export default Index;
