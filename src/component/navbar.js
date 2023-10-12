import "./navbar.css";
export default function Navbar(){
    return(
        <div className="nav">
            <h1 className="nav-brand">elephant</h1>
            <a href="/" className="nav-item">HOME</a>
            <a href="/about" className="nav-item">ABOUT</a>
            <a href="/contact" className="nav-item">CONTACT</a>
        </div>
    );
}