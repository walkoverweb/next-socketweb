const Footer = () => {
  return (
    <>
      <div className="container footer">
        <ul className="d-flex w-100 gap-3 justify-content-end">
          <li className="d-flex align-items-center pe-2 copyright">
            <span>
             Copyright 2023 &copy;
            </span>
            <a className="text-decoration-underline ms-1" href="https://walkover.in/" target="_blank">Walkover</a>
          </li>
          <li>
            <a href="https://walkover.in" target="_blank">About</a>
          </li>
          <li>
            <a href="/terms" target="_blank">T&C</a>
          </li>
          <li>
            <a href="/privacy" target="_blank">Privacy Policy</a>
          </li>
          <li>
            <a href="https://calendly.com/rpaliwal71/15-mins" target="_blank">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
