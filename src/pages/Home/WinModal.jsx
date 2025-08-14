const WinModal = ({ winMultiplier, current_multiplier }) => {
  return (
    <div
      className="game-result-wrap win  svelte-7vsiyq"
      style={{
        "-duration": "300ms",
        "-modalWidth": "150px",
        "-modalHeight": "132px",
        "-winModalHeadingColor": "#B1BAD3",
        zIndex: "65 !important",
      }}
    >
      <div className="game-result-content svelte-7vsiyq">
        <span
          className="number-multiplier svelte-7vsiyq"
          style={{ "-truncateMaxWidth": "118px" }}
        >
          <span
            className="weight-bold line-height-default align-left size-default text-size-default  variant-subtle  with-icon-space   svelte-1f6lug3"
            style={{}}
          >
            {winMultiplier}×
          </span>
        </span>
        <div className="divider svelte-7vsiyq" />
        <span className="payout-result win svelte-7vsiyq">
          <div className="currency svelte-13xyujb" role="presentation">
            <span
              className="content svelte-13xyujb"
              style={{ maxWidth: "98px" }}
            >
              <span
                className="weight-bold line-height-default align-center size-md text-size-md  variant-subtle numeric with-icon-space is-truncate  svelte-1f6lug3"
                style={{ fontSize: "16px", lineHeight: "120%" }}
              >
                {current_multiplier}
              </span>
            </span>

            <span
              className="weight-normal line-height-default align-left size-md text-size-md  variant-subtle   is-truncate  svelte-1f6lug3"
              title="btc"
              style={{ maxWidth: "98px" }}
            >
              <svg
                fill="none"
                viewBox="0 0 96 96"
                className="svg-icon "
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
        </span>
      </div>
    </div>
  );
};

export default WinModal;
