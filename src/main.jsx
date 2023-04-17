import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import {BrowserRouter as Routes} from "react-router-dom"

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
            <QueryClientProvider client={client}>
                  <Routes>
                        <App />
                  </Routes>
            </QueryClientProvider>,
)
