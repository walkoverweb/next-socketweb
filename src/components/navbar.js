import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-cont navbar-expand-lg w-100">
        <div className=" nav container d-flex align-items-center my-3">
          <div>
            <a href="#">
              <img className="nav__logo navbar-brand" src="/img/mainlogo.svg" alt="Via-Socket-logo" />
            </a>
          </div>
          {/* <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon menu"></span> 
            <MdMenu className="fs-1 text-white" />
          </button> */}

          {/* <div className="navbar-collapse nav__menu" id="navbarSupportedContent">

            <ul className="navbar-nav  gap- ms-auto d-flex">
              <li className="nav-item">
                <a className="nav-link active tabitems-nav" href="#">Embed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tabitems-nav" href="#">Flow</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tabitems-nav" href="#">Table</a>
              </li>
            </ul> 
            </div>
            */}


            <div className="nav__buttons d-flex gap-3 ms-auto">
            <a className="btn btn-light" href="/login" role="button">Try for FREE</a>
              <a className="btn btn-outline-light" href="/login" role="button">login</a>
            </div>
          </div>

          
          
        
      </nav>
    </>
  );
};
export default Navbar;




