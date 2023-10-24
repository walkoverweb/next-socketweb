const Embed = () => {
  return (
    <>
      <div className="container embed">
        <div className="embed-hero col-12 col-xxl-7 col-xl-8 col-lg-10   d-flex flex-column  justify-content-end">
          <h4 className="tag-title">EMBED</h4>
          <h1>
            Unleash Powerful Automation Add 100+ Tools Directly in YourApp!
          </h1>
          <h3>
            Let your customers run automation without leaving your platform
          </h3>
          <div className="d-flex gap-4 align-items-center my-3">
            <a href="https://calendly.com/rpaliwal71/15-mins">
              <button className="btn btn-light">Schedule a Meet</button>
            </a>
            <a href="https://viasocket.com/faq">
              <button className="btn btn-outline-light">Learn More</button>
            </a>
          </div>
        </div>
        <div className="embed-features d-grid gap-5">
          <span className="embed-features__heading head-sm ">How it works</span>
          <div className="embed-features__features d-flex gap-5">
            <div className="feature p-4 w-100 d-flex flex-column gap-3">
              <div className="feature__img d-flex align-items-center justify-content-center">
                <img src="./img/featureimgone.svg" />
              </div>
              <div className="feature__content d-grid gap-1">
                <h4 className="feature__content__heading head-base">
                  Implement out code
                </h4>
                <p className="feature__heading__body body-base t-lite">
                  Set up triggers for app events or specific times to fetch data
                  across your app stack
                </p>
              </div>
            </div>
            <div className="feature p-4 w-100 d-flex flex-column gap-3">
              <div className="feature__img d-flex align-items-center justify-content-center">
                <img src="./img/featureimgtwo.svg" />
              </div>
              <div className="feature__content d-grid gap-1">
                <h4 className="feature__content__heading head-base">
                Style it to match your product’s branding
                </h4>
                <p className="feature__heading__body body-base t-lite">
                Override our design system styles without forking the codebase
                </p>
              </div>
            </div>
            <div className="feature p-4 w-100 d-flex flex-column gap-3">
              <div className="feature__img d-flex align-items-center justify-content-center">
                <img src="./img/featureimgthree.svg" />
              </div>
              <div className="feature__content d-grid gap-1">
                <h4 className="feature__content__heading head-base">
                Allow users to create automated workflows
                </h4>
                <p className="feature__heading__body body-base t-lite">
                User management + separate user data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Embed;
