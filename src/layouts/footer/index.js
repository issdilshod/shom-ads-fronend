import { useTranslation } from "react-i18next";
import ButtonHref from '../../components/ButtonHref/index';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-top d-flex'>
                    <div className='download text-right'>
                        <h2 className='download-title'>{t('footerLayout.download.playMarket')}</h2>
                        <ButtonHref 
                            icon={'brand-google-play'}
                            variant={'primary'}
                            href={'#'}
                            text={t('global.download')}
                        />
                    </div>
                    <div className='divide mb-auto mt-auto'></div>
                    <div className='download text-left'>
                        <h2 className='download-title'>{t('footerLayout.download.appStore')}</h2>
                        <ButtonHref 
                            icon={'brand-appstore'}
                            variant={'primary'}
                            href={'#'}
                            text={t('global.download')}
                        />
                    </div>
                </div>
                <div className='footer-bottom d-flex'>
                    <div className='mr-auto mb-auto mt-auto'>
                        Shom ads © 2023. {t('footerLayout.copyright')}
                    </div>
                    <div className='footer-links'>
                        <div className='d-flex'>
                            <div className='footer-links-items'>
                                <div className='footer-links-item'>
                                    <p>{t('footerLayout.links.legal.title')}</p>
                                    <a href={'#'}>{t('footerLayout.links.legal.terms')}</a>
                                    <a href={'#'}>{t('footerLayout.links.legal.policy')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;