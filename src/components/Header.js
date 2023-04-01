import Search from "../modules/data/Search";

const Header = () => {

    return <div className="header">
        <a href="/">
            <img src="/logo192.png" alt="TV maze logo" className="logo"></img>
            <h2>TV Shows</h2>
        </a>
        <Search />
        {/* <a href="/search" className="back-button"> */}
        {/* <img src="/search.png" alt="Search icon" className="search"></img> */}
        {/* </a> */}
    </div>
}

export default Header;