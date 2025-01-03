import { motion } from 'motion/react';
import Card from '/src/components/Card';
import { useState, useEffect } from 'react';

export default function ProjectComponent() {
    const api = '/data.json';

    const [datas, setDatas] = useState();

    const handleApi = async () => {
        try {
            const set = await fetch(api);
            const res = await set.json();
            setDatas(res);
        } catch (err) {
            console.log('error fetch', err);
        }
    };

    useEffect(() => {
        handleApi();
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='inline-block relative'
            >
                <h2 className='font-bold text-2xl lg:text-3xl tracking-wider'>
                    PROJECTS
                </h2>
                <div className='absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500'></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <p className='lg:text-2xl text-center'>
                    Here you will find some of the personal and clients projects
                    that I created with each project containing its own case
                    study
                </p>
            </motion.div>
            <div className='w-[75%] mt-9 space-y-8 overflow-hidden'>
                {datas &&
                    datas.data
                        .slice(0, 3)
                        .map((data) => (
                            <Card
                                key={data.id}
                                image={data.image}
                                title={data.title}
                                description={data.description}
                                link={`/subdomain/projects/${data.id}`}
                            />
                        ))}

                <div className='text-center p-4'>
                    <a
                        href='/projects'
                        className='text-violet-500 hover:text-violet-500/80'
                    >
                        See More!
                    </a>
                </div>
            </div>
        </>
    );
}
