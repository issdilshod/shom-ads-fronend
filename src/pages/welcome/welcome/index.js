import { useTranslation } from "react-i18next";
import Carousel from "../../../components/Carousel";

const Welcome = () => {

    const { t } = useTranslation();

    return (
        <div className='main'>

            <div className='basic-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-xl-8'>
                            <Carousel 
                                items={[
                                    {
                                        img: './assets/images/coming-soon.png', 
                                        title: t('welcomePage.bannerTitle'), 
                                        description: t('welcomePage.bannerDescription')
                                    }
                                ]}
                            />
                        </div>
                        <div className='col-12 col-xl-4 mt-4 mt-xl-0'>
                            <div className='last-news'>
                                <div className='last-news-head d-flex'>
                                    <div className='mr-auto'>
                                        <span>{t('welcomePage.newsTitle')}</span>
                                    </div>
                                    <div>
                                        <a href={'#'}>{t('welcomePage.newsAllTitle')}</a>
                                    </div>
                                </div>

                                <div className='last-news-main'>
                                    {
                                        [1, 2, 3].map((value, index) => {
                                            return (
                                                <div className='last-news-item' key={index}>
                                                    <div className='last-news-item-title'>Заголовок {value}</div>
                                                    <div className='last-news-item-info d-flex'>
                                                        <div>
                                                            <img src={`https://robohash.org/`+crypto.randomUUID()+`?set=set3&size=20x20`} alt={'author avatar'} />
                                                        </div>
                                                        <div className='ml-2'>
                                                            Автор
                                                        </div>
                                                        <div className='ml-auto'>
                                                            31 дек. 2022 в 13:00
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-xl-4'>
                            <div className='about-us-item'>
                                <div className='text-center'>
                                    <span className='about-info-title'>
                                        {t('welcomePage.aboutUs.createAd.title')}
                                    </span>
                                    <span className='about-info-body'>
                                        {t('welcomePage.aboutUs.createAd.description')}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='icon-info'>
                                        <i className='ti ti-writing'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-xl-4 mt-4 mt-xl-0'>
                            <div className='about-us-item'>
                                <div className='text-center'>
                                    <span className='about-info-title'>
                                        {t('welcomePage.aboutUs.payAd.title')}
                                    </span>
                                    <span className='about-info-body'>
                                        {t('welcomePage.aboutUs.payAd.description')}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='icon-info'>
                                        <i className='ti ti-report-money'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-xl-4 mt-4 mt-xl-0'>
                            <div className='about-us-item'>
                                <div className='text-center'>
                                    <span className='about-info-title'>
                                        {t('welcomePage.aboutUs.readyAd.title')}
                                    </span>
                                    <span className='about-info-body'>
                                        {t('welcomePage.aboutUs.readyAd.description')}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='icon-info'>
                                        <i className='ti ti-check'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className='partners'>
                <div className='container'>
                    <div className='col-12'>
                        partners
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Welcome;