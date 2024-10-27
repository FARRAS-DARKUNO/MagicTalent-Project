import ReactDOM from 'react-dom/client'
import './style/index.css'
import './style/theme.css'
// import Board from './Admin/board'
import { Provider } from 'react-redux'
import store from './store'
import './i18n'; // Import konfigurasi i18n
import PortfolioUser from './Client/portfolio'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* <Board /> */}
    <PortfolioUser/>
  </Provider>,
)
