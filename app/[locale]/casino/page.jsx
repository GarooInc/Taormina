import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ActivitiesItem from '@/components/ActivitiesItem/ActivitiesItem'



const namespaces = ['casino', 'header']

export default async function FoodDrinks({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent/>
            <div className='main_info_container_inner'>
                <img src={`/assets/images/casino/casino.jpeg`} alt="casino" className="principal_banner" />
                <h2 className='italictiempos_title text-secondary'>{t('casino:title')}</h2>
                <span className='bellfont_description text-black py-4'>
                    {t('casino:description')}
                </span>
                <span className='bellfont_description text-secondary '>
                    {t('casino:schedule_title')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('casino:schedule1')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('casino:shedule2')}
                </span>
                <div className='main_info_container'>
                    <div className='double_button'>
                        <a className="menu_btn bg-secondary min-w-48 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('room-services:btn1')}
                        </a>
                        <a className="menu_btn bg-secondary min-w-48 text-center" href="https://api.whatsapp.com/send/?phone=50662635020&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('room-services:btn2')}
                        </a>
                    </div>
                </div>
                <h2 className='italictiempos_title text-secondary uppercase'>{t('casino:activities')}</h2>
                <ActivitiesItem tag={"casino"}/>
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}