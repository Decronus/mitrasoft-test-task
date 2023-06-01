import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";

const About = () => {
    return (
        <div className="about-page">
            <h1 className="h1-title">Обо мне</h1>
            <p>
                Привет! Я Алексей, frontend-разработчик.
                <br /> У меня высшее образование. Также я закончил курсы переподготовки по направлению
                «Веб-разработчик».
                <br /> Свободно владею React, Vue, JS, HTML/CSS, имею опыт веб-разработки и знание инструментов и
                процессов, необходимых для создания качественных веб-приложений.
            </p>

            <hr />

            <h3>Мой стек:</h3>
            <ul>
                <li>React / Redux / RTK / React Router / Styled Components</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML / CSS / SASS</li>
                <li>Git</li>
            </ul>

            <h3>Дополнительные навыки:</h3>
            <ul>
                <li>Node, Express, Nest</li>
                <li>MongoDB</li>
                <li>Websockets</li>
                <li>Antdesign</li>
                <li>Figma</li>
            </ul>

            <Link to="https://github.com/Decronus" target="_blank">
                <Button type="primary" style={{ marginBottom: "30px" }}>
                    Посмотреть профиль на GitHub
                </Button>
            </Link>
            <p>
                Благодаря врожденному вниманию к деталям и умеренному перфекционизму пишу аккуратный и оптимизированный
                код, который легко читать и поддерживать. В прошлом веб-дизайнер, поэтому мои приложения не только
                быстрые и надежные, но также имеют приятный интерфейс и просты в использовании.{" "}
                <strong>Уверен, что справлюсь с любыми задачами в своей специализации.</strong>
            </p>

            <hr />

            <p>Буду рад приглашению на собеседование.</p>
            <h5>Контакты для связи</h5>
            <ul>
                <li>al.zotin@mail.ru</li>
                <li>Telegram @A_Zotin</li>
            </ul>
        </div>
    );
};

export default About;
