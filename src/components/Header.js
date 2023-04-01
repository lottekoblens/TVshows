import Search from "../modules/data/Search";

const Header = () => {

    return <div className="header">
        <a href="/">
            <img src="/logo192.png" alt="TV maze logo" className="logo"></img>
            <h2>Showflix</h2>
        </a>
        <Search />
    </div>
}

export default Header;