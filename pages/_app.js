import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.sass'

import { AppWrapper } from '../context/state'
import { AnimatePresence, motion } from "framer-motion";
import NextNprogress from 'nextjs-progressbar';
import Header from '../components/header'
import AppHead from '../components/appHead'


function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<NextNprogress
				color="#29D"
				startPosition={0.3}
				stopDelayMs={200}
				height="3"
				options={{ showSpinner: false }}
			/>
			<AppWrapper>
				<AppHead />
				<Header />

				<div className="wrapper">
					<AnimatePresence exitBeforeEnter>
						<motion.div 
							animate={{ translateX: 0, opacity: 1 }}
							initial={{ translateX: -50, opacity: 0 }}
							transition={{ duration: 0.2, translateX: { type: "spring", stiffness: 100 } }}
							key={router.route}>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</div>
			</AppWrapper>
		</>
	)
}

export default MyApp
