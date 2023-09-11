import { BrowserRouter } from 'react-router-dom'

import 'styles/index.scss'

import { AppRouter } from 'components/router'

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
