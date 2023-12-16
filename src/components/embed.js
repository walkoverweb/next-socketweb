const Embed = () => {
  return (
    <>
      <div className="embed container d-flex align-items-center">
        <div className="embed__hero h-100 d-flex w-100">
          <div className="embed__hero__cont col-8  d-flex flex-column gap-5 justify-content-center">
            <div className="embed-hero-cont__heading">
              <h1>The most advance</h1>
              <h1>
                <span className="tagnile-automation px-2 br-1">automation</span>{" "}
                tool ever built
              </h1>
            </div>
            <h3 className="embed-hero-cont__text">
              Connect 100+ apps or webhook to collect data, drag-and-drop
              functionality or write custom code using AI
            </h3>
            <div className="embed-hero-cont__btn d-flex align-items-center gap-3">
              <button className="btn btn-light">Try for FREE</button>
              <a className="text-link">Compare with other tools</a>
            </div>
          </div>
          <div className="embed__hero__img ">
            <img className="hero-img" src="./img/embed/herol-img.svg"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Embed;
