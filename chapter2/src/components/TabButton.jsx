export default function TabButton({ children }) {
  function hanldeClick() {
    console.log("Hello World!");
  }
  return (
    <li>
      <button onClick={hanldeClick}>{children}</button>
    </li>
  );
}
