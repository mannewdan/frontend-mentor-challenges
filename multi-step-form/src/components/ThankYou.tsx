import Attribution from "./Attribution";

export default function ThankYou() {
  return (
    <div className="step thanks">
      <header>
        <img src="images/icon-thank-you.svg"></img>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.{" "}
          <strong>Check the console to see your submitted data!</strong>
        </p>

        <Attribution />
      </header>
    </div>
  );
}
