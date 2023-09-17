import React from "react";
import NavbarBlock from "../features/blocks/navbar/NavbarBlock";
import HeroSection from "../features/blocks/hero-section/HeroSection";
import QuoteBlock from "../features/blocks/quote/QuoteBlock";


const Index: React.FC = () => {
  return (
    <div>
      <div>
        <NavbarBlock />
        <HeroSection
          className="bg-gradient-to-l from-blue-500 to-blue-900"
          data={{
            title: "Welcome to My Portfolio",
            description: "This is a sample description.",
            buttonText: "dont click me",
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
      </div>
    </div>
  );
};

export default Index;
