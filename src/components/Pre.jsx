export default function Preloader({ load }) {
  return (
    <div className={`preloader ${load ? "show" : "hide"}`}>
      <div className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}
