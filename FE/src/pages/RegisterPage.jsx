import Button from '../components/ButtonForm';

export default function RegisterPage() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center dark:bg-[#121212] dark:text-white'>
            <div className='w-[70%] flex flex-col justify-center items-center'>
                <h2 className='font-bold text-xl lg:text-2xl tracking-wider dark:text-white'>
                    LOGIN
                </h2>
                <form action='' className='w-[60%] space-y-5'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='username'
                            className='ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                            autoComplete='off'
                        />
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                message
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor=''>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='********'
                            className='ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                            autoComplete='off'
                        />
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                message
                            </span>
                        </div>
                    </div>
                    <Button text={'LOGIN'} />
                </form>
            </div>
        </div>
    );
}
