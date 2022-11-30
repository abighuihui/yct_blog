import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Movie from './components/movie';

import router from './router'
import { RouterProvider } from 'react-router-dom'

//ReactDOM.render(<Movie />, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

