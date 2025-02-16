import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/Home'
import { NotFound } from './pages/not-found/NotFound'
import { Layout } from './layout/Layout'
export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index path='/' element={<Home />}></Route>
						<Route path='*' element={<NotFound />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
