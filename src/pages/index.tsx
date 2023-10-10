import React from "react";
import NavbarBlock from "../features/blocks/navbar/NavbarBlock";
import HeroSection from "../features/blocks/hero-section/HeroSection";
import QuoteBlock from "../features/blocks/quote/QuoteBlock";
import FooterBlock from "../features/blocks/footer/FooterBlock";
import ContactBlock from "../features/blocks/contact/ContactBlock";
import AboutBlock from "../features/blocks/about/AboutBlock";
import ScrollLinkedWordTyper from "../features/scrollytelling/ScrollLinkedWordTyper";

const Index: React.FC = () => {
  return (
    <div>
      <div>
        <ScrollLinkedWordTyper
          className="bg-black text-white font-mono"
          text="Fuck the money, never leave your people behind. It's never love, no matter what you try."
        />
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
          className="bg-black text-white font-mono"
          data={{
            quote:
              "Fuck the money, never leave your people behind. It's never love, no matter what you try.",
            author: "Travis Scott",
            authorSubscript: "STOP TRYING TO BE GOD",
          }}
        />
        <AboutBlock
          className="bg-black text-white"
          data={{
            title: "About Me",
            description: `
            <h2 class="text-3xl text-red-700 font-mono font-bold mb-2">Greetings!</h2>

            <p class="text-lg md:text-2xl mb-2">I'm a software developer passionate about building a better web,
            creating great experiences for end users, and trying to solve
            real-world problems with an eye for design.</p>

            <p class="text-lg md:text-2xl mb-10">As a person, I'm deeply committed to continuous self-improvement and acquiring new skills.
            In my world, code is the canvas, and creativity knows no bounds.</p>`,
            buttonText: "My Resume",
            imageUrl: "https://placebear.com/g/600/300",
          }}
        />
        <ContactBlock
          className="bg-black text-white"
          data={{
            title: "Get in Touch",
            description:
              `Do you want to ask questions? or have some advice for me or just want to say 'Hi'
              in any case feel free to get in touch with me.
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              The quickest way to reach out to me is via my email.`,
            buttonText: "ninja_saif@hotmail.com",
          }}
        />
        <FooterBlock className="bg-black text-white font-mono" />
      </div>
    </div>
  );
};

export default Index;
