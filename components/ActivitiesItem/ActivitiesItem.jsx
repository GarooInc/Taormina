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
                setActivities(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])


  return (
    <div className="activities_container">
        {(tag ? activities.filter(item => item.tag === tag) : activities.filter(item => ["bar-events", "casino", "restaurant"].includes(item.tag))).map((item, index) => (
                <div 
                key={index} 
                className={`bg-white md:h-full h-60 flex md:flex-col relative cursor-pointer shadow-md rounded-md`}>
                    <div className='flex justify-center w-full items-center'>
                        <img className="h-60 object-cover w-full md:rounded-t-md rounded-l-md" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                    </div>
                    <div className='flex flex-col gap-4 w-full p-4'>
                        <h3 className="font-book uppercase text-black">{item[`title_${currentLocale}`]}</h3>
                        {
                            item.location_es || item.location_en ? (
                                <div className="activities_inner_container">
                                    <FaLocationDot className="icon_activities text-md " />
                                    <p className='activities_inner_text'>{item[`location_${currentLocale}`]}</p>
                                </div>
                            ) : null
                        }
                        {
                            item.date_es || item.date_en ? (
                                <div className="activities_inner_container">
                                    <FaRegCalendar className="icon_activities text-md" />
                                    <p className='activities_inner_text'>{item[`day_${currentLocale}`]}</p>
                                </div>
                            ) : null
                        }
                        {
                            item.date_es || item.date_en ? (
                                <div className="activities_inner_container">
                                    <BsClock className="icon_activities text-md" />
                                    <p className='activities_inner_text'>{item[`date_${currentLocale}`]}</p>
                                </div>
                            ) : null
                        }
                    </div>
                    <a 
                    href={
                        item.link ? item.link :
                        item.tel ? `tel:+${item.tel}` :
                        ""
                    }
                    className="activities_btn">{currentLocale === 'en' ? 'Book Now' : 'Reservar'}
                    </a>
                </div>
            ))
        }
    </div>
  )
}

export default ActivitiesItem