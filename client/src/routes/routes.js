import MainRoot from '../pages/MainRoot'
import Home from '../pages/Home'
import AddRobot from '../pages/AddRobot'
import NotFound from '../pages/NotFound'




export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/add-robot',
                element: <AddRobot />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]