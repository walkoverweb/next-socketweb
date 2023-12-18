import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const configuration = {
      referenceId: process.env.NEXT_PUBLIC_REFERENCE_ID,
      success: (data) => {
        console.log("success response", data);
      },
      failure: (error) => {
        console.log("failure reason", error);
      },
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = () => {
      const checkInitVerification = setInterval(() => {
        if (typeof initVerification === "function") {
          clearInterval(checkInitVerification);
          initVerification(configuration);
        }
      }, 100);
    };
    script.src = "https://proxy.msg91.com/assets/proxy-auth/proxy-auth.js";

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <>
      <div className="login d-flex gap-sm-0 gap-4 flex-column flex-sm-row-reverse">
        <div className="login__main  col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 p-2 p-sm-4 p-xl-5 ">
          <div className="login__main__loginbtn pt-4 pt-sm-0">
            <img
              src="/img/mainlogo.svg"
              alt="Via-Socket-logo"
              className="mobile-main-logo mb-3 d-block d-sm-none"
            />
            <h2 className="t-dark">Welcome Back!</h2>
            <div id={process.env.NEXT_PUBLIC_REFERENCE_ID} />
          </div>
          <div className="login__main__newac mt-5">
            <h2 className="t-dark">OR</h2>
            <a href="/signup" className="text-link t-dark">
              <p className="text-link">Create a new Account</p>
            </a>
          </div>
        </div>
        <div className="login__details d-flex flex-column gap-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 p-2 p-sm-4 p-xl-5">
          <img
            src="/img/mainlogo.svg"
            alt="Via-Socket-logo"
            className="d-none d-sm-block "
          />
          <h3 className="mt-4">
            Unlock the Power of Seamless Backend Management
          </h3>
          <ul className="feature-list mt-3">
            <li>Backend Management Made Simple</li>
            <li>Create Flows with Ease</li>
            <li>Craft Custom Plugins</li>
            <li>Seamless API Integration</li>
            <li>Build Powerful Functions</li>
            <li>Scalability and Performance</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Login;
