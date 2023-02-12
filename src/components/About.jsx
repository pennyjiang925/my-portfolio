import React from 'react';

import about from '../assets/aboutME.png';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <img src={about} alt="img" />

        <p>
          I'm passionated about coding and programming. Focus on crafting
          beautiful and user-friendly websites.
        </p>
      </div>
    </section>
  );
};
