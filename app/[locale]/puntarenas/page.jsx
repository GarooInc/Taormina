import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import { FaLocationDot } from "react-icons/fa6";
import FooterItem from '@/components/FooterItem/FooterItem'



const namespaces = ['puntarenas', 'header']

export default async function FoodDrinks({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent/>
            <div className='info_container'>
                <img src={`/assets/images/casino/puntarenas.JPG`} alt="casino" className="principal_banner" />
                <h2 className='italictiempos_title text-secondary'>{t('puntarenas:title')}</h2>
                <span className='bellfont_description text-black py-4'>
                    {t('puntarenas:description')}
                </span>
                <span className='bellfont_description text-secondary '>
                    {t('puntarenas:schedule_title')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('puntarenas:schedule1')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('puntarenas:schedule2')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('puntarenas:schedule3')}
                </span>
                <div className='flex flex-col justify-center items-center py-4 gap-2 md:h-40'>
                    <a href=' https://waze.com/ul/hd1g8txbv5'>
                    <FaLocationDot className="text-white text-4xl bg-secondary rounded-full p-2" />
                    </a>
                    <a className="menu_btn bg-secondary min-w-48 text-center" href="https://api.whatsapp.com/send/?phone=50662635020&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                        {t('puntarenas:btn1')}
                    </a>
                </div>
            </div>
            <FooterItem logo={"v2"}/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}