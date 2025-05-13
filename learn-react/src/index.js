import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import {Provider} from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
