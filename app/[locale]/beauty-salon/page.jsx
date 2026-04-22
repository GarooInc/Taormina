import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import FooterCart from '@/components/FooterCart/FooterCart'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import BeautySalonItem from '@/components/BeautySalonItem/BeautySalonItem'
import HeaderItem from '@/components/HeaderItem/HeaderItem'


const namespaces = ['beauty-salon', 'home']

export default async function BeautySalon({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent/>
            <h1 className="italictiempos_title text-primary uppercase">{t('beauty-salon:title')}</h1>
            <LanguageSwitcher />
            <BeautySalonItem collection={"Beauty_Salon"} />
            <FooterCart transparent />
        </div>
    </TranslationsProvider>
  )
}