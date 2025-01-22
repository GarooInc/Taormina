"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation"




const FoodDrinksItem = () => {
    const [foodDrinks, setFoodDrinks] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const pb = new PocketBase(backendUrl);
    pb.autoCancellation(false);

    const router = useRouter();

    const openMenuPdf = (item) => {
        const url = (`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.menu_pdf}?token=`);
        window.open(url, '_blank');
    };

    const openWineMenuPdf = (item) => {
        const url = (`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.menu_wine_pdf}?token=`);
        window.open(url, '_blank');
    };

    
    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Food_Drinks').getFullList({
                    sort: 'order_num',
                });
                setFoodDrinks(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    


    return (
        <div className="food_container">
            {foodDrinks.map((item, index) => (
                <div key={index} className='main_info_container_inner'>
                    <img className="food_drinks_img" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.cover_img}?token=`} alt={item.name} />
                    <div className='main_info_container'>
                        <h3 className="food_drinks_title">{item[`title_${currentLocale}`]}</h3>
                        <div className='food_drinks_description_container'>
                            <div className="food_drinks_description" dangerouslySetInnerHTML={{ __html: item[`description_${currentLocale}`] }}></div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                            <button className="menu_btn bg-secondary" onClick={() => openMenuPdf(foodDrinks[0])}>{t('food_drinks:btn1')}</button>
                            <button className="menu_btn bg-secondary" onClick={() => openWineMenuPdf(foodDrinks[0])}>{t('food_drinks:btn2')}</button>
                            <a className="menu_btn bg-secondary" onClick={() => router.push('/room-services')} >{t('food_drinks:btn3')}</a>
                            <button className="menu_btn bg-secondary" onClick={() => router.push('https://api.whatsapp.com/send/?phone=50660427116&text&type=phone_number&app_absent=0')} >{t('food_drinks:btn4')}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodDrinksItem
