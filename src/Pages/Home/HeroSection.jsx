export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Mohammad Mostafa</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Welcome to my website!
            <br />

          </p>
        </div>
        <div className="buttonhero" style={{marginTop:20}}>
        <a href="mailto:mohammadmostafaa744@gmail.com"><button className="btn btn-primary">Get In Touch</button></a>
        </div>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/mhmd1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
