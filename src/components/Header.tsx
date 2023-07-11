import { Link } from "react-router-dom";

const links = [
    { path: "/", text: "Home" },
    { path: "/todo", text: "Todo" },
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
