import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ActivitiesItem from '@/components/ActivitiesItem/ActivitiesItem'
import FooterItem from '@/components/FooterItem/FooterItem'


const namespaces = ['activities', 'header']

export default async function Activities({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <div className="flex flex-col w-full items-center">
                <HeaderItem v={"v2"} transparent/>
                <div className="w-full rounded-lg  px-10 font-bellfont text-black text-center flex flex-col justify-center items-center gap-4">
                    <h2 className='italictiempos_title text-quaternary'>{t('activities:title')}</h2>
                    <span className=' bellfont_description text-quaternary text-center'>
                        {t('activities:desc')}
                    </span>
                </div>
                <ActivitiesItem />
            </div>
            <FooterItem transparent logo={"v1"}/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}