import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'
import TabCartItem from '@/components/TabCartItem/TabCartItem'


const namespaces = ['adventures', 'header']

export default async function Adventures({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v3"} transparent/>
            <h1 className="italictiempos_title text-quaternary">{t('adventures:title')}</h1>
            <TabCartItem collection={"Adventures"} noTags />
            <FooterItem transparent logo={"v1"}/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}