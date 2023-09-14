import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstComponent } from './FirstComponent'
import { SecondComponent } from './SecondComponent'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstComponent />
    <SecondComponent title="Props section" subtitle="trying props" number={123} />
  </React.StrictMode>,
)
