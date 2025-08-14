import { useSound } from "../../context/ApiProvider";
import {
  playGem1Sound,
  playGem2Sound,
  playGem3Sound,
  playMineSound,
} from "../../utils/sound";

const BetSlip = ({
  betAmount,
  setBetAmount,
  handleChangeBetAmount,
  isStartGame,
  handleStartGame,
  isAtLeastOneBoxWin,
  handleCashOut,
  setMinesCount,
  minesCount,
  activeBoxCount,
  current_multiplier,
  boxData,
  addOrder,
  selectedBoxes,
  setSelectedBoxes,
  setLoadingBoxId,
  setBoxData,
  setIsStartGame,
  setCurrentMultiplier,
}) => {
  const { sound } = useSound();
  const pickRandomBox = async () => {
    const filterNotWinBoxes = boxData?.filter((box) => box?.win === false);
    const idArray = filterNotWinBoxes?.map((box) => box?.id);
    if (!idArray || idArray.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * idArray.length);
    const randomId = idArray[randomIndex];

    if (isStartGame) {
      if (sound) {
        // playTileClickSound();
      }
      setLoadingBoxId(randomId);

      setTimeout(async () => {
        const round_id = sessionStorage.getItem("round_id");
        const payload = [
          {
            round_id: Number(round_id),
            type: "select_box",
            box_id: randomId,
            box_count: activeBoxCount,
            eventId: 20002,
            selected_tiles: [...selectedBoxes, randomId],
          },
        ];
        const res = await addOrder(payload).unwrap();

        if (res.success) {
          setSelectedBoxes((prev) => [...prev, randomId]);
          setLoadingBoxId(null);
          if (res?.gem === 0) {
            if (sound) {
              playMineSound();
            }
            const updatedBoxes = boxData?.map((boxObj, i) => ({
              ...boxObj,
              roundEnd: true,
              mine: res?.all?.[i] === 0 ? true : false,
              isOpacityFull:
                res.gem === 0 && randomId === boxObj.id
                  ? true
                  : boxObj?.isOpacityFull,
              win: res?.all?.[i] === 0 ? false : true,
            }));
            setBoxData(updatedBoxes);
            setIsStartGame(false);
          } else {
            const multiplier = Number(res?.current_multiplier) * betAmount;
            setCurrentMultiplier(multiplier.toFixed(2));
            // setNextMultiplier(res?.next_multiplier);
            if (sound) {
              if (randomId > 0 && randomId < 6) {
                playGem1Sound();
              } else if (randomId > 5 && randomId < 11) {
                playGem2Sound();
              } else {
                playGem3Sound();
              }
            }
            const updatedBoxes = boxData?.map((boxObj) =>
              randomId === boxObj.id
                ? {
                    ...boxObj,
                    win: true,
                    isOpacityFull: true,
                  }
                : boxObj
            );
            setBoxData(updatedBoxes);
          }
        }
      }, 1000);
    }
  };
  return (
    <div
      className="game-sidebar scrollable scrollY svelte-1ggd2x4 stacked"
      style={{
        "-draggableMaxHeight": "279px",
        "-gameContentHeight": "410.0625px",
      }}
    >
      <label className="svelte-1ww0eyq stacked">
        <div className="input-wrap svelte-1rkffv3">
          <div className="input-content svelte-1rkffv3">
            <div className="after-icon svelte-1rkffv3">
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
            </div>
            <input
              onChange={(e) => setBetAmount(Number(e.target.value))}
              autoComplete="on"
              className="input spacing-expanded svelte-1rkffv3"
              type="number"
              data-testid="input-game-amount"
              data-bet-amount-active-currency="btc"
              step="1e-8"
              value={betAmount}
            />
          </div>
          <div className="input-button-wrap svelte-1rkffv3">
            <button
              onClick={() => handleChangeBetAmount("minus")}
              type="button"
              tabIndex={0}
              className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white hover:bg-grey-300 hover:text-white focus-visible:outline-white text-sm leading-none py-[0.8125rem] px-[1rem] shadow-none"
              data-testid="amount-halve"
              data-button-root
            >
              ½
            </button>
            <button
              onClick={() => handleChangeBetAmount("plus")}
              type="button"
              tabIndex={0}
              className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white hover:bg-grey-300 hover:text-white focus-visible:outline-white text-sm leading-none py-[0.8125rem] px-[1rem] shadow-none"
              data-testid="amount-double"
              data-button-root
            >
              2×
            </button>
          </div>
        </div>
        <span className="label-content svelte-wz0rjo full-width">
          <div className="label-left-wrapper svelte-1rkffv3">
            <span slot="label" className="flex items-center gap-1">
              Bet Amount
            </span>
          </div>
          <div className="currency-conversion svelte-1f8ji02">
            <div className="svelte-1f8ji02">{betAmount}</div>
          </div>
        </span>
      </label>
      {/* If bet placed */}
      {isStartGame && (
        <div className="flex flex-col space-y-3">
          <div className="grid-row svelte-ggem1w">
            <label className="svelte-1ww0eyq stacked">
              <div className="input-wrap svelte-1rkffv3">
                <div className="input-content svelte-1rkffv3">
                  <input
                    value={minesCount}
                    autoComplete="on"
                    readOnly
                    className="input spacing-expanded svelte-1rkffv3"
                    type="text"
                  />
                </div>
              </div>
              <span className="label-content svelte-wz0rjo full-width">
                <div className="label-left-wrapper svelte-1rkffv3">
                  <span slot="label">Mines</span>
                </div>
              </span>
            </label>
            <label className="svelte-1ww0eyq stacked">
              <div className="input-wrap svelte-1rkffv3">
                <div className="input-content svelte-1rkffv3">
                  <input
                    value={25 - minesCount - activeBoxCount}
                    autoComplete="on"
                    readOnly
                    className="input spacing-expanded svelte-1rkffv3"
                    type="text"
                  />
                </div>
              </div>
              <span className="label-content svelte-wz0rjo full-width">
                <div className="label-left-wrapper svelte-1rkffv3">
                  <span slot="label">Gems</span>
                </div>
              </span>
            </label>
          </div>
          <div className="profit svelte-1yq3e31 w-full">
            <label className="svelte-1ww0eyq stacked w-full">
              <div className="input-wrap svelte-1rkffv3">
                <div className="input-content svelte-1rkffv3">
                  <div className="before-icon svelte-1rkffv3" />
                  <div className="after-icon svelte-1rkffv3">
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
                  </div>
                  <input
                    autoComplete="on"
                    readOnly
                    className="input spacing-expanded svelte-1rkffv3"
                    type="text"
                    data-testid="profit-input"
                    value={current_multiplier}
                  />
                </div>
              </div>
              <div className="labels svelte-1yq3e31" slot="label-content">
                <span className="label-content svelte-wz0rjo full-width">
                  <span slot="label">Total profit (1.00×)</span>
                  <div className="right-align svelte-1yq3e31">
                    <div className="currency-conversion svelte-1f8ji02">
                      <div className="svelte-1f8ji02">$0.00</div>
                    </div>
                  </div>
                </span>
              </div>
            </label>
          </div>
          <button
            onClick={pickRandomBox}
            type="button"
            tabIndex={0}
            className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white hover:bg-grey-300 hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
            data-testid="random-tile"
            data-test-action-enabled="true"
            data-button-root
          >
            <div data-loader-content="true" className="contents">
              <span>Pick random tile</span>
            </div>
          </button>
          <button
            onClick={handleCashOut}
            type="button"
            tabIndex={0}
            className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-green-500 text-neutral-black hover:bg-green-400 hover:text-neutral-black focus-visible:outline-white text-base leading-none shadow-md py-[1.125rem] px-[1.75rem]"
            data-testid="cashout-button"
            disabled={!isAtLeastOneBoxWin}
            data-test-action-enabled="false"
            data-button-root
          >
            <div data-loader-content="true" className="contents">
              <span>Cashout</span>
            </div>
          </button>
        </div>
      )}

      {/* If bet placed */}
      {!isStartGame && (
        <>
          <button
            onClick={handleStartGame}
            type="button"
            tabIndex={0}
            className="inline-flex relative items-center gap-2 justify-center rounded-(--ds-radius-md,0.25rem) font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-green-500 text-neutral-black hover:bg-green-400 hover:text-neutral-black focus-visible:outline-white text-base leading-none shadow-md py-[1.125rem] px-[1.75rem]"
            data-testid="bet-button"
            data-analytics="bet-button"
            data-test-action-enabled="true"
            data-button-root
          >
            <div data-loader-content="true" className="contents">
              <span>Bet</span>
            </div>
          </button>
          <label className="svelte-1ww0eyq stacked">
            <div className="select-wrap svelte-1g7srmb">
              <div className="select-content svelte-1g7srmb">
                <select
                  onChange={(e) => setMinesCount(Number(e.target.value))}
                  className="select spacing-expanded svelte-1g7srmb"
                  data-testid="mines-count"
                  name="mines-count"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                </select>
                <div className="dropdown-icon-wrap svelte-1g7srmb">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    className="svg-icon"
                    style={{}}
                  >
                    <title />
                    <path d="M32.274 49.762 9.204 26.69l6.928-6.93 16.145 16.145L48.42 19.762l6.93 6.929-23.072 23.07z" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="label-content svelte-wz0rjo full-width">
              Mines
            </span>
          </label>
        </>
      )}
    </div>
  );
};

export default BetSlip;
