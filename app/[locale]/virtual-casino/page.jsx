import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'



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
                        <a className="menu_btn bg-secondary min-w-48 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('virtualcasino:btn1')}
                        </a>
                </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}