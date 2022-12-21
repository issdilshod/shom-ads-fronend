import { useEffect, useState } from "react";
import * as Consts from '../../services/constants/header';
import ruFlag from '../../assets/images/russia.svg';
import tjFlag from '../../assets/images/tajikistan.svg';
import logo from '../../assets/images/logo.svg';

const Header = () => {

    const [theme, setTheme] = useState(Consts.defaultTheme);
    const [language, setLanguage] = useState(Consts.defaultLanguage);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        document.body.lang = language;
    }, [language]);

    const toggleTheme = () => {
        if (theme===Consts.darkTheme){
            setTheme(Consts.lightTheme);
        }else{
            setTheme(Consts.darkTheme);
        }
    }

    const toggleLanguage = () => {
        if (language===Consts.ruLanguage){
            setLanguage(Consts.tjLanguage);
        }else{
            setLanguage(Consts.ruLanguage);
        }
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-in'>
                    <div className='d-flex'>
                        <div className='header-logo mb-auto mt-auto'>
                            <img 
                                src={logo}
                                alt='logo'
                            />
                            <span className='ml-2'>Hom ads.</span>
                        </div>
                        <div className='header-search ml-2'>

                        </div>
                        <div className='header-theme ml-auto mb-auto mt-auto' onClick={toggleTheme}>
                            <span className='header-theme-switch'></span>
                        </div>
                        <div className='header-language ml-2 mb-auto mt-auto' onClick={toggleLanguage}>
                            <span className='header-language-switch'>
                                <img 
                                    src={(Consts.tjLanguage===language)?tjFlag:ruFlag}
                                    alt='flag'
                                    width={20}
                                    height={20}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;