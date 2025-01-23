import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ServicesItem from '@/components/ServicesItem/ServicesItem'

const namespaces = ['room-services', 'header']

export default async function RoomServices({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative pb-10">
            <div className="flex flex-col w-full items-center">
                <HeaderItem v={"v2"} transparent nav={"/food_drinks"} />
                <h2 className='italictiempos_title text-secondary'>{t('room-services:title')}</h2>
                <span className='bellfont_description text-black'>
                    {t('room-services:description')}
                </span>
                <span className='bellfont_description text-secondary '>
                    {t('room-services:text')}
                </span>
                <ServicesItem collection={"Services"} tag={"room_service"} color={"secondary"}/>
                <div className='double_button'>
                    <a className="menu_btn bg-secondary w-40 text-center" href="https://taormina.garooinc.com/api/files/jgcp8y1pnbgek6b/dut3fb1a0b4v1uv/menu_a_la_carta_ingle_s_0nVDrhOCE2.pdf?token=" target="_blank" rel="noreferrer">
                        {t('room-services:btn1')}
                    </a>
                    <a className="menu_btn bg-primary w-40 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                        {t('room-services:btn2')}
                    </a>
                </div>
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}