import "./style.css";
import { List } from "react-bootstrap-icons";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MenuProfile from "../menu-profile/MenuProfile";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                    <List size={40} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/")}>Список постов</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("about-me")}>Обо мне</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item style={{ pointerEvents: "none" }}>
                        <MenuProfile />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </header>
    );
};

export default Header;
