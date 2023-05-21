/* =============================
            Footer
================================= */

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year);
    return (
        <footer className="bg-white">
            <div className="w-[80%] mx-auto py-8 lg:py-24 grid lg:grid-cols-3 mt-20 lg:mt-28 relative gap-4 lg:gap-0">
                <ul className="space-y-3 lg:self-center">
                    <li className="text-[15px] list-none text-[#8b6753] font-semibold">About</li>
                    <li className="text-[15px] list-none text-[#8b6753] font-semibold">Contact us</li>
                    <li className="text-[15px] list-none text-[#8b6753] font-semibold">Terms of use</li>
                    <li className="text-[15px] list-none text-[#8b6753] font-semibold">Privacy policy</li>
                    <li className="text-[15px] list-none text-[#8b6753] font-semibold">FAQ</li>
                </ul>
                <h1 className="ts-heading text-2xl lg:text-4xl flex items-center justify-between order-first lg:order-none">Toylandia Playland</h1>
                <div className="lg:justify-self-end lg:self-center">
                    <p className="text-[15px] text-[#8b6753] mb-3  font-semibold">Toylandia Industries Ltd.</p>
                    <p className="text-[15px] text-[#8b6753] mb-3  font-semibold">Providing reliable products since 2001</p>
                    <p className="text-[15px] text-[#8b6753] mb-3  font-semibold">Copyright &copy; {year} - All right reserved</p>
                    <div className="grid grid-flow-col gap-4 mt-10">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current ts-heading"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current ts-heading"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current ts-heading"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div className="w-[20px] h-[20px] rounded-full circle-1 bg-[#e2d3bb] absolute top-1/4 left-1/2"></div>
                <div className="w-[20px] h-[20px] rounded-full circle-2 bg-[#80311a] absolute top-1/2 left-1/4"></div>
                <div className="w-[20px] h-[20px] rounded-full circle-3 bg-[#e9d147] absolute bottom-1/4 right-1/4"></div>
            </div>
        </footer>
    );
};

export default Footer;