import { useState, createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import Loading from '../components/loading'

const AppContext = createContext();

export function AppWrapper({ children }) {
	
	const [data, setData] = useState({})
	const [loading, setLoading]= useState(false)
	const router = useRouter()

	const getMenuLinks = async () => {
		let localData = data
		localData.menu = {}

		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/menu`)
		const links = await res.json()

		localData.menu.links = links
		
		links.map((link) => {
			if(link.url == router.route)
				localData.curPage = link.name
		})

		setData(localData)
		setLoading(true)
	}	

	useEffect(() => {
		getMenuLinks()
	}, [])
	
	return (
		<>
			{loading && useAppContext() == undefined
				? <AppContext.Provider value={data}>{children}</AppContext.Provider>
				: <Loading />
			}
		</>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}