import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginAuthHome from './pages/LoginAuthHome'
import Home from './pages/Home'
import Explore from './pages/Explore'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginAuthHome />} />
				<Route path="/explore" element={<Explore />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
