import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../css/header.css"

const Header = ({ siteTitle }) => (
  <header className="sidebar">
	<p>햄버거 메뉴 참고: https://alikong.tistory.com/34</p>
	<div className="header-wrapper">
		<div className="hambugerMenu">
			<a class="menu-trigger" href="#">
			    <span></span>
				<span></span>
			</a>
		</div>
		<navigation>
			<ul className="nav-list">
				<li className="nav-items">
					<Link to="artworks">
						Artworks
					</Link>
				</li>
				<li className="nav-items">
					<Link to="/">
						Exhibitions
					</Link>
				</li>
				<li className="nav-items">
					<Link to="/">
						About
					</Link>
				</li>
			</ul>	
		</navigation>
		<Link to="/" className="site-title">
			  <h1>{siteTitle}</h1>
		</Link>
	</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
