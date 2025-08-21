import { useSelector } from "react-redux";
import { Settings } from "../../api";

const Navbar = () => {
  const { balance, token } = useSelector((state) => state.auth);

  const handleOpenLobby = () => {
    const url = `${Settings.lobby}/${token}`;
    window.location.href = url;
  };

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
                    <div
                      onClick={handleOpenLobby}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        padding: "6px 15px",
                        fontSize: "12px",
                        fontWeight: 600,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "gray",
                        borderRadius: "9999px",
                        cursor: "pointer",
                        width: "fit-content",
                        color: "white",
                      }}
                    >
                      <svg
                        style={{ width: "1rem", height: "1rem" }}
                        width={25}
                        height={24}
                        viewBox="0 0 139 127"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                          fill="#929292"
                        />
                        <path
                          d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
                          fill="#929292"
                        />
                        <path
                          d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
                          fill="#929292"
                        />
                        <path
                          d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
                          fill="#929292"
                        />
                        <path
                          d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
                          fill="#929292"
                        />
                        <path
                          d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
                          fill="currentColor"
                        />
                        <path
                          d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
                          fill="#929292"
                        />
                        <path
                          d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
                          fill="#929292"
                        />
                        <path
                          d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
                          fill="currentColor"
                        />
                        <path
                          d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
                          fill="currentColor"
                        />
                        <path
                          d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                          fill="url(#paint0_linear_693_22)"
                        />
                        <path
                          d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
                          fill="currentColor"
                        />
                        <path
                          d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
                          fill="currentColor"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_693_22"
                            x1="-373.769"
                            y1="63.3372"
                            x2="314.773"
                            y2="63.3372"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="currentColor" />
                            <stop offset="0.5594" stopColor="currentColor" />
                            <stop offset={1} stopColor="currentColor" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span style={{ color: "white" }}>Lobby</span>
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
