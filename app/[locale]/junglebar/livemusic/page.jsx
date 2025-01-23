import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ActivitiesItem from '@/components/ActivitiesItem/ActivitiesItem'
import FooterItem from '@/components/FooterItem/FooterItem'



const namespaces = ['jungle-bar', 'header']

export default async function LiveMusic({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent nav={"/junglebar"}/>
            <div className='flex flex-col justify-center items-center'>
                <img className="w-60" src={`/assets/images/jungle-bar/logo-secondary.png`} alt={"logo"} />
                <h2 className='italictiempos_title text-quinary'>
                    {t('jungle-bar:livemusic')}
                </h2>
            </div>
            <ActivitiesItem tag={"bar-events"}/>
            <FooterItem logo={"v2"} />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}