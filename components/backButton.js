import router from 'next/router'
import Back from '../img/back.svg'
import {motion} from 'framer-motion'

import styles from '../styles/components/backButton.module.sass'

export default function backButton() {
  return (
    <>
      <motion.div className={styles.back_button_container} 
      onClick={() => router.back()}
      animate={{width: "auto"}}
      initial={{width: 0}}
      transition={{ duration: 0.2}}
      exit={{width: 0}}>
        <Back className={styles.back_button_img} />
      </motion.div>
    </>
  )
}