import React from 'react'
import Searchbar from './Searchbar'
import './FeedNavbar.css'
import Button from './Button'
import { HomeIcon } from '@radix-ui/react-icons'

function FeedNavbar() {
	return (
		<nav class="navbar">
			<a href="/" class="nav-logo">
				<img
					src="/images/gdsclogo1.png"
					alt="Logo"
					className="gdsclogo"
				/>
				<h1 className="navbar-text">GDSC</h1>
			</a>
			<div className="nav-menu" style={{ gap: 20 }}>
				<a href="/" className="curr-page">
					<HomeIcon height="20" width="20" style={{ padding: 10 }} />
					Home
				</a>
				<Searchbar />
				<Button textContent={'Login'} className={'login-btn'} />
			</div>
		</nav>
	)
}

export default FeedNavbar
