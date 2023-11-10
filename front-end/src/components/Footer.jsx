function Footer() {
    return (
        <>
            <footer className="bg-gray-950">
                <div className="container justify-center items-end">
                    <div className="pb-10 w-full h-full flex">
                        <div className="lg:flex-1 lg:justify-center">
                            <div className="mx-10 my-10 pt-5 w-10 h-10">
                                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <img src="favicon.png" alt="logo" className="max-w-full hidden dark:block" />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <div className="mx-auto pt-20">
                                <p className="text-gray-500">Feito com ❤ RainbowCare&copy; 2023</p>
                            </div>
                        </div>
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className="mx-10 my-10 pt-10 w-10 h-10">
                                <a href="https://github.com/Rayaninha/RainbowCare" className="mb-6 inline-block max-w-[160px] rounded-full p-2 
                                bg-fuchsia-200 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
                                    <img src="git-icon.png" alt="logo" className="max-w-full hidden dark:block" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;