import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { Nav, Navbar } from 'react-bootstrap'
import {useAppContext} from '../context/state'

import BackButton from "./backButton"
import Phone from './phone'

import styles from "../styles/components/header.module.sass"

function Header() {
	const context = useAppContext()
	const router = useRouter()

	const hasWindow = typeof window !== 'undefined';
	const [mobile, setMobile] = useState(false)

	const checkMobile = () => {
		if (window_width() <= 575 && !mobile) {
			setMobile(true)
		}
		else if (window_width() > 575 && mobile) {
			setMobile(false)
		}
	}

	useEffect(() => {
		checkMobile(mobile)
		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const hideMobileMenu = () => {
		let button = document.querySelector('.i_nav_button')
		let navbar = document.querySelector('.i_navbar_nav')

		if (button && navbar && button.offsetHeight !== 0 && navbar.classList.contains('show'))
			button.click()
	}

	function window_width() {
		if (hasWindow) {
			return window.innerWidth
		}
	}

	return (
		<Navbar variant="dark" expand="sm">
			{(mobile && router.route !== '/') &&
				<BackButton />
			}
			<Link href='/' passHref>
				<Navbar.Brand className={styles.i_navbar_brand}>RPP</Navbar.Brand>
			</Link>

			{mobile &&
				<Phone />
			}
			<Navbar.Toggle className={styles.i_nav_button + " i_nav_button"} aria-controls="basic-navbar-nav" />

			<Navbar.Collapse id="basic-navbar-nav" className="i_navbar_nav">
				<Nav className="mr-auto">
					{context.menu.links.map((item) =>
						<Link href={item.url} key={item._id} passHref>
							<Nav.Link active={ (item.url == router.route) ? true : false} onClick={hideMobileMenu}>{item.name}</Nav.Link>
						</Link>
					)
					}
				</Nav>
			</Navbar.Collapse>
			{!mobile &&
				<Phone />
			}
		</Navbar>
	)
}

export default Header;