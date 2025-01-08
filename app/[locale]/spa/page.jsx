import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import FooterItem from '@/components/FooterItem/FooterItem'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import TabCartItem from '@/components/TabCartItem/TabCartItem'
import HeaderItem from '@/components/HeaderItem/HeaderItem'


const namespaces = ['spa', 'home']

export default async function Adventures({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-secondary relative">
            <HeaderItem v={"v4"} transparent/>
            <h1 className="italictiempos_title text-primary">Spa</h1>
            <LanguageSwitcher />
            <TabCartItem collection={"Spa"} />
            <FooterItem transparent logo={"v4"}/>
        </div>
    </TranslationsProvider>
  )
}