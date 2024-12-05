import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ButtonNav from '@/components/ButtonNav/ButtonNav'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
import { HiInformationCircle } from "react-icons/hi2"

const namespaces = ['home', 'welcome']

export default async function Menu({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const nav = [
        {
            title: t('home:nav2'),
            link: '/frontdesk'
        },
        {
            title: t('home:nav3'),
            link: '/housekeeping'
        },
        {
            title: t('home:nav4'),
            link: '/amenities'
        },
        {
            title: t('home:nav5'),
            link: '/food_drinks'
        },
        {
            title: t('home:nav6'),
            link: '/activities'
        },
        {
            title: t('home:nav7'),
            link: '/adventures'
        },
        {
            title: t('home:nav13'),
            link: '/spa'
        },
        {
            title: t('home:nav10'),
            link: '/emergency'
        },
        {
            title: t('home:nav11'),
            link: '/faqs'
        }
    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="page bg-white pb-20 md:py-10">
            <div className='flex flex-col justify-center items-center w-full'>
                <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
                <div className="flex flex-col justify-center items-center py-4 w-full px-10">
                    <span className="text-primary text-md font-book italic text-center leading-6 tracking-wide my-4 py-4">
                        {(t('welcome:content'))}
                    </span>
                    {
                        nav.map((item, index) => (
                            <ButtonNav 
                                key={index} 
                                title={item.title} 
                                link={item.link} 
                                className={index === nav.length - 1 ? 'border-b-2 border-quaternary' : ''}
                            />
                        ))
                    }
                </div>
            </div>
            <ChatBubble />
        </main>
        <LanguageSwitcher />
        <a href='https://garooinc.com/' className="fixed top-10 left-10">
            <HiInformationCircle className="info-icon text-4xl text-tertiary" />
        </a>
        </TranslationsProvider>
    );
}