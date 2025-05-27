import audio from "../../../public/sounds/song.mp3";
import { useSound } from "./SoundContext";

const SoundBar = () => {
  const { isPlaying, togglePlay } = useSound();

  return (
    <div
      className={`soundBars link top-1 right-14 flex items-center justify-center ${isPlaying ? "play" : ""}`}
      onClick={togglePlay}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default SoundBar;
