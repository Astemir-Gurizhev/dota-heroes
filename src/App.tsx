import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout/Layout'
import { Hero } from './pages/hero/Hero'
import { Home } from './pages/home/Home'
export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index path='/' element={<Home />}></Route>
						<Route index path='/:name' element={<Hero />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
