import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'
import HotelExtension from '@/components/HotelExtension/HotelExtension'


const namespaces = ['contacts', 'header']

export default async function Contacts({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white">
            <HeaderItem v={"v2"} transparent/>
            <div className='px-10 w-full'>
                <h1 className="principal_title italic">{t('contacts:title')}</h1>
                <HotelExtension />
            </div>
            <div className='md:absolute md:bottom-0'>
                <img src={`/assets/images/logo_v2.png`} alt="logo" className="w-[80px]" />
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}