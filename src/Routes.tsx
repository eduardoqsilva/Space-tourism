import { Routes, Route} from 'react-router-dom'
import { Destination } from './pages/Destination'
import { Home } from './pages/Home'
import { Crew } from './pages/Crew'
import { Technology } from './pages/Technology'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
      </Route>
    </Routes>
  )
}