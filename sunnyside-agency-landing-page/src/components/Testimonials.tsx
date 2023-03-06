export default function Testimonials() {
  return (
    <section>
      <h3 className="testimonials-heading">Client Testimonials</h3>
      <div className="testimonials">
        <blockquote className="item">
          <strong className="name">Emily R.</strong>
          <p className="title">Marketing Director</p>
          <p className="quote">
            {
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
          </p>
          <img src="images/image-emily.jpg" alt="emily"></img>
        </blockquote>{" "}
        <blockquote className="item">
          <strong className="name">Thomas S.</strong>
          <p className="title">Chief Operating Officer</p>
          <p className="quote">
            {
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
          </p>
          <img src="images/image-thomas.jpg" alt="thomas"></img>
        </blockquote>{" "}
        <blockquote className="item">
          <strong className="name">Jennie F.</strong>
          <p className="title">Business Owner</p>
          <p className="quote">
            {
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
          </p>
          <img src="images/image-jennie.jpg" alt="jennie"></img>
        </blockquote>
      </div>
    </section>
  );
}
