import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ActivitiesItem from '@/components/ActivitiesItem/ActivitiesItem'


const namespaces = ['virtualcasino', 'header']

export default async function VirtualCasino({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
        <HeaderItem v={"v2"} transparent/>
                <img src={`/assets/images/virtual-casino/virtual.jpg`} alt="virtualcasino" className="principal_banner" />
                <div className='info_container'>
                <h2 className='italictiempos_title text-secondary'>{t('virtualcasino:title')}</h2>
                <span className='bellfont_description text-secondary'>
                    {t('virtualcasino:description')}
                </span>
                <span className='bellfont_description text-black pt-4 '>
                    {t('virtualcasino:text1')}
                </span>
                <span className='bellfont_description text-black'>
                    {t('virtualcasino:text2')}
                </span>
                    <a className="menu_btn bg-secondary min-w-48 text-center my-4" href="tel:+50660582296" target="_blank" rel="noreferrer">
                        {t('virtualcasino:btn1')}
                    </a>
                <h2 className='italictiempos_title text-secondary'>{t('virtualcasino:title2')}</h2>
                <ActivitiesItem tag={"virtual-casino"}/>
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}