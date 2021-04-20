import Call from '../img/call.svg'
import Github from '../public/img/github.svg'
import { motion } from 'framer-motion'

import styles from '../styles/components/phone.module.sass'

export default function Phone() {
	return (
		<div className={styles.container}>
			<a className={styles.phone_block} href="tel:+77473795592">
				<motion.div
					animate={{
						scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
						rotate: [0, 0, -45, 45, -45, 45, 0]
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
						repeat: 'Infinity',
						repeatType: 'loop',
						repeatDelay: 1
					}}>
					<Call className={styles.phone_img} />
				</motion.div>
				<span className={styles.phone_text}>
					+7 (747) 379 5592
				</span>
			</a>
			<a href="https://github.com/alternativniy/" target="_blank" rel="noreferrer">
				<Github className={styles.github} />
			</a>
		</div>
	)
}