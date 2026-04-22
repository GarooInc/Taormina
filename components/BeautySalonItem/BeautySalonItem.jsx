"use client";
import React, { useState, useEffect, useRef } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from '@/contexts/CartContext';

const BeautySalonItem = ({ collection, noTags }) => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(null);
    const { t, i18n } = useTranslation();
    const { dispatch } = useCart();
    const currentLocale = i18n.language;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const pb = new PocketBase(`${backendUrl}`);
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // We use the collection name passed as prop, expected to be 'Beauty_Salon' or similar
                const records = await pb.collection(collection).getFullList({
                    sort: '-created',
                });
                setItems(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [collection]);

    const addToCart = (item) => {
        const payload = {
            ...item,
            Title: item[`title_${currentLocale}`],
            Variant: item.variant || "",
            Price: item.price,
        };
        dispatch({ type: 'ADD_ITEM', payload });
        // Optionally show a notification or feedback
        alert(currentLocale === 'es' ? 'Agregado al carrito' : 'Added to cart');
    };

    const uniqueTags_es = [...new Set(items?.map(item => item.tag_es))].filter(Boolean).sort((a, b) => b.localeCompare(a));
    const uniqueTags_en = [...new Set(items?.map(item => item.tag_en))].filter(Boolean).sort((a, b) => b.localeCompare(a));
    const filteredItems = filter !== null ? items.filter(item => item.tag_es === filter || item.tag_en === filter) : items;
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-col gap-10 w-full pb-20'>
            {!noTags && (uniqueTags_es.length > 0 || uniqueTags_en.length > 0) &&
            <div className="relative w-full flex p-4 justify-center items-center">
                <div className="menu_arrow_left" onClick={scrollLeft}>
                    <IoIosArrowBack className="text-gray-500" />
                </div>
                <div className="w-full overflow-x-auto" ref={scrollContainerRef}>
                    <div className='items_container'>
                        <button className={`button_line ${filter === null ? 'bg-tertiary text-white' : 'text-primary'}`} onClick={() => setFilter(null)}>
                            {currentLocale === 'es' ? 'Todos' : 'All'}
                        </button>
                        {
                            currentLocale === 'es' ? uniqueTags_es.map((tag, index) => (
                                <button key={index} className={`button_line ${filter === tag ? 'bg-tertiary text-white' : 'text-primary'}`} onClick={() => setFilter(tag)}>
                                    {tag}
                                </button>
                            )) : uniqueTags_en.map((tag, index) => (
                                <button key={index} className={`button_line ${filter === tag ? 'bg-tertiary text-white' : 'text-primary'}`} onClick={() => setFilter(tag)}>
                                    {tag}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="menu_arrow_right" onClick={scrollRight}>
                    <IoIosArrowForward className="text-gray-500" />
                </div>
            </div>
            }
            <div className="adventure_container">
                {filteredItems.map((item, index) => (
                    <div key={index} className={`pb-16 gap-2 flex flex-col relative md:border-none border-primary border-b`}>
                        {
                            item.image && <img className="adventure_img" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                        }
                        <div className='flex flex-col gap-4  w-full px-4'>
                            <h3 className="adventure_title">{item[`title_${currentLocale}`]}</h3>
                            <p className="text-black text-md font-bellfont leading-6 tracking-tight" dangerouslySetInnerHTML={{ __html: item[`description_${currentLocale}`] }}></p>
                            <p className="text-primary text-lg  leading-none font-book font-bold">
                                ${item.price}
                            </p>
                            <button className='green_button w-[200px] absolute bottom-4 right-4' onClick={() => addToCart(item)}> 
                                {currentLocale === 'es' ? 'Añadir al carrito' : 'Add to cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeautySalonItem;