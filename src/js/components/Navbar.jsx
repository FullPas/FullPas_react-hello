import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Mi página con React</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="No funcional" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">X</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar;