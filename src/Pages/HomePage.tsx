import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Trail Blaze Adventures',
        href: 'adventures',
        description:
        'Expedition Facilitator : from picking the unique place to designing the perfect experience for your next travel',
        imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    },
    {
        id: 2,
        title: 'Trail Blaze Coaching',
        href: 'coaching',
        description:
        'Personalized training programs & follow-up : based on science, expertise and passion',
        imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    },
    {
        id: 3,
        title: 'Trail Blaze consulting',
        href: 'consulting',
        description:
        'Answering ad hoc requests from companies & individuals : team building events, endurance conferences, running workshops…',
        imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    },
    // More posts...
];

function HomePage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trail Blaze</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
            Ever blazin' ever blazin' girl, yo, as the world turns, and as time burns - Sean Paul
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <Link to={post.href} className="relative w-full">
                                <img
                                    alt=""
                                    src={post.imageUrl}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </Link>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link to={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
