const Login = () => {
  return (
    <>
      <div className="login d-flex gap-sm-0 gap-4 flex-column flex-sm-row-reverse">
       
        <div className="login__main  col-12 col-sm-6 col-md-7 col-lg-8 col-xl9 p-2 p-sm-4 p-xl-5 ">
          <div className="login__main__loginbtn pt-4 pt-sm-0">
          <img src="/img/mainlogo-dark.svg" alt="Via-Socket-logo" className="mobile-main-logo mb-3 d-block d-sm-none" />
            <h2 className="t-dark">Welcome Back!</h2>
            <button className="google-auth-btn   px-3 py-2  d-flex align-items-center gap-2">
              <img src="/img/google-logo.svg" />
              Login WIth Google
            </button>
          </div>
          <div className="login__main__newac mt-5">
            <h2 className="t-dark">OR</h2>
            <a href="/signup" className="text-link t-dark">
              <p className="text-link">Create a new Account</p>
            </a>
          </div>
        </div>
        <div className="login__details  col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 p-2 p-sm-4 p-xl-5">
          <img src="/img/mainlogo.svg" alt="Via-Socket-logo" className="d-none d-sm-block" />
          <h4 className="mt-4">Unlock the Power of Seamless Backend Management</h4>
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
