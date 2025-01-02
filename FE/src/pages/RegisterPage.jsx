import Button from '../components/ButtonForm';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { registerSchema } from '../lib/zod';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((password) => !password);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((password) => !password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleRegisterForm = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        const result = registerSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.errors.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                return acc;
            }, {});
            setErrors(fieldErrors);
            setIsSubmit(false);
        } else {
            setErrors({});
            setIsSubmit(false);
            console.log('Form Data:', formData);
        }
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center dark:bg-[#121212] dark:text-white'>
            <div className='w-[90%] lg:w-[70%] flex flex-col justify-center items-center'>
                <h2 className='font-bold text-xl lg:text-2xl tracking-wider dark:text-white'>
                    Register
                </h2>
                <form
                    onSubmit={handleRegisterForm}
                    className='w-[80%] lg:w-[60%] space-y-1'
                >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='fullname'>Fullname</label>
                        <input
                            type='text'
                            id='fullname'
                            name='fullname'
                            placeholder='fullname'
                            className='ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                            autoComplete='off'
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                {errors.fullname || ''}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='username'
                            className='ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                            autoComplete='off'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                {errors.username || ''}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='janedoe@gmail.com'
                            className='ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                            autoComplete='off'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                {errors.email || ''}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                placeholder='********'
                                className='w-full ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                                autoComplete='off'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div
                                className='absolute top-2 right-2 cursor-pointer'
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                {errors.password || ''}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='confirmPassword'>
                            Confirm Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                name='confirmPassword'
                                placeholder='********'
                                className='w-full ring-1 rounded-sm ring-fuchsia-500 px-2 py-1 focus:outline-none focus:ring-fuchsia-400'
                                autoComplete='off'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <div
                                className='absolute top-2 right-2 cursor-pointer'
                                onClick={handleShowConfirmPassword}
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </div>
                        </div>
                        <div aria-live='polite' aria-atomic='true'>
                            <span className='text-sm text-red-500 mt-2 ml-1'>
                                {errors.confirmPassword || ''}
                            </span>
                        </div>
                    </div>
                    <Button
                        text={'Registering...'}
                        textDisable={'Register'}
                        isSubmit={isSubmit}
                    />
                </form>
            </div>
        </div>
    );
}
