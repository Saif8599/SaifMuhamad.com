import React from "react";
import NavbarBlock from "../features/blocks/navbar/NavbarBlock";
import HeroSection from "../features/blocks/hero-section/HeroSection";
import QuoteBlock from "../features/blocks/quote/QuoteBlock";
import FooterBlock from "../features/blocks/footer/FooterBlock";
import ContactBlock from "../features/blocks/contact/ContactBlock";
import AboutBlock from "../features/blocks/about/AboutBlock";
import ScrollLinkedWordTyper from "../features/scrollytelling/ScrollLinkedWordTyper";
import ProjectsBlock from "../features/blocks/project/ProjectsBlock";
import TechStackBlock from "../features/blocks/techstack/TechStackBlock";

const Index: React.FC = () => {
  return (
    <div>
      <div>
        <ScrollLinkedWordTyper
          className="bg-black text-white font-mono"
          text="Fuck the money, never leave your people behind. It's never love, no matter what you try."
        />
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
        <ProjectsBlock
          className="bg-black text-white"
          projects={[
            {
              id: "1",
              title: "Hotel ter Tuin",
              description: `Hotel ter Tuin is a student project focused on creating a system for booking hotel rooms.
              Users can select rooms, set check-in and check-out dates, and make reservations.
              It includes an admin login using specific credentials and a Control Management System (CMS) to oversee reservation details.
              Admins can view and edit reservation information, with instant updates reflected in the database.
                `,
              link: "https://github.com/Saif8599/HotelterTuin",
              linkText: "Github",
              image: "./assets/hotelterTuinFrontPage.png",
            },
            {
              id: "2",
              title: "SaifMuhamad.nl",
              description: `
              SaifMuhamad.nl is my portfolio website, showcasing my professional projects and skills in an easy-to-navigate format.
              It's designed for visitors to explore my work and capabilities for career opportunities and networking.
                `,
              link: "https://github.com/Saif8599/SaifMuhamad.nl",
              linkText: "Github",
              image: "./assets/saifmuhamad.nlFrontPage.png",
            },
          ]}
        />
        <TechStackBlock
          className="bg-black text-white"
          title={"My Tech Stack"}
          description={"A collection of technologies I frequently use:"}
          techStackItems={[
            {
              id: "1",
              title: "Linear",
              description:
                "A modern, project management tool for high-performing teams.",
              image: "./assets/linearAppLogo.png",
              link: "https://linear.app",
            },
            {
              id: "2",
              title: "Next.js",
              description:
                "A React framework for production with hybrid static & server rendering.",
              image: "./assets/nextJSLogo.png",
              link: "https://nextjs.org",
            },
            {
              id: "3",
              title: "React",
              description: "A JavaScript library for building user interfaces.",
              image: "./assets/reactLogo.png",
              link: "https://reactjs.org",
            },
            {
              id: "4",
              title: "Storybook",
              description:
                "An open-source tool for developing UI components in isolation for React.",
              image: "./assets/storybookLogo.png",
              link: "https://storybook.js.org",
            },
            {
              id: "5",
              title: "Framer Motion",
              description: "A production-ready motion library for React.",
              image: "./assets/framerMotionLogo.png",
              link: "https://www.framer.com/motion/",
            },
            {
              id: "6",
              title: "MySQL",
              description:
                "An open-source relational database management system.",
              image: "./assets/MySqlLogo.png",
              link: "https://www.mysql.com",
            },
          ]}
        />
        <ContactBlock
          className="bg-black text-white"
          data={{
            title: "Get in Touch",
            description: `Do you want to ask questions? or have some advice for me or just want to say 'Hi'
              in any case feel free to get in touch with me.
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              The quickest way to reach out to me is via my email.`,
            buttonText: "SaifzMuhamad@gmail.com",
          }}
        />
        <FooterBlock className="bg-black text-white font-mono" />
      </div>
    </div>
  );
};

export default Index;
