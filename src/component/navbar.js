import "./navbar.css";
export default function Navbar(){
    return(
        <div className="nav">
            <h1 className="nav-brand">elephant</h1>
            <a className="nav-item" href="">HOME</a>
            <a className="nav-item" href="">ABOUT</a>
            <a className="nav-item" href="">CONTACT</a>
        </div>
    );
}