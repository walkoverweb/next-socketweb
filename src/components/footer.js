const Footer = () => {
  return (
    <>
      <div className="container footer d-flex justify-content-between py-3">
        <ul className="d-flex gap-3 ">
          <li>
            <a className="text-white" href="https://walkover.in" target="_blank">
              About
            </a>
          </li>
          <li>
            <a className="text-white" href="/terms" target="_blank">
              T&C
            </a>
          </li>
          <li>
            <a className="text-white" href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-white" href="https://calendly.com/rpaliwal71/15-mins" target="_blank">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-white" href="https://viasocket.com/faq/pricing" target="_blank">
            Pricing
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center pe-2 copyright">
          <span>Copyright 2023 &copy;</span>
          <a
            className="text-white ms-1"
            href="https://walkover.in/"
            target="_blank"
          >
            Walkover
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
