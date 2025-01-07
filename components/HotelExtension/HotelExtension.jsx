"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { useTranslation } from 'react-i18next';
import { FiPhone } from "react-icons/fi";

const HotelExtension = ({ extension, hotelName }) => {

    const [contacts, setContacts] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const pb = new PocketBase(backendUrl);
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Contacts').getFullList({
                    sort: '-created',
                });
                setContacts(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-4">
    {
        contacts.map((item, index) => (
            <div className="flex items-center gap-4 p-4 border border-primary rounded-lg shadow-sm w-60 mx-auto">
                <div className="text-primary text-2xl">
                    <FiPhone />
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-primary font-bellfont">{item.name}</h3>
                    <span className="font-medium text-primary font-book">{item.ext}</span>
                </div>
    </div>
        ))
    }
    </div>
  );
};

export default HotelExtension;