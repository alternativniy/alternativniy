import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.sass'

import { AnimatePresence, motion  } from "framer-motion";
import NextNprogress from 'nextjs-progressbar';
import Header from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps, router}) {
	return (
		<>
			<NextNprogress
				color="#29D"
				startPosition={0.3}
				stopDelayMs={200}
				height="3"
				options={{ showSpinner: false }}
			/>
			<Head>
        <title>{Component.name}</title>
        <link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

			<Header page_name={Component.name} />

			<div className="wrapper">
				<AnimatePresence exitBeforeEnter>
					<motion.div animate={{translateX: 0, opacity: 1}} 
											initial={{translateX: -50, opacity: 0 }} 
											transition={{ duration: 0.2, translateX: { type: "spring", stiffness: 100 } }} 
											key={router.route}>
						<Component {...pageProps}/>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
}

export default MyApp
