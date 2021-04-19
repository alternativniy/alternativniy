import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Lazy, Autoplay } from 'swiper/core';

import 'swiper/swiper-bundle.css';
import styles from '../styles/components/infinityCarousel.module.sass'

SwiperCore.use([Lazy, Autoplay]);

export default function infinityCarousel(props) {
	const [swiper, setSwiper] = useState(null)

	const startAutoplay = () => {
		swiper.autoplay.start()
	}

	const stopAutoplay = () => {
		swiper.autoplay.stop()
	}

	useEffect(() => {
		const swiperBlock = document.querySelector("." + styles.container)

		swiperBlock.addEventListener('mouseenter', stopAutoplay)
		swiperBlock.addEventListener('mouseleave', startAutoplay)

		return (() => {
			swiperBlock.removeEventListener('mouseenter', stopAutoplay)
			swiperBlock.removeEventListener('mouseleave', startAutoplay)
		})
	}, [swiper])

	return (
		<Swiper
			className={styles.container}

			spaceBetween={20}
			slidesPerView="auto"
			loop={true}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
			}}
			longSwipes={false}
			freeMode={true}
			speed={3000}
			preloadImages={false}
			//lazy={{loadOnTransitionStart: true, loadPrevNext: true, loadPrevNextAmount: 10}}
			onSwiper={(swiper) => setSwiper(swiper)}
		>
			{props.items.map((item, key) =>
				<SwiperSlide 
					className={styles.slide}
					key={key}
					tag="a"
					href={item.url}
					target="_blank"
				>
					<img src={item.img} alt={item.name} />
				</SwiperSlide>
			)}
		</Swiper>
	)
}