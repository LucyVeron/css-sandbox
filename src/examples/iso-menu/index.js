import './iso-menu.scss';

function IsoMenu() {
    return (
        <ul className="isomenu">
            <li style={{ "--i": 6 }}><a href="/">Home</a></li>
            <li style={{ "--i": 5 }}><a href="/">About</a></li>
            <li style={{ "--i": 4 }}><a href="/">Services</a></li>
            <li style={{ "--i": 3 }}><a href="/">Portfolio</a></li>
            <li style={{ "--i": 2 }}><a href="/">Our Team</a></li>
            <li style={{ "--i": 1 }}><a href="/">Contact</a></li>
        </ul>
    );
}
export default IsoMenu;