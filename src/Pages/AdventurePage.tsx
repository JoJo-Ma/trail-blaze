import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule,
    Marker,
} from 'react-simple-maps';

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/20/solid';

import json from '../assets/map.json';

const locations = [
    {
        id: 0,
        title: 'The Grand Valley Tour',
        subtitle: 'Grand Junction',
        date: 'Oct 3-6 2024',
        location: 'Grand Junction, Colorado',
        country: 'United States',
        coordinates: [-108.5506, 39.0639],
        description: 'Join us for a vibrant and scenic adventure through the heart of Grand Junction. Experience the breathtaking landscapes, rich history, and warm community spirit of Colorado’s Grand Valley. It’s the perfect getaway to recharge and create lasting memories.',
    },
    {
        id: 1,
        title: 'The Lion King',
        subtitle: 'Altitude training camp',
        date: 'Jan 2025',
        location: 'Iten',
        country: 'Kenya',
        coordinates: [35.5103, 0.6714],
        description: 'Embrace the spirit of a champion at our altitude training camp in Iten. Nestled in the serene landscapes of Kenya, this camp offers a unique opportunity to train like the best in the world, surrounded by natural beauty and the inspiring culture of Iten. Perfect for those seeking to elevate their fitness and well-being.',
    },
    {
        id: 2,
        title: 'Tour of the 7 lakes',
        subtitle: 'Patagonia',
        date: 'March 2025',
        location: 'Patagonia',
        country: 'Argentina',
        coordinates: [-68.9063, -41.8101],
        description: 'Discover the enchanting beauty of Patagonia with our Tour of the 7 Lakes. This journey through Argentina’s most picturesque landscapes promises tranquility, adventure, and a deep connection with nature. Join us for an unforgettable experience where every turn reveals a new breathtaking view.',
    },
    {
        id: 3,
        title: 'Pico to Pico',
        subtitle: 'Elevation workshops following the MIUT',
        date: 'April 2025',
        location: 'Madeira Island',
        country: 'Portugal',
        coordinates: [-16.9595, 32.7607],
        description: 'Explore the peaks of Madeira Island with our Pico to Pico workshops. Following the MIUT, this adventure is designed for those who seek to challenge themselves while soaking in the island’s majestic beauty. Enjoy the warm hospitality of Portugal and the thrill of reaching new heights.',
    },
    {
        id: 4,
        title: 'Everest stage adventure',
        subtitle: 'A real expedition around the highest summit of the world',
        date: 'May 2025',
        location: 'Everest',
        country: 'Nepal',
        coordinates: [86.9250, 27.9881],
        description: 'Embark on the ultimate adventure with our Everest stage expedition. This journey around the world’s highest summit offers a unique blend of challenge, beauty, and cultural immersion. Experience the awe-inspiring grandeur of Everest and the warm, welcoming spirit of Nepal.',
    },
];

export default function AdventurePage() {
    const [selectedLocation, setSelectedLocation] = useState(0);

    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <ComposableMap
                            projectionConfig={{
                                rotate: [-10, 0, 0],
                                scale: 147,
                            }}
                        >
                            <Sphere stroke="#E4E5E6" strokeWidth={0.1} />
                            <Graticule stroke="#E4E5E6" strokeWidth={0.2} />
                            <Geographies geography={json}>
                                {({ geographies }) => geographies.map((geo) => {
                                    console.log(geo);

                                    const hasLocation = locations.some((location) => location.country === geo.properties.name); 
                                    const fill = hasLocation ? '#CDD' : '#EEE';


                                    return (
                                        <Geography
                                            className={`${hasLocation ? 'cursor-pointer' : ''}`}
                                            onClick={() => {
                                                const location = locations.find((loc) => loc.country === geo.properties.name);
                                                if (location) {
                                                    setSelectedLocation(location.id);
                                                }
                                            }}
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={fill}
                                            stroke="#FFF"
                                            strokeWidth={0.5}
                                            style={{
                                                default: {
                                                    fill,
                                                    outline: 'none',
                                                },
                                                hover: {
                                                    fill,
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill,
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    );
                                })}
                            </Geographies>
                            {locations.map((location) => (
                                <Marker
                                    className="cursor-pointer"
                                    key={location.title}
                                    coordinates={location.coordinates}
                                    onClick={() => {
                                        setSelectedLocation(location.id);
                                    }}
                                >
                                    <g
                                        fill="transparent"
                                        stroke={
                                            selectedLocation === location.id ? '#F53' : '#1FF'
                                        }
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(-12, -24)"
                                    >
                                        <circle cx="12" cy="10" r="3" />
                                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                    </g>
                                    {
                                        selectedLocation === location.id && (
                                            <text
                                                y={15}
                                                textAnchor="middle"
                                                style={{ fontFamily: 'system-ui', fill: '#5D5A6D', fontSize: '12px', pointerEvents: 'none' }}
                                            >
                                                {location.location}
                                                ,&nbsp;
                                                {location.country}
                                            </text>
                                        )
                                    }
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Find your next adventure</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our upcoming trips</h1>
                        <span className="isolate inline-flex rounded-md shadow-sm mt-4">
                            <button
                                type="button"
                                className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                onClick={() => {
                                    const prevLocation = selectedLocation === 0
                                        ? locations.length - 1
                                        : selectedLocation - 1;
                                    setSelectedLocation(prevLocation);
                                }}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                onClick={() => {
                                    const nextLocation = selectedLocation === locations.length - 1
                                        ? 0
                                        : selectedLocation + 1;
                                    setSelectedLocation(nextLocation);
                                }}
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </span>
                        <div className="mt-6 p-2 space-y-6">
                            {locations.map((location) => {
                                if (selectedLocation !== location.id) {
                                    return null;
                                }
                                return (
                                    <div key={location.id} className="flex flex-col space-y-4">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{location.title}</h2>
                                        <p className="text-lg leading-7 text-gray-600">{location.subtitle}</p>
                                        <p className="text-lg leading-7 text-gray-600">{location.date}</p>
                                        <p className="text-lg leading-7 text-gray-600">{location.location}</p>
                                        <p className="text-lg leading-7 text-gray-600">{location.country}</p>
                                        <p className="text-lg leading-7 text-gray-600">{location.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
