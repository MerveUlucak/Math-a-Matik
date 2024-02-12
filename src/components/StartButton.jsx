export default function StartButton({ clickHandler, gameStarted }) {
  return (
    <button
      className={`start-button ${gameStarted ? 'hidden' : null}`}
      type="button"
      onClick={clickHandler}
    >
      <span>Başla</span>
    </button>
  )
}
