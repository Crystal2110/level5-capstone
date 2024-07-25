import {Link} from "react-router-dom"

function Navbar() {
      return (
            <div className="navbar">
                <Link to="/" className="link-style">
                  HOME
                </Link>
                <Link className="link-style" to="/characters">
                 CHARACTERS
                </Link>
                <Link className="link-style" to="/movies">
                 MOVIES
                </Link>
                <Link className="link-style" to="/search">
                 SEARCH BY
                </Link>               
            </div>
      )

}

export default Navbar;