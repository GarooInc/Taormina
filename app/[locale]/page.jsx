import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ButtonNav from '@/components/ButtonNav/ButtonNav'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
import { HiInformationCircle } from "react-icons/hi2"
import { IoStarSharp } from "react-icons/io5";


const namespaces = ['home', 'welcome']

export default async function Menu({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const nav = [
        {
            title: t('home:nav2'),
            link: '/frontdesk'
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
            title: t('home:nav15'),
            link: '/casino'
        },
        {
            title: t('home:nav16'),
            link: '/virtual-casino'
        },
        {
            title: t('home:nav17'),
            link: '/junglebar'
        },
        {
            title: t('home:nav13'),
            link: '/spa'
        },
        {
            title: t('home:nav18'),
            link: '/entertainment'
        },
        {
            title: t('home:nav14'),
            link: '/contacts'
        },
        {
            title: t('home:nav11'),
            link: '/faqs'
        }
    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="page bg-white pb-20 md:py-10">
            <div className='flex-col-full'>
                <div className='flex-col-full'>
                    <img src="/assets/images/logo_v2.png" alt="logo" className="w-[200px] pt-4" />
                    <div className='flex justify-center items-center w-full px-10'>
                        {
                            Array(4).fill().map((_, index) => (
                                <IoStarSharp key={index} className="text-primary text-xl" />
                            ))
                        }
                    </div>
                </div>
                
                <div className="nav_container">
                    <span className="description_text">
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