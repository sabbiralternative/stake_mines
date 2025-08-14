import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";

const Navbar = () => {
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);
  return (
    <div
      data-nosnippet
      data-layout
      style={{ zIndex: 100 }}
      className="navigation svelte-5bcnj4 mobile"
    >
      <div
        className="group variant- svelte-wqnjon"
        style={{
          height: "100%",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="ctainer svelte-wqnjon">
          <div className="navigation-container svelte-5bcnj4 authenticated">
            <div className="stack x-flex-start y-center gap-smaller padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto svelte-olilry">
              <div className="mobile">
                <div className="image-focus svelte-1tzf20j">
                  <a
                    data-testid="home-button"
                    className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white hover:bg-transparent hover:text-white focus-visible:outline-hidden text-sm leading-none [&_svg]:text-grey-200 [&:hover>svg]:text-white !bg-transparent !text-white [&_svg]:!text-white"
                    href="/"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    data-sveltekit-noscroll="off"
                    aria-label="Home"
                  >
                    <div className="wrap normal svelte-abzx6q" data-content>
                      <svg
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 200"
                        className="svelte-md2ju7"
                      >
                        <g id="Layer_5">
                          <path
                            fill="currentColor"
                            d="M31.47,58.5c-.1-25.81,16.42-40.13,46.75-40.23,21.82-.08,25.72,14.2,25.72,19.39,0,9.94-14.06,20.48-14.06,20.48,0,0,.78,6.19,12.85,6.14,12.07-.05,23.83-8.02,23.76-27.96-.06-22.91-24.06-33.38-47.78-33.29C58.87,3.09,6.24,5.88,6.42,58.13c.18,46.41,87.76,50.5,87.83,80.21.12,32.27-36.08,40.96-48.33,40.96s-17.23-8.67-17.25-13.43c-.09-26.13,25.92-33.41,25.92-33.41,0-1.95-1.52-10.64-11.59-10.6-25.95.05-36.28,22.36-36.21,44.14.07,18.53,13.16,30.09,32.94,30.01,37.82-.14,80.46-18.59,80.3-59.56-.14-38.32-88.46-48.33-88.57-77.96Z"
                          />
                          <path
                            fill="currentColor"
                            d="M391.96,161.17c-.3-.73-1.15-.56-2.27.37-4.29,3.54-14.1,13.56-37.06,13.65-41.85.16-49.12-68.83-49.12-68.83,0,0,31.9-23.81,36.88-33.42,4.98-9.61-10.87-11.7-10.87-11.7,0,0-22.31,27.15-38.13,35.1,1.72-11.81,13.42-38.72,14.09-54.2.67-15.48-18.63-11.7-21.72-10.22,0,6.76-17.06,68.1-23.27,101.82-3.66,5.85-8.88,12.54-13.56,12.55-2.71,0-3.71-5.02-3.73-12.22,0-9.99,5.5-25.99,5.46-35.71,0-6.73-3.09-7.13-5.75-7.12-.58,0-3.77.09-4.36.09-6.83,0-4.58-5.85-10.73-5.79-18.8.07-42.75,20.59-43.79,51.57-6.35,4.2-15.23,9.5-19.77,9.52-4.76,0-5.94-4.4-5.95-8.2,0-6.68,10.8-46.37,10.8-46.37,0,0,13.76-3.53,19.77-4.69,4.54-.89,5.85-1.22,7.62-3.41s5.22-6.73,8.01-10.8c2.79-4.08.05-7.23-5.11-7.21-6.77,0-24.88,4.29-24.88,4.29,0,0,8.7-37.5,8.69-38.26s-.98-1.16-2.45-1.15c-3.3,0-9.18,1.77-12.94,3.12-5.76,2.06-10.45,9.12-11.4,12.4s-7.46,29.02-7.46,29.02c0,0-34.88,12.04-39.65,13.85-.29.1-.49.37-.49.68s3.99,15.6,12.17,15.54c5.85,0,23.04-7.04,23.04-7.04,0,0-8.83,35.1-8.78,46.81,0,7.51,3.54,16.3,18.21,16.26,13.65,0,25.6-7.05,32.29-11.96,3.66,9.25,12.3,11.79,18.2,11.77,13.22,0,23.4-10.55,24.71-11.96,1.72,4.06,5.76,11.85,15.01,11.82,5.23,0,10.64-5.85,14.63-11.53-.08,1.18-.06,2.36.05,3.54,1.6,14.55,23.2,6,24.38,3.97.73-10.52.27-32.03,4.48-45.31,5.58,45.3,26.74,75.78,64.78,75.64,21.27-.08,32.18-6.19,36.69-11.23,3.69-4.08,4.94-9.81,3.29-15.06ZM209.45,146.23c-18.26.07,5.59-47.27,21.17-47.33.02,6.1-.32,47.26-21.17,47.33Z"
                          />
                          <path
                            fill="currentColor"
                            d="M357.73,160.74c16.49-.06,29.25-10.91,31.59-14.44,3.02-4.59-3.51-11.53-5.59-11.41-5.21,4.98-10.65,11.01-22.87,11.05-14.38.06-11.13-15.77-11.13-15.77,0,0,27.68,3.58,38.81-16.32,3.56-6.37,3.71-15.17,2.27-18.97s-9.49-10.81-22.3-9.75c-15.74,1.33-35.57,17.74-39.93,37.45-3.5,15.86,3.12,38.26,29.14,38.17ZM375.28,94.33c2.59-.09,2.36,4.18,1.67,8.65-.98,6.06-9.29,21.45-25.17,20.85,1.1-8.96,12.91-29.15,23.53-29.5h-.03Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                className="balance-toggle svelte-17vz5au"
                data-testid="balance-toggle"
              >
                <div className="coin-toggle">
                  <div className="wrapper currency-view-compact svelte-rpdjhf">
                    <div className="dropdown svelte-11iwinh">
                      <button
                        type="button"
                        tabIndex={0}
                        className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-700 text-white hover:bg-grey-900 hover:text-white focus-visible:outline-white text-sm leading-none [&_svg]:text-grey-200 [&:hover>svg]:text-white py-[0.8125rem] px-[1rem] rounded-(--ds-radius-md,0.25rem) max-w-full rounded-r-none"
                        aria-label="Open Dropdown"
                        data-testid="coin-toggle"
                        data-active-currency="btc"
                        data-button-root
                      >
                        <div className="wrap truncate svelte-lnje3m">
                          <div
                            className="currency svelte-13xyujb"
                            role="presentation"
                          >
                            <span className="content svelte-13xyujb" style={{}}>
                              <span
                                style={{ maxWidth: "16ch" }}
                                className="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted numeric with-icon-space is-truncate svelte-1f6lug3"
                              >
                                {balance}
                              </span>
                            </span>
                            <span
                              className="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate svelte-1f6lug3"
                              title="btc"
                              style={{ maxWidth: "16ch" }}
                            >
                              <svg
                                fill="none"
                                viewBox="0 0 96 96"
                                className="svg-icon"
                                style={{}}
                              >
                                <title />
                                <path
                                  fill="#F7931A"
                                  d="M95.892 48.106C95.892 74.558 74.448 96 47.997 96S.102 74.558.102 48.106 21.545.21 47.997.21c26.451 0 47.895 21.443 47.895 47.895"
                                />
                                <path
                                  fill="#fff"
                                  d="M69.523 42.18c.93-6.27-3.84-9.644-10.38-11.894l2.115-8.505-5.16-1.29-2.1 8.28c-1.365-.345-2.76-.66-4.14-.975l2.1-8.295-5.175-1.29-2.115 8.49c-1.125-.255-2.235-.51-3.3-.78l-7.14-1.785-1.365 5.52s3.84.885 3.75.93a2.764 2.764 0 0 1 2.414 3.011l.001-.01-2.415 9.69c.213.049.394.106.568.174l-.028-.01-.54-.135-3.39 13.5a1.88 1.88 0 0 1-2.383 1.226l.013.004-3.765-.93L24.523 63l6.735 1.665 3.69.96-2.145 8.595 5.175 1.29 2.115-8.505c1.41.375 2.775.735 4.125 1.065l-2.115 8.475 5.175 1.29 2.13-8.58c8.835 1.665 15.465.99 18.255-6.99 2.25-6.42-.105-10.125-4.755-12.54 3.39-.72 5.925-2.955 6.615-7.545M57.688 58.757c-1.59 6.435-12.405 3-15.915 2.085l2.835-11.34c3.51.825 14.76 2.565 13.08 9.255m1.605-16.665c-1.5 5.85-10.5 2.865-13.38 2.145l2.58-10.32c2.91.72 12.315 2.085 10.8 8.175"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span className="dropdown-icon svelte-9n45i2">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 64 64"
                            className="svg-icon"
                            style={{ transform: "rotate(0deg)" }}
                          >
                            <title />
                            <path d="M32.274 49.762 9.204 26.69l6.928-6.93 16.145 16.145L48.42 19.762l6.93 6.929-23.072 23.07z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  tabIndex={0}
                  className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                  style={{
                    borderRadius:
                      "0 var(--ds-radius-md, var(--border-radius-base)) var(--ds-radius-md, var(--border-radius-base)) 0",
                  }}
                  data-testid="wallet"
                  data-analytics="global-navbar-wallet-button"
                  data-content
                  data-button-root
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    className="svg-icon"
                    style={{}}
                  >
                    <title />
                    <path d="M14 13.574a17.5 17.5 0 0 0 .262 2.88H10.41a5.55 5.55 0 0 0-5.512 5.108l-.007.258a5 5 0 0 0 .007.254v.012a5.627 5.627 0 0 0 5.243 5.61H56.93a5.31 5.31 0 0 1 5.3 5.308v3.191H50.517a9 9 0 0 0-.325-.008c-5.295 0-9.589 4.295-9.59 9.59 0 5.296 4.294 9.59 9.59 9.59.11 0 .217 0 .309-.004h11.73v3.188a5.313 5.313 0 0 1-5.308 5.312H6.129A6.14 6.14 0 0 1 0 57.734V20.633a7.07 7.07 0 0 1 7.059-7.07H14zm36.5 26.371H64v11.668H50.512q-.126.005-.254.004a5.84 5.84 0 0 1 0-11.68c.086 0 .17.004.242.008m.441 3.16a2.67 2.67 0 0 0-2.672 2.668 2.67 2.67 0 0 0 5.34.012v-.012a2.67 2.67 0 0 0-2.668-2.668M58 23.946H47.68l-.04.059a18.2 18.2 0 0 0 2.04-3.8H58zm-42.617-3.617a18 18 0 0 0 1.957 3.617h-6.91a1.77 1.77 0 0 1-1.77-1.77v-.19c0-.98.792-1.776 1.77-1.782h4.91zM32.5.141c7.296 0 13.21 5.915 13.21 13.21v.024c0 4.316-2.075 8.146-5.32 10.57H24.61l-.032-.023a13.2 13.2 0 0 1-5.289-10.57C19.29 6.056 25.204.14 32.5.14m22.75 16.312h-4.52a18.4 18.4 0 0 0 .27-2.887h4.25z" />
                  </svg>
                </button>
              </div>
            </div>
            <section>
              <div className="stack x-flex-end y-center gap-none padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto svelte-olilry">
                <div className="dropdown svelte-11iwinh transparent">
                  <button
                    type="button"
                    tabIndex={0}
                    className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white hover:bg-transparent hover:text-white focus-visible:outline-hidden text-sm leading-none py-[0.8125rem] px-[1rem]"
                    data-testid="user-dropdown-toggle"
                    data-analytics="global-navbar-user-icon"
                    data-content
                    aria-label="Open Dropdown"
                    data-button-root
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 64 64"
                      className="svg-icon"
                      style={{}}
                    >
                      <title />
                      <path d="M50.84 38.191A19.84 19.84 0 0 1 64 56.86V64H0v-7.14a19.84 19.84 0 0 1 13.16-18.67 26.6 26.6 0 0 0 8.645 5.778A26.6 26.6 0 0 0 32 46a26.6 26.6 0 0 0 10.195-2.031 26.6 26.6 0 0 0 8.645-5.778M32 0a19.62 19.62 0 0 1 18.137 12.117 19.632 19.632 0 0 1-21.965 26.766A19.635 19.635 0 0 1 12.746 23.46 19.63 19.63 0 0 1 32 0" />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  tabIndex={0}
                  className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white hover:bg-transparent hover:text-white focus-visible:outline-hidden text-sm leading-none p-3"
                  id="notifications-nav-button"
                  aria-label="Toggle Notifications Widget"
                  data-button-root
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    className="svg-icon"
                    style={{}}
                  >
                    <title />
                    <path d="M56 39.64V32c0-10.44-6.68-19.32-16-22.6V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v1.4C14.68 12.68 8 21.56 8 32v7.56H0V48h64v-8.44zm-40 19.6c0 2.64 2.12 4.76 4.76 4.76H43.2c2.64 0 4.76-2.12 4.76-4.76V54H16z" />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
