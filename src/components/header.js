import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as styles from "../css/header.module.css"

const Header = ({ siteTitle }) => {
  	const list = [
		{
			id: 'artworks',
			ko: '작품사진',
			linkKey: 'artworks',
			subMenu: [
				{
					id: 'solar long exposure',
					ko: '태양 장노출',
					linkKey: 'solar-long-exposure',
				},
				{
					id: 'ship long exposure',
					ko: '폐선 장노출',
					linkKey: 'ship-long-exposure',
				},
				{
					id: 'other long exposure',
					ko: '기타 장노출',
					linkKey: 'other-long-exposure',
				},
				{
					id: 'others',
					ko: '일반 작품',
					linkKey: 'other-artworks',
				},
			],
		},
		{
			id: 'exhibitions',
			ko: '전시',
			linkKey: 'exhibitions',
			subMenu: [
				{
					id: 'trajectory',
					ko: '태양의 궤적',
					linkKey: 'trajectory',
				},
				{
					id: 'seashore',
					ko: '갯가의 흔적',
					linkKey: 'seashore',
				},
				{
					id: 'others',
					ko: '기타 전시',
					linkKey: 'other-exhibitions',
				},
			],
		},
		{
			id: 'about',
			ko: '작가소개',
			linkKey: 'about',
		},
		{
			id: 'home',
			ko: '홈으로',
			linkKey: '',			
		},
	];
	const [scrollPosition, setScrollPosition] = React.useState(0);
	
	const hamburgerCheckRef = React.useRef();
	const headerRef = React.useRef();
	
	const onChange = (e) => {
		if (e.target.checked) {
			setScrollPosition(window.pageYOffset);
			headerRef.current.style['top'] = 0;
			document.body.classList.add('notScroll');
			document.body.style['top'] = `-${scrollPosition}px`;
		}
		else {
			document.body.classList.remove('notScroll');
			window.scrollTo(0, scrollPosition);
		}
	}
	
	const onClick = (e) => {
		if (hamburgerCheckRef.current.checked) {
			document.body.classList.remove('notScroll');
			headerRef.current.style['top'] = 0;
			document.body.style['top'] = 0;
		}
	}

	return (
		<header className={styles.sidebar} ref={headerRef}>
			<div className={styles.headerWrapper}>
				<input className={styles.hamburgerCheck} id="hamburgerCheck" type="checkbox" onChange={onChange} ref={hamburgerCheckRef} />
				<label className={styles.hamburgerIcon} id="hamburgerIcon" htmlFor="hamburgerCheck">
					<span></span>
					<span></span>
				</label>
				<Link to="/" className={styles.siteTitle}>
					  <h1>정종관 갤러리</h1>
				</Link>
				<div className={styles.navWrapper}>
					<ul className={styles.navList}>
						{list.map(items => (
							<li className={styles.navItems} key={items.ko}>
								<Link to={"/"+items.linkKey} activeClassName={styles.active} key={items.linkKey} onClick={onClick}>
									{items.ko}
								</Link>
								<ul className={styles.subMenuList}>
									{items.subMenu?.map(subMenuItems => (
										<li className={styles.subMenuItems} key={subMenuItems.ko}>
											<Link to={"/"+items.linkKey+"/"+subMenuItems.linkKey} activeClassName={styles.active} key={subMenuItems.linkKey}>
												{subMenuItems.ko}
											</Link>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
