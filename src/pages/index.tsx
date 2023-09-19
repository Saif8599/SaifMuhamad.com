import React from "react";
import NavbarBlock from "../features/blocks/navbar/NavbarBlock";
import HeroSection from "../features/blocks/hero-section/HeroSection";
import QuoteBlock from "../features/blocks/quote/QuoteBlock";
import FooterBlock from "../features/blocks/footer/FooterBlock";
import ContactBlock from "../features/blocks/contact/ContactBlock";


const Index: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBlock />
        <HeroSection
          className="bg-gradient-to-l from-blue-500 to-blue-900"
          data={{
            title: "Saif Muhamad",
            description: "A Front-end Web developer based in Amsterdam, The Netherlands.",
            buttonText: "Contact me",
            imageUrl: "https://picsum.photos/seed/76/1440/810",
          }}
        />
        <QuoteBlock
          data={{
            quote: "The single most powerful asset we all have is our mind.",
            author: "Robert T. Kiyosaki",
            authorSubscript: "Rich Dad, Poor Dad",
          }}
        />
        <ContactBlock/>
        <FooterBlock/>
      </div>
    </div>
  );
};

export default Index;
