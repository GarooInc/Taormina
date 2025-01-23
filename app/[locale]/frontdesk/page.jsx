import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import { FaWhatsapp, FaPhone, FaWifi } from "react-icons/fa"

const namespaces = ['frontdesk', 'header']

export default async function FrontDesk({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-primary relative">
            <HeaderItem v={"v1"} transparent whiteArrow/>
            <div className='info_container'>
                <img src={`/assets/images/frontdesk/exterior.png`} alt="frontdesk" className="principal_banner" />
                <h2 className='italictiempos_title text-secondary'>{t('frontdesk:title')}</h2>
                <p className='font-bellfont text-secondary text-center px-10 py-4'>{t('frontdesk:description')}</p>
                <p className='font-bellfont text-secondary text-center px-10 py-4'>{t('frontdesk:description-secondary')}</p>
                    <div className='flex md:items-center justify-center gap-4 font-bellfont px-10 w-full py-10'>
                        <div className="fontdesk_item">
                            <FaWhatsapp className="frontdesk_icon" />
                            <a href="https://wa.me/50660427116" className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:whatsapp')} </span><span> +506 60427116</span></a>
                        </div>
                        <div className="fontdesk_item">
                            <FaPhone className="frontdesk_icon" />
                            <a href="tel:+506 4055 5555" className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:phone')} </span><span> 4055 5555 ext. 100 | 101 |102</span></a>
                        </div>
                        <div className="fontdesk_item">
                            <FaWifi className="frontdesk_icon" />
                            <div className='flex flex-col gap-0'>
                                <span className="fontdesk_item_text uppercase">WiFi</span>
                                <span className="fontdesk_item_text">
                                    {t('frontdesk:wifi_name')}
                                </span>
                                <span className="fontdesk_item_text">
                                    {t('frontdesk:wifi_password')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className='btn_frontdesk'>{t('frontdesk:button')}</button>
            </div>
            <div className='absolute bottom-0 w-full flex-col-full py-4'>
                <span className='frontdesk_footer'>{t('frontdesk:footer1')}</span>
                <span className='frontdesk_footer'>{t('frontdesk:footer2')}</span>
            </div>
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}