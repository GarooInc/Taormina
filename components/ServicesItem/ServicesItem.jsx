"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';

const ServicesItem = ({collection}) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [data, setData] = useState([]);
    const [actualProduct, setActualProduct] = useState({});
    const pb = new PocketBase(`${backendUrl}`);
    pb.autoCancellation(false);

    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection(collection).getFullList({
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 grid-cols-1 gap-4  w-full p-10">
              {  
                data.map((item, index) => (
                    <div className='flex bg-gray-50 rounded-md' key={index}>
                        <a className='flex gap-4 justify-start items-center'>
                            <img className="xl:w-40 xl:h-40 w-28 rounded-md object-cover" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                            <div className='flex flex-col gap-2'>
                                <span className='text-secondary font-bellfont text-lg'>{item[`title_${currentLocale}`]}</span>
                                <span className='text-black font-bellfont infodisplay text-sm' dangerouslySetInnerHTML={{ __html: item[`description_${currentLocale}`] }}></span>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default ServicesItem;