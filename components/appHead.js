import Head from 'next/head'
import { useAppContext } from '../context/state'

export default function appHead() {
	const context = useAppContext()

	return (
		<Head>
			<title>{context.curPage}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="google-site-verification" content="WI2ayAhL4BSxEWOatccvZwouzQ1yeG9aW5uzfwo8xEo" />
		</Head>
	)
}
