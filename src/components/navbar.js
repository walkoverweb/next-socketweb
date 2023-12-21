import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-cont navbar-expand-lg">
        <div class=" nav container d-flex  align-items-center  my-3">
          <div>
            <a href="#">
              <img className="nav__logo navbar-brand" src="/img/mainlogo.svg" alt="Via-Socket-logo" />
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon menu"></span> */}
            <MdMenu className="fs-1 text-white" />
          </button>

          <div class="navbar-collapse nav__menu" id="navbarSupportedContent">

            <ul class="navbar-nav ms-auto mb-2">
              <li class="nav-item pe-3">
                <a class="nav-link active tabitems-nav" href="#">Embed</a>
              </li>
              <li class="nav-item pe-3 ">
                <a class="nav-link tabitems-nav" href="#">Flow</a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link tabitems-nav" href="#">Table</a>
              </li>
            </ul>


            <div className="nav__buttons d-flex gap-3 ms-auto">
              <button type="button" className="btn btn-light">Try for FREE</button>
              <a href="/login" className="btn btn-outline-light text-white">
                login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;




