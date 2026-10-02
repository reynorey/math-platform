import {Routes, Route} from 'react-router'
import Home from './Home'
import NavBar from './NavBar'
import Problem from './Problem'


export default function App() {
    return(
    <>
        <NavBar/>
        <Routes>
            <Route path ="/" element = {<Home/>} />
            <Route path = "/problem" element = {<Problem/>} />
        </Routes>
    </>
    )
}