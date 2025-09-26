import React from 'react';
import Header from './Header';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <main style={{ minHeight: '70vh', padding: '20px' }}>
        <h1 className="my-5">Welcome to My HTML Developer Portfolio</h1>
        <p className="lead">Showcasing my passion for web development and front-end technologies.</p>
        <section className="container my-5">
          <h2>About Me</h2>
          <p>I am a passionate HTML developer with a keen eye for detail and a love for creating engaging user experiences. I specialize in building clean, semantic, and accessible web pages.</p>
        </section>
        <section className="container my-5">
          <h2>My Skills</h2>
          <ul className="list-unstyled">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Bootstrap 5</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
