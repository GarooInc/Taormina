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
        <div className="page bg-white overflow-y-none">
            <div className='flex flex-col w-full items-center'>
                <HeaderItem v={"v2"} transparent/>
                <div className='px-10 w-full'>
                    <h1 className="principal_title italic">{t('contacts:title')}</h1>
                    <HotelExtension />
                </div>
            </div>
            <FooterItem logo={"v2"} />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}