"use client";
import React, { useState, useEffect } from 'react'
import FooterItem from '@/components/FooterItem/FooterItem'
import TranslationsProvider from '@/components/TranslationsProvider'
import initTranslations from '@/app/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import ExperienceInnerItem from '@/components/ExperienceInnerItem/ExperienceInnerItem';
import HeaderItem from '@/components/HeaderItem/HeaderItem';
const namespaces = ['experience', 'header'];
export default function Experience({ params: { locale, experienceId }}) {
    const [translations, setTranslations] = useState({ t: () => '', resources: {} });

    // Carga las traducciones
    useEffect(() => {
      const loadTranslations = async () => {
        const { t, resources } = await initTranslations(locale, namespaces);
        setTranslations({ t, resources });
      };
      loadTranslations();
    }, [locale]);
  
    const { t, resources } = translations;


  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <div className="page bg-white relative min-h-screen justify-between">
        <HeaderItem v={"v2"} transparent nav={"/amenities"} />
          <div className='w-full text-center h-full'>
              <ExperienceInnerItem experienceId={experienceId} />
          </div>
        <LanguageSwitcher />
        <div className={`w-full flex justify-center items-center md:p-8 p-4 bottom-0`}>
          <img src={`/assets/images/logo_v2.png`} alt="logo" className="w-[80px]" /> 
        </div>
    </div>
    </TranslationsProvider>
  )
}