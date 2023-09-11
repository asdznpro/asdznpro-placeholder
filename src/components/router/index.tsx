import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home, NotFound } from 'views'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />

			{/* <Route path='/404' element={<NotFound />} /> */}
			<Route path='*' element={<Navigate to='/404' replace />} />
		</Routes>
	)
}
