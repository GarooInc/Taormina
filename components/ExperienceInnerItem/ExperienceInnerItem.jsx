import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';

const ExperienceInnerItem = ({ experienceId }) => {
    const [experience, setExperience] = useState('');
    const [loading, setLoading] = useState(true);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const pb = new PocketBase(backendUrl);
    pb.autoCancellation(false);

    const current = experienceId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const record = await pb.collection('Amenities').getOne(current);
                setExperience(record);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [current]);

    return (
        <div className="w-full">
            {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
            ) : (
                <div className="flex flex-col justify-center md:flex-row w-full items-stretch">
                    {/* Imagen */}
                    <div className="w-full relative flex flex-col justify-center items-center md:w-1/2">
                        <img
                            className="w-full object-cover md:h-[600px] h-80"
                            src={`${backendUrl}/api/files/${experience.collectionId}/${experience.id}/${experience.image}?token=`}
                            alt={experience.name}
                        />
                        <div className="md:hidden">
                            <h3 className="principal_title flex justify-center items-center uppercase p-4">
                                {experience[`title_${currentLocale}`]}
                            </h3>
                        </div>
                    </div>
                    {/* Contenido */}
                    <div className="px-10 bg-cream md:w-1/2 flex flex-col justify-start items-start min-h-[400px] flex-grow-0">
                        <h1 className="text-2xl md:text-4xl text-start text-primary font-book font-bold">
                            {experience.title}
                        </h1>
                        <div className="md:block hidden">
                            <h3 className="principal_title flex justify-center items-center uppercase p-4">
                                {experience[`title_${currentLocale}`]}
                            </h3>
                        </div>
                        <div
                            className="text-black md:px-0 gap-8 flex flex-col experiences"
                            dangerouslySetInnerHTML={{
                                __html: experience[`description_${currentLocale}`],
                            }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceInnerItem;
