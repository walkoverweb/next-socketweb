const Embed = () => {
  return (
    <>
      <div className="embed w-100 ">
        <div className="embed__hero container h-100 w-100 px-0 pt-5">
          <div className="embed__hero__cont  ">
            <div className="embed-hero-cont__heading my-2 ">
              <h1>The most advance <span className="d-inline-block position-relative tagnile-automation px-2 rounded-2">automation</span> tool ever built
              </h1>
            </div>
            {/* <h3 className="embed-hero-cont__text">
              Connect 100+ apps or webhook to collect data, drag-and-drop
              functionality or write custom code using AI
            </h3> */}
            <div className="embed-hero-cont__btn d-flex align-items-center gap-3 my-3">
              
              <a className="btn btn-light" href="/login" role="button">Try for FREE</a>
              {/* <a className="btn btn-outline-light">Compare with other tools</a> */}
            </div>
          </div>
          <div className="embed__hero__img my-5">
            <img className="img-fluid rounded-1" width="100%" src="/img/main.svg" />
          </div>
        </div>
      </div>

    </>
  );
};
export default Embed;
