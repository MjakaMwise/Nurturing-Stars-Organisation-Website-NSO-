"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index}  />
  ));

  return (
    <div className="w-full h-full py-20 flex justify-around">
     <Carousel items={cards}></Carousel>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
    
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Our Mission",
    title: "We are committed to fostering sustainable growth in our communities through quality education, digital literacy, mental health advocacy and career guidance.",
    src: "https://i.ibb.co/zW513fKS/515835077-17900021202227453-7118457177404285116-n.jpg",
    content: <DummyContent />,
  },
  {
    category: "Our Vision",
    title: "We envision a world where individuals are empowered through innovative solutions and quality education.",
    src: "https://i.ibb.co/DHzsDhFM/nso8.jpg",
    content: <DummyContent />,
  }
    


];
