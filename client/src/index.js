import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles/marginpadding.css'
import './components/App-1.css'
import './components/App-2.css'
import './index.css'
import { UserContextProvider } from './components/context/user'
import { QueryClient, QueryClientProvider } from 'react-query'

const newQueryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={newQueryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
)
