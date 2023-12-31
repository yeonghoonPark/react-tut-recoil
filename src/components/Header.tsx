import { Link } from "react-router-dom";

const links = [
  { path: "/", text: "Home" },
  { path: "/todolist", text: "Todo" },
  { path: "/test", text: "Test" },
  { path: "/temp", text: "Temp" },
  { path: "/names", text: "Names" },
  { path: "atomfamilypage", text: "AtomFamilyPage" },
  { path: "selectorfamilypage", text: "SelectorFamilyPage" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ path, text }) => (
            <li key={path}>
              <Link to={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
