import { useState } from "react";
import { useSound } from "../../context/ApiProvider";
import { useAuth } from "../../hooks/auth";
import { useOrderMutation } from "../../redux/features/events/events";
import BetSlip from "./BetSlip";
import Boxes from "./Boxes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { generateRoundId } from "../../utils/generateRoundId";
import toast from "react-hot-toast";
import { playBetSound, playWin1Sound } from "../../utils/sound";
import { useSelector } from "react-redux";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const errorMessage = sessionStorage.getItem("errorMessage");
  const { sound } = useSound();
  const { mutate: handleAuth } = useAuth();
  const [addOrder] = useOrderMutation();
  const [minesCount, setMinesCount] = useState(1);
  const [betAmount, setBetAmount] = useState(100);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [current_multiplier, setCurrentMultiplier] = useState(0);
  // const [next_multiplier, setNextMultiplier] = useState(0);
  const [winMultiplier, setWinMultiplier] = useState(null);
  const [loadingBoxId, setLoadingBoxId] = useState(null);
  const initialBoxData = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    win: false,
    roundEnd: false,
    isOpacityFull: false,
  }));
  const [boxData, setBoxData] = useState(initialBoxData);
  const isAtLeastOneBoxWin = boxData.some((box) => box.win);
  const activeBoxCount = boxData.filter((box) => box.win).length;

  const handleChangeBetAmount = (type) => {
    if (type === "minus") {
      if (betAmount > 50) {
        setBetAmount((prev) => prev / 2);
      }
    }
    if (type === "plus") {
      if (betAmount < 10000) {
        setBetAmount((prev) => prev * 2);
      }
    }
  };

  const handleStartGame = async () => {
    if (betAmount) {
      if (sound) {
        playBetSound();
      }
      setWinMultiplier(null);
      setBoxData(initialBoxData);
      setSelectedBoxes([]);
      const round_id = generateRoundId();
      sessionStorage.removeItem("round_id");
      sessionStorage.setItem("round_id", round_id);
      const payload = [
        {
          eventId: 20002,
          eventName: "Mines",
          isback: 0,
          stake: betAmount,
          type: "bet",
          mines_count: minesCount,
          round_id,
        },
      ];
      const res = await addOrder(payload).unwrap();
      if (res?.success) {
        const multiplier = Number(res?.current_multiplier) * betAmount;
        setCurrentMultiplier(multiplier.toFixed(2));
        // setNextMultiplier(res?.next_multiplier);
        handleAuth(token);
        setIsStartGame(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        setIsStartGame(false);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  const handleCashOut = async () => {
    const round_id = sessionStorage.getItem("round_id");
    const payload = [
      {
        round_id: Number(round_id),
        type: "cashout",
        box_count: activeBoxCount,
        eventId: 20002,
        selected_tiles: selectedBoxes,
      },
    ];

    const res = await addOrder(payload).unwrap();

    if (res?.success) {
      if (sound) {
        // playCashOutSound();
      }
      setWinMultiplier(res?.win_multiplier);
      handleAuth(token);
      const findBoxAndChange = boxData?.map((boxObj, i) => ({
        ...boxObj,
        win: res?.all?.[i] === 1 ? true : false,
        mine: res?.all?.[i] === 0 ? true : false,
        roundEnd: true,
      }));
      setBoxData(findBoxAndChange);
      setIsStartGame(false);
      setShowWinModal(true);
      setTimeout(() => {
        if (sound) {
          playWin1Sound();
        }
      }, 500);

      setTimeout(() => {
        setShowWinModal(false);
      }, 2000);

      setTimeout(() => {
        setBoxData(initialBoxData);
      }, 2500);
    }
  };

  return token ? (
    <div id="svelte">
      <div data-layout className="wrap svelte-1f4qsqk">
        <div data-layout className="main-content svelte-1f4qsqk">
          <Navbar />
          <div
            className="scrollable scrollY svelte-1f4qsqk mobile"
            id="scrollable"
            style={{ paddingTop: "60px" }}
          >
            <div>
              <div
                className="content-wrapper svelte-1npntmb fullpage"
                style={{ "-width": "100%" }}
              >
                <div className="page-content" id="main-content">
                  <div
                    className="content-wrapper svelte-1npntmb fullpage"
                    style={{ "-width": "100%" }}
                  >
                    <div className="page-content" id="main-content">
                      <div
                        style={{ visibility: "hidden" }}
                        className="parent no-padding svelte-bz5w9d reset mobile"
                      >
                        <div className="ctainer no-height svelte-bz5w9d reset">
                          <div className="sizer svelte-bz5w9d" />
                        </div>
                      </div>
                      <div className="parent svelte-bz5w9d reset mobile">
                        <div className="ctainer svelte-bz5w9d reset">
                          <div className="layout-spacing variant-normal svelte-1ld5vm0 reset">
                            <div className="game-layout svelte-a2va21">
                              <div
                                className="content-wrapper svelte-1npntmb fullpage"
                                style={{ "-width": "100%" }}
                              >
                                <div className="page-content" id="main-content">
                                  <div className="parent svelte-13dlaow">
                                    <div className="ctainer svelte-13dlaow">
                                      <div className="layout-spacing variant-normal svelte-1ld5vm0">
                                        <div
                                          className="game-wrapper svelte-a2va21 responsive"
                                          data-testid="game-active"
                                        >
                                          <div
                                            data-testid="game-frame"
                                            className="game-frame scrollY svelte-1ckre0r"
                                          >
                                            <div className="content svelte-1ckre0r stacked">
                                              <BetSlip
                                                boxData={boxData}
                                                current_multiplier={
                                                  current_multiplier
                                                }
                                                activeBoxCount={activeBoxCount}
                                                setMinesCount={setMinesCount}
                                                minesCount={minesCount}
                                                betAmount={betAmount}
                                                handleCashOut={handleCashOut}
                                                handleChangeBetAmount={
                                                  handleChangeBetAmount
                                                }
                                                handleStartGame={
                                                  handleStartGame
                                                }
                                                isAtLeastOneBoxWin={
                                                  isAtLeastOneBoxWin
                                                }
                                                isStartGame={isStartGame}
                                                setBetAmount={setBetAmount}
                                                addOrder={addOrder}
                                                selectedBoxes={selectedBoxes}
                                                setBoxData={setBoxData}
                                                setCurrentMultiplier={
                                                  setCurrentMultiplier
                                                }
                                                setIsStartGame={setIsStartGame}
                                                setLoadingBoxId={
                                                  setLoadingBoxId
                                                }
                                                setSelectedBoxes={
                                                  setSelectedBoxes
                                                }
                                              />
                                              <Boxes
                                                // setNextMultiplier={
                                                //   setNextMultiplier
                                                // }
                                                winMultiplier={winMultiplier}
                                                current_multiplier={
                                                  current_multiplier
                                                }
                                                setCurrentMultiplier={
                                                  setCurrentMultiplier
                                                }
                                                setSelectedBoxes={
                                                  setSelectedBoxes
                                                }
                                                selectedBoxes={selectedBoxes}
                                                addOrder={addOrder}
                                                activeBoxCount={activeBoxCount}
                                                betAmount={betAmount}
                                                isStartGame={isStartGame}
                                                boxData={boxData}
                                                setBoxData={setBoxData}
                                                setIsStartGame={setIsStartGame}
                                                showWinModal={showWinModal}
                                                loadingBoxId={loadingBoxId}
                                                setLoadingBoxId={
                                                  setLoadingBoxId
                                                }
                                              />
                                            </div>
                                            <Footer />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="error-container">
      <div className="alert alert-danger text-center m-0 " role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
