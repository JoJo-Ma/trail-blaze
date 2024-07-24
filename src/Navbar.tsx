import React, { useState } from 'react';
import {
    Popover, PopoverButton, PopoverGroup, PopoverPanel, Dialog, DialogPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Outlet, Link } from 'react-router-dom';

const features = [
    {
        name: 'Analytics',
        href: '#',
        description: 'Get a better understanding of where your traffic is coming from.',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        href: '#',
        description: 'Speak directly to your customers in a more meaningful way.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon,
    },
    {
        name: 'Integrations',
        href: '#',
        description: "Connect with third-party tools that you're already using.",
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        href: '#',
        description: 'Build strategic funnels that will drive your customers to convert',
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/trail-blaze">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto sm:h-10"
                        />
                    </Link>
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
                    <Link to="adventures" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Trail Blaze Adventures
                    </Link>

                    <Link to="coaching" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Trail Blaze Coaching
                    </Link>

                    <Popover className="relative">
                        <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                            <span>Trail Blaze Consulting</span>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-0"
                        >
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {resources.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        >
                                            <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {recentPosts.map((item) => (
                                                <li key={item.id} className="truncate text-base">
                                                    <a href={item.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-5 text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            View all posts
                                            <span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in
                        {' '}
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
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
                                {/* {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))} */}
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
        </header>
    );
}
