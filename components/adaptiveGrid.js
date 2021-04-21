import styles from '../styles/components/adaptiveGrid.module.sass'
import Image from 'next/image'

import PropTypes from 'prop-types';

adaptiveGrid.propTypes = {
	items: PropTypes.array
}

export default function adaptiveGrid(props) {
	return (
		<div className={styles.gridBlock}>
			{props.items.map((item, key) =>
				<a className={styles.item} href={item.url} target='__blank' key={key} rel="noopener">
					<div className={styles.itemWrapper}>
						<Image
							src={item.img}
							alt={item.name}
							className={styles.image}
							layout="fill"
						/>
					</div>
				</a>
			)}
		</div>
	)
}