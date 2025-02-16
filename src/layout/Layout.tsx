import { Outlet } from 'react-router'
import { Header } from '../components/header/Header'

export const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}
