import Call from '../img/call.svg'
import {motion} from 'framer-motion'

import styles from '../styles/components/phone.module.sass'

export default function Phone() {
	return (
		<>
			<a className={styles.phone_block} href="tel:+77473795592">
				<motion.div 
					animate={{
						scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
						rotate: [0, 0, -45, 45, -45, 45, 0]
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
						//times: [1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
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
		</>
	)
}