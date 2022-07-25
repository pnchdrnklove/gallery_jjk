import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as styles from "../css/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.sidebar}>
	<p>햄버거 메뉴 참고: https://alikong.tistory.com/34</p>
	<div className={styles.headerWrapper}>
		<div className={styles.hamburgerMenu}>
			<a className={styles.menuTrigger} href="/">
				<span></span>
				<span></span>
			</a>
		</div>
		<Link to="/" className={styles.siteTitle}>
			  <h1>{siteTitle}</h1>
		</Link>
		<navigation>
			<ul className={styles.navList}>
				<li className={styles.navItems}>
					<Link to="/artworks" activeClassName={styles.active}>
						Artworks
					</Link>
				</li>
				<li className={styles.navItems}>
					<Link to="/exhibitions" activeClassName={styles.active}>
						Exhibitions
					</Link>
				</li>
				<li className={styles.navItems}>
					<Link to="/about" activeClassName={styles.active}>
						About
					</Link>
				</li>
			</ul>	
		</navigation>
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
