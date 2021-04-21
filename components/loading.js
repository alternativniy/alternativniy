import LoadingSVG from '../public/img/loading.svg'

import styles from '../styles/components/loading.module.sass'

export default function Loading() {
	return(
		<div className={styles.loadingContainer}>
			<LoadingSVG className={styles.loading} />
		</div>
	)
}