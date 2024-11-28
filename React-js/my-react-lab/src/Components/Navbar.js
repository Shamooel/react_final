function Navbar() {
    return (
    <nav className="navbar">
    <div className="navbar-logo">Ropa</div>
    <ul className="navbar-menu">
    <li><a href="#" className="navbar-link">Home</a></li>
                <li className="dropdown">
                <a href="#" className="navbar-link">Shop</a>
                <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Men</a></li>
                <li><a href="#" className="dropdown-item">Women</a></li>
                <li><a href="#" className="dropdown-item">Kids</a></li>
                 <li><a href="#" className="dropdown-item">Accessories</a></li>
                </ul>
                </li>
                <li><a href="#" className="navbar-link">About</a></li>
                <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Go</button>
            </div>
        </nav>
    
    );
    }
    export default Navbar;