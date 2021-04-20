import ProjectCarousel from '../page_components/projectCarousel'

import styles from '../styles/home.module.sass'
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className={styles.home_page}>
			<motion.div className={styles.home_about_me}
				initial={{ translateY: 500, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.4, translateY: { type: "spring", stiffness: 100 } }}>
				<h3>С места в <s>карьер</s> карьеру!</h3>
				<p>
					Меня зовут <span className={styles.active_color}>Романцов Роман Романович</span>, а данный сайт является моим портфолио.
					Каждый из нас ищет свое место под солнцем, вот и я хочу занять свое место под корпоративной пальмой.
					Расскажу немного о себе что-ли.
					<br /><br />
					Я имею уже 2,5 года full-stack разработки за своими могучими плечами.
					Основной стек это <span className={styles.active_color}>PHP</span> и <span className={styles.active_color}>JavaScript</span>, а также различные JS-фреймворки (про них позже).
					Все это время я работаю на платформе <span className={styles.active_color}>1C-Bitrix</span>, собственно и с его фреймворком.
					И по его оценочной системе являюсь уверенным Bitrix middle-разработчиком.
					<br /><br />
					Данный сайт работает на <span className={styles.active_color}>Next JS</span> с привязкой к <span className={styles.active_color}>Firebase</span>, что дает примерное представление о моих навыках во front-end среде.
					Если говорить обширнее, то я работал с <span className={styles.active_color}>VueJS 2</span> и
					сталкивался с самостоятельной настройкой <span className={styles.active_color}>Webpack</span>.
					Ну а на данный момент я остановился на <span className={styles.active_color}>React</span>.
				</p>
			</motion.div>
			<div className={styles.home_react_components}>
				<h2>Мое непосредcтвенное участие в разработке</h2>
				<ProjectCarousel />
			</div>
		</div>
	)
}
