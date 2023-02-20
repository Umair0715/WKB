import LoginBg from 'assets/images/loginBg.jpg';
import useInput from 'hooks/useInput';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setIsLoginPage }) => {
    const navigate = useNavigate();
    const [email , setEmail , bindEmail , resetEmail] = useInput('');
    const [password , setPassword , bindPassword , resetPassword] = useInput('');

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/');
    }

    useEffect(() => {
        setIsLoginPage(true);
        return () => setIsLoginPage(false);
    }, [])

    return (
        <div className='w-full min-h-screen fixed top-0 left-0  flex items-center justify-center bg-primary'
        // style={{
        //     backgroundImage : `url(https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg)` ,
        //     backgroundSize : "cover" ,
        //     backgroundPosition : 'center center'
        // }}
        >
            <div className='flex rounded-md bg-pure lg:w-[70%] w-[95%]'>
                <div className='flex-1 sm:block hidden relative rounded-tl-md rounded-bl-md'
                    style={{
                        backgroundImage : `url(${LoginBg})` ,
                        backgroundSize : "cover" ,
                        backgroundPosition : 'center center'
                    }}
                >
                    <div className='absolute top-0 left-0 bg-purple-800 bg-opacity-20 w-full h-full'></div>
                    <div className='flex items-center justify-center h-full relative flex-col z-20'>
                        <h3 className='text-4xl text-pure font-semibold'>Hi , ADMIN</h3>
                        <p className='lg:w-[60%] w-[80%] mx-auto text-center text-gray-200 mt-4'>Please login your account to access your dashboard.</p>
                    </div>

                </div>
                <div className='flex-1'>
                    <div className=' px-6 '>
                        <div className='text-center flex flex-col gap-3 text-sm text-grayText pt-6'>
                            <h3 className='text-3xl text-dark font-semibold uppercase'>Sign In</h3>
                            <span>Sign in to an Admin Account</span>
                        </div>
                        <form className='flex flex-col gap-6 py-8' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2'>
                                {/* <label htmlFor="email" className='text-[15px] font-medium text-dark'>Your Email</label> */}
                                <input 
                                type="email" 
                                id="email" 
                                placeholder='Your Email' 
                                className='border py-3 px-4 rounded-full placeholder:text-grayText placeholder:font-medium placeholder:text-[17px] outline-none focus:border-primary'
                                {...bindEmail}
                                required
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                {/* <label htmlFor="password" className='text-[15px] font-medium text-dark'>Password</label> */}
                                <input 
                                type="password" 
                                id="password" 
                                placeholder='Your Password' 
                                className='border py-3 px-4 rounded-full placeholder:text-grayText placeholder:font-medium placeholder:text-[17px] outline-none focus:border-primary'
                                {...bindPassword}
                                required
                                />
                            </div>
                            <div className='flex items-center gap-2 text-grayText'>
                                <input id='remember' type="checkbox" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <div>
                                <button type='submit' className='bg-primary  py-2.5 text-pure uppercase font-semibold w-full text-center rounded-full hover:bg-primaryHover' >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center justify-between border-t py-6'>
                            <div className='text-grayText text-[15px]'>
                                <p>Email : Admin@admin.com</p>
                                <p className='mt-0.5'>Password : 12345678</p>
                            </div>
                            <div className='bg-primary py-2 px-4 rounded-md text-xl text-pure cursor-pointer hover:bg-primaryHover'
                            onClick={() => {
                                setEmail('Admin@admin.com');
                                setPassword('12345678');
                                toast.success('Text copied.')
                            }}
                            >
                                <i className="uil uil-copy"></i>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    )
}

export default Login