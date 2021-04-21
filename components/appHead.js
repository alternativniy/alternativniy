import Head from 'next/head'
import { useAppContext } from '../context/state'

export default function appHead() {
	const context = useAppContext()

	return (
		<Head>
			<title>{context.curPage}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="manifest" href="/manifest.json" />
			<link
				href="/icon/favicon-16x16.png"
				rel="icon"
				type="image/png"
				sizes="16x16"
			/>
			<link
				href="/icon/favicon-32x32.png"
				rel="icon"
				type="image/png"
				sizes="32x32"
			/>
			<link rel="apple-touch-icon" href="/apple-icon-180x180.png"></link>
			<meta name="theme-color" content="#bb86fc" />
		</Head>
	)
}
