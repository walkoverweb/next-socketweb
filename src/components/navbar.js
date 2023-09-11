import Image from "next/image";
const Navbar = () => {
    return (
        <>
        <div className="container d-flex col-12 align-items-center justify-content-between my-3">
            <img src="/img/mainlogo.svg" alt="Via-Socket-logo"/>
            <div className="navmenu">
                <ul className="d-flex gap-4">
                    <li><a href="#" className="tabitems-nav">Embed</a></li>
                    <li><a href="#" className="tabitems-nav">Table</a></li>
                    <li><a href="#" className="tabitems-nav">Flow</a></li>
                </ul>
            </div>
        </div>
        
        </>
    )
};
export default Navbar;