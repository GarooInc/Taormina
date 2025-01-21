import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import AmenitiesItem from '@/components/AmenitiesItem/AmenitiesItem'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'


const namespaces = ['amenities', 'header']

export default async function Amenities({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-primary relative">
            <HeaderItem v={"v1"} transparent whiteArrow/>
            <div className='info_container'>
                <h1 className="principal_title italic">{t('amenities:title')}</h1>
                <AmenitiesItem/>
            </div>
            <FooterItem  transparent logo={"v1"}/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}