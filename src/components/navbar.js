import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className=" navbar container d-flex col-12 align-items-center justify-content-between my-3">
        <img src="/img/mainlogo.svg" alt="Via-Socket-logo" />
        <div className="navmenu">
          <ul className="d-flex gap-4 align-items-center">
            <li>
              <a href="#" className="tabitems-nav active-menu-link px-1">
                Embed
              </a>
            </li>
            {/* <li>
              <a href="#" className="tabitems-nav px-1">
                Table
              </a>
            </li> */}
            <li>
              <a
                href="https://flow.viasocket.com/"
                className="tabitems-nav px-1"
              >
                Flow
              </a>
            </li>
            <li>
              <a className="tabitems-nav px-1" href="/login">
                <button className="btn btn-light">
                  Login
                </button>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
