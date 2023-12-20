const Navbar = () => {
  return (
    <>
      <div className="navbar-cont">
        <div className="nav container d-flex col-12 align-items-center justify-content-between my-3">
          <a href="/">
          <img className="nav__logo" src="/img/mainlogo.svg" alt="Via-Socket-logo" />
          </a>
          <div className="nav__menu">
            <ul className="d-flex gap-4 align-items-center">
              <li>
                <a href="#" className="tabitems-nav px-1">
                  Embed
                </a>
              </li>
              <li>
                <a href="#" className="tabitems-nav px-1">
                  Flow
                </a>
              </li>
              <li>
                <a href="#" className="tabitems-nav px-1">
                  Table
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__buttons d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-light">Try for FREE</button>
            <a href="/login" className="text-link px-1">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
