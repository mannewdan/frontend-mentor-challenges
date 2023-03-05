export default function Pitch() {
  return (
    <section className="pitch">
      <div className="item-split">
        <div className="container">
          <h2>Transform your brand</h2>
          <p>
            {
              "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            }
          </p>
          <a href="#" className="yellow">
            Learn More
          </a>
        </div>
        <img src="images/image-transform.jpg" alt="an egg"></img>
      </div>
      <div className="item-split">
        <div className="container">
          <h2>Stand out to the right audience</h2>
          <p>
            {
              "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
            }
          </p>
          <a href="#" className="pink">
            Learn More
          </a>
        </div>
        <img src="images/image-stand-out.jpg" alt="a glass"></img>
      </div>
      <div className="item graphic-design">
        <h3>Graphic Design</h3>
        <p>
          {
            "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          }
        </p>
      </div>
      <div className="item photography">
        <h3>Photography</h3>
        <p>
          {
            "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          }
        </p>
      </div>
    </section>
  );
}
