import React from 'react'
import Section from '../components/Section'
import Heading from '../components/Heading'
import { benefits } from '../constants'

import Arrow from '../assets/svg/Arrow'
import { GradientLight } from '../components/design/Benefits'

import ClipPath from '../assets/svg/ClipPath'

const Benefits = () => {
    return (
        <Section id={"features"}>
            <div className='container relative z-2'>
                <Heading
                    className={"md:max-w-md lg:max-w-2xl"}
                    title="Chat Smarter not Harder with Brainwave"
                />


                <div className='flex flex-wrap gap-6 mb-10'>
                    {benefits.map((item) => (
                        <div
                            key={item.id}
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                        >
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                <h5 className='mb-5 h5'>{item.title}</h5>
                                <p className='mb-6 body-2 text-n-3'>{item.text}</p>
                                <div className='flex items-center mt-auto'>
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className='ml-auto text-xs font-bold tracking-wider uppercase font-code text-n01'>Explore more</p>
                                    <Arrow />
                                </div>
                            </div>

                            {
                                item.light &&
                                <GradientLight />
                            }

                            <div className='absolute inset-0.5 bg-n-8' style={{ clipPath: "url(#benefits)" }}>
                                <div className='absolute inset-0 transition-opacity opacity-0 hover:opacity-10'>
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className='object-cover w-full h-full'
                                        />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits