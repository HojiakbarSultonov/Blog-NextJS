import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
