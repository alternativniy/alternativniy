import Link from "next/link"
import { useEffect, useState } from "react"
import {Nav, Navbar} from 'react-bootstrap'

import BackButton from "./backButton"
import Phone from './phone'

import styles from "../styles/components/header.module.sass"

export default function Header(props) {
	const hasWindow = typeof window !== 'undefined';

	const [links, setLinks] = useState(["Home", "PHP"])
	const [mobile, setMobile] = useState(false)

	const checkMobile = () => {
		
		
		if( window_width() <= 575 && !mobile ) {
			console.log('mobile')
			setMobile(true)
		}	
		else if(window_width() > 575 && mobile) {
			console.log('desk')
			setMobile(false)
		}	
	}

	useEffect(() => {
		checkMobile()
		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const hideMobileMenu = () => {
		let button = document.querySelector('.i_nav_button')
		let navbar = document.querySelector('.i_navbar_nav')

		if(button && navbar && button.offsetHeight !== 0 && navbar.classList.contains('show'))
			button.click()
	}

	function window_width() {
		if (hasWindow) {
			return window.innerWidth
		}
	}

	return(
		<Navbar variant="dark" expand="sm">
			{(mobile && props.page_name !== 'Home') &&
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
					{links.map((item, index) => 
						<Link href={item == 'Home' ? '/' : '/'+item.toLowerCase()} key={index} passHref>
							<Nav.Link active={props.page_name == item ? true : false} onClick={hideMobileMenu}>{item}</Nav.Link>
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