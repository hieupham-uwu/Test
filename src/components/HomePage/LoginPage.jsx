import clsx from 'clsx';
import { Link } from 'react-router-dom';

function LoginPage() {
    const inputStyle = clsx('mt-2 h-9 w-full rounded-md border px-3 focus:outline-indigo-600');
    return (
        <div className="container mx-auto">
            <div className="mx-auto mt-14 flex w-96 flex-col">
                <div className="mx-auto flex">
                    <Link to="/">
                        <img
                            className="size-10"
                            src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
                            alt=""
                        />
                    </Link>
                </div>
                <h2 className="mt-5 text-center text-xl font-semibold">Sign in to your account</h2>
                <form className="mt-5 flex w-full flex-col px-4" action="/" method="">
                    <label className="text-sm  " htmlFor="">
                        Email address
                    </label>
                    <div>
                        <input name="email" className={inputStyle} type="text" />
                    </div>
                    <label htmlFor="" className=" mt-5 flex justify-between text-sm  ">
                        <h1>Password</h1>
                        <h1 className="cursor-pointer font-medium text-indigo-600">Forgot password?</h1>
                    </label>
                    <div>
                        <input name="password" className={inputStyle} type="text" />
                    </div>
                    <button type="submit" className="mt-5 h-9 cursor-pointer rounded-md bg-indigo-600 text-white">
                        Sign In
                    </button>
                    <div className="fl mx-auto mt-5 justify-center text-sm">
                        Not a member?{' '}
                        <h2 className="inline cursor-pointer pl-1 font-semibold text-indigo-600">
                            Start a 14 day free trial
                        </h2>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
