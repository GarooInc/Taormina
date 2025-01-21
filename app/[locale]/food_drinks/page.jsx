import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import FoodDrinksItem from '@/components/FoodDrinksItem/FoodDrinksItem'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ActivitiesItem from '@/components/ActivitiesItem/ActivitiesItem'



const namespaces = ['food_drinks', 'header']

export default async function FoodDrinks({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent/>
            <FoodDrinksItem />
            <h2 className='italictiempos_title text-secondary uppercase'>{t('food_drinks:activities')}</h2>
            <ActivitiesItem tag={"restaurant"}/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}