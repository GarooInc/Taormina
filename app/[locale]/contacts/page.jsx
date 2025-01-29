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
        <div className="page bg-white relative">
        <HeaderItem v={"v2"} transparent/>
            <div className='info_container'>
                <div className='px-10 w-full'>
                    <h1 className="principal_title italic">{t('contacts:title')}</h1>
                    <a className='bellfont_description w-full flex text-secondary justify-center items-center' href="tel:+50640555555">
                        40555555
                    </a>
                    <HotelExtension />
                </div>
            </div>
            <FooterItem logo={"v2"} />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}