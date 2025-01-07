import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'
import { FaWhatsapp, FaPhone, FaWifi } from "react-icons/fa"
import FooterItem from '@/components/FooterItem/FooterItem'

const namespaces = ['frontdesk', 'header']

export default async function FrontDesk({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-primary">
            <HeaderItem v={"v4"} transparent whiteArrow/>
            <div className='info_container'>
                <h2 className='italictiempos_title text-secondary'>{t('frontdesk:title')}</h2>
                        <div className='flex flex-col md:items-center justify-center gap-4 font-bellfont p-10 w-full'>
                            <div className="fontdesk_item">
                                <FaWhatsapp className="mr-2 text-secondary text-2xl" />
                                <a href="https://wa.me/50660427116" className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:whatsapp')} </span><span> +506 60427116</span></a>
                            </div>
                            <div className="fontdesk_item">
                                <FaPhone className="mr-2 text-secondary text-2xl" />
                                <a href="tel:+506 4055 5555" className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:phone')} </span><span> 4055 5555 ext. 100</span></a>
                            </div>
                            <div className="fontdesk_item">
                                <FaWifi className="mr-2 text-secondary text-2xl" />
                                <span className="fontdesk_item_text uppercase">WiFi</span>
                                <span className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:wifi_name')}: </span></span>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className="fontdesk_item_text"><span className='uppercase'>{t('frontdesk:wifi_password')}:</span></span>
                                    <span className='fontdesk_item_text'></span>
                                </div>
                            </div>
                        </div>
                <InfoDisplay collection="Front_Desk" colorlines="white" coloricon="primary" />
            </div>
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}