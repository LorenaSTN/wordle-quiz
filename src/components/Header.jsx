import "../scss/Header.scss";
import { range } from "./services/range";

function Header() {
  const title = "WORDLE";

  return (
    <div className="header">
      {range(title.length).map((i) => (
        <h1 className="header-title" key={i}>{title[i]}</h1>
      ))}
    </div>
  );
}

export default Header;
