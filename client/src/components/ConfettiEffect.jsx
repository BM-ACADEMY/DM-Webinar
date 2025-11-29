import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export default function ConfettiEffect() {
  const { width, height } = useWindowSize();
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade-out smoothly
    const fadeTimer = setTimeout(() => setFade(true), 3000);

    // Fully stop after fade animation ends
    const stopTimer = setTimeout(() => setShow(false), 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        opacity: fade ? 0 : 1,
        transition: "opacity 0.9s ease-out", // smoothe nr & longer fade
        pointerEvents: "none",
      }}
    >
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
        gravity={0.25} // smoother fall
        wind={0.002}  // slight horizontal movement for realism
      />
    </div>
  );
}
