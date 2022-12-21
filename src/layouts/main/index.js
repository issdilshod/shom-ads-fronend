import { BrowserRouter, Route, Routes } from "react-router-dom";
import E404 from '../../pages/error/404';
import Welcome from '../../pages/welcome/welcome';

const Main = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Welcome />} />
                <Route path='*' element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;