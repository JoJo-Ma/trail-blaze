import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
    Bars3Icon, XMarkIcon, CalendarIcon, MapPinIcon,
} from '@heroicons/react/24/outline';
import {
    FaMountain, FaChartBar, FaWhatsapp, FaCampground,
} from 'react-icons/fa';
import { PiMicrophoneStageFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { Background1, Background2 } from '../BackgroundColors';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

const cards = [
    {
        name: 'Trail Blaze Adventures',
        description: 'An expedition travel agency and tailor-made camps in unique venues.',
        icon: FaMountain,
    },
    {
        name: 'Trail Blaze Coaching',
        description: 'A data driven program to bring you to the next level of performance & help you achieving your goals. ',
        icon: FaChartBar,
    },
    {
        name: 'Trail Blaze Consulting',
        description: 'Adhoc workshops & conferences to answer specific queries for individuals as companies, leveraging on the power of sport to gather, motivate and foster innovation.',
        icon: PiMicrophoneStageFill,
    },
];

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                    Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header> */}

            <div className="relative isolate pt-14">
                <img alt="" src="./logo-big.png" className="object-cover lg:w-1/3 w-3/4 m-auto" />
                <Background2 />
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We’re happy to announce the launch of
                                {' '}
                                <span className="text-orange-400">Trail Blaze</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
              A sports & tech company that aims to facilitate your outdoors experiences articulating throughout 3 pillars.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            {cards.map((card) => (
                                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                    <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-orange-400" />
                                    <div className="text-base leading-7">
                                        <h3 className="font-semibold text-black">{card.name}</h3>
                                        <p className="mt-2 text-gray-500">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Background1 />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <div className="flex items-center mb-1">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex">
                        Next camp&nbsp;
                            </h2>
                            <FaCampground className="w-10 h-10" />
                        </div>
                        <div className="flex items-center">
                            <MapPinIcon className="h-7 w-5 flex-none text-orange-400 mr-1" />
                            <div className="">
                            Colorado, 🇺🇸
                            </div>
                        </div>
                        <div className="flex items-center">
                            <CalendarIcon className="h-7 w-5 flex-none text-orange-400 mr-1" />
                            <div className="">
                            Oct 3-6th
                            </div>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Small group altitude training
                        </p>
                    </div>
                    <div className="w-full lg:max-w-lg lg:flex-auto">
                        <img
                            alt=""
                            src="./trail-blaze/colorado-flyer.JPG"
                            className="mt-16 h-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                        />
                    </div>
                </div>
            </div>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
                </div>
                <div className="mx-auto mt-20 max-w-lg space-y-16">
                    <div className="flex gap-x-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600">
                            <MdEmail aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
info@trailblaze.run
                            </h3>
                            <p className="mt-4">
                                <a href="mailto:info@trailblaze.run" className="text-sm font-semibold leading-6 text-orange-600">
                Send an email
                                    {' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600">
                            <FaWhatsapp aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">+19295327415</h3>
                            <p className="mt-4">
                                <a href="https://wa.me/19295327415" className="text-sm font-semibold leading-6 text-orange-600">
                Whatsapp
                                    {' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
