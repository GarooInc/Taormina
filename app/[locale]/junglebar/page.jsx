import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import ServicesItem from '@/components/ServicesItem/ServicesItem'
import Link from 'next/link'


const namespaces = ['jungle-bar', 'header']

export default async function JungleBar({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white relative">
            <HeaderItem v={"v2"} transparent/>
            <div className='info_container'>
                <img src={`/assets/images/jungle-bar/banner.jpeg`} alt="virtualcasino" className="principal_banner" />
                <img className="w-60" src={`/assets/images/jungle-bar/logo.png`} alt={"logo"} />
                <span className='bellfont_description text-black'>
                        {t('jungle-bar:description')}
                </span>
                <div className='main_info_container'>
                    <div className='flex flex-wrap justify-center items-center gap-4'>
                        <Link className="menu_btn bg-quinary w-30 text-center" href="https://taormina.garooinc.com/api/files/jgcp8y1pnbgek6b/dut3fb1a0b4v1uv/menu_a_la_carta_ingle_s_0nVDrhOCE2.pdf?token=" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn1')}
                        </Link>
                        <Link className="menu_btn bg-quinary w-30 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn2')}
                        </Link>
                        <Link className="menu_btn bg-quinary w-30 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn2')}
                        </Link>
                    </div>
                </div>
                <h2 className='italictiempos_title text-quinary'>{t('jungle-bar:subtitle1')}</h2>
                <ServicesItem collection={"Services"} tag={"bar"} color={"quinary"}/>
                <div className='flex flex-wrap justify-center items-center gap-4 px-10'>
                        <Link className="menu_btn bg-quinary tracking-tighter flex-1 text-center" href="https://taormina.garooinc.com/api/files/jgcp8y1pnbgek6b/dut3fb1a0b4v1uv/menu_a_la_carta_ingle_s_0nVDrhOCE2.pdf?token=" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn4')}
                        </Link>
                        <Link className="menu_btn bg-quinary tracking-tighter flex-1 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn5')}
                        </Link>
                        <Link className="menu_btn bg-quinary tracking-tighter flex-1 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn6')}
                        </Link>
                        <Link className="menu_btn bg-quinary tracking-tighter flex-1 text-center" href="https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                            {t('jungle-bar:btn7')}
                        </Link>
                    </div>
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}