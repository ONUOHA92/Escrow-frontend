import React from 'react';

const ForgottenPassword = () => {
    return (
        <>
            {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-900">
      <body class="h-full">
      ```
    */}
            <div className=' h-full bg-white'>
                {/* <div className='flex justify-end pr-6'>
                <ArrowLeftIcon className="h-6 w-6 text-black" />
            </div> */}

                <div className='mt-[7%]'>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-900">
                                Enter your email
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-1 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-purple-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-400">
                                login if you have an account{' '}
                                <a href="/login" className="font-semibold leading-6 text-purple-900 hover:text-purple-500">
                                    login
                                </a>
                            </p>
                            <p className="mt-10 text-center text-sm text-gray-400">
                                <a href="/" className="font-semibold leading-6 text-purple-900 hover:text-purple-500">
                                    Back to home
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ForgottenPassword;