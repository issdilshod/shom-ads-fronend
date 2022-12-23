import './assets/styles/app.scss';
import './assets/styles/themes/dark.scss';
import './assets/styles/themes/light.scss';
import './assets/styles/bootstrap.scss';

import Header from './layouts/header';
import Footer from './layouts/footer';
import Main from './layouts/main';

import './core/i18n';

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
