import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

import Carousel from '../components/infinityCarousel'
import Grid from '../components/adaptiveGrid'

import styles from '../styles/page_components/projectCarousel.module.sass'

let data = [
	{
		'name': 'Milavitsa',
		'img': '/img/projects/milavitsa.svg',
		'url': 'https://www.milavitsa-bustie.kz/'
	},
	{
		'name': 'Zolotomarket',
		'img': '/img/projects/zolotomarket.png',
		'url': 'https://www.zolotomarket.kz/'
	},
	{
		'name': 'Koreanstory',
		'img': '/img/projects/koreanstory.svg',
		'url': 'https://koreanstory.kz/'
	},
	{
		'name': 'Europharma',
		'img': '/img/projects/europharma.svg',
		'url': 'https://europharma.kz/'
	},
	{
		'name': 'Kelet',
		'img': '/img/projects/kelet.svg',
		'url': 'https://shop-kelet.kz/'
	},
	{
		'name': 'Digis',
		'img': '/img/projects/digis.svg',
		'url': 'https://digis.kz/'
	},
	{
		'name': 'Outdoorworld',
		'img': '/img/projects/outdoorworld.svg',
		'url': 'https://outdoorworld.kz/'
	},
	{
		'name': 'Eichholtz',
		'img': '/img/projects/eichholtz.svg',
		'url': 'https://www.eichholtz.com.kz/'
	},
	{
		'name': '1Music',
		'img': '/img/projects/1music.svg',
		'url': 'https://www.1music.kz/'
	},
]

export default function projectCarouesel() {
	const [items] = useState(data)
	const [switchC, setSwitchC] = useState(false)

	const calcHeightMainBlock = () => {
		if (typeof window !== 'undefined' && document.querySelector('.projectBlockInit') !== null)
			return document.querySelector('.projectBlockInit').offsetHeight
	}

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					className={styles.projectBlock + ' projectBlockInit'}
					animate={{ height: 'auto', opacity: 1 }}
					initial={{ height: calcHeightMainBlock(), opacity: 0 }}
					transition={{ duration: 0.4, }}
					key={switchC}
				>
					{!switchC
						? <Carousel items={items} />
						: <Grid items={items} />
					}
				</motion.div>
			</AnimatePresence>
			<div className={styles.switchButton} onClick={() => setSwitchC(prev => !prev)}>
				{!switchC
					? "Смотреть все"
					: "Свернуть"
				}
			</div>
		</>
	)
}