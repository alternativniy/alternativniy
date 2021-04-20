import styles from '../styles/components/adaptiveGrid.module.sass'

import PropTypes from 'prop-types';

adaptiveGrid.propTypes = {
	items: PropTypes.array
}

export default function adaptiveGrid(props) {
	return (
		<div className={styles.gridBlock}>
			{props.items.map((item, key) =>
				<a className={styles.item} href={item.url} target='__blank' key={key}>
					<div className={styles.itemWrapper}>
						<img
							src={item.img}
							alt={item.name}
							className={styles.image}
						/>
					</div>
				</a>
			)}
		</div>
	)
}