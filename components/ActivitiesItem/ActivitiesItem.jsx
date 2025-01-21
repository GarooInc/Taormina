"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { FaLocationDot } from "react-icons/fa6"
import { FaRegCalendar } from "react-icons/fa6"
import { BsClock } from "react-icons/bs";
import { useTranslation } from 'react-i18next'


const ActivitiesItem = ({tag}) => {
    const [activities, setActivities] = useState([])
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const pb = new PocketBase(backendUrl);
    pb.autoCancellation(false);

    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Activities').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setActivities(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])


  return (
    <div className="activities_container">
        { 
            activities.filter(item => item.tag === tag).map((item, index) => (
                <div 
                key={index} 
                className={`bg-white gap-2 md:h-full h-60 flex md:flex-col relative cursor-pointer shadow-md rounded-md`}>
                    <div className='flex justify-center w-full items-center'>
                        <img className="h-60 object-cover w-full md:rounded-t-md rounded-l-md" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                    </div>
                    <div className='flex flex-col gap-4 w-full p-4'>
                        <h3 className="font-book uppercase text-black">{item[`title_${currentLocale}`]}</h3>
                        <div className="activities_inner_container">
                            <FaLocationDot className="icon_activities text-md " />
                            <p className='activities_inner_text'>{item[`location_${currentLocale}`]}</p>
                        </div>
                        <div className="activities_inner_container">
                            <FaRegCalendar className="icon_activities text-md" />
                            <p className='activities_inner_text'>{item[`day_${currentLocale}`]}</p>
                        </div>
                        <div className="activities_inner_container">
                            <BsClock className="icon_activities text-md" />
                            <p className='activities_inner_text'>{item[`date_${currentLocale}`]}</p>
                        </div>
                    </div>
                    <button className="absolute bottom-2 right-2 bg-secondary text-primary p-2 rounded-md font-book text-xs">{currentLocale === 'en' ? 'Book Now' : 'Reservar'}</button>
                </div>
            ))
        }
    </div>
  )
}

export default ActivitiesItem