import { useForm } from "react-hook-form";

const Search = ({ setSearchData, refetch }) => {
    const { register, handleSubmit } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        let queryString = "?";
        for (const key in data) {
            if (data[key]) {
                queryString += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
            }
        }
        if (queryString.length > 1) {
            queryString = queryString.slice(0, -1);
        }
        console.log(data);
        setSearchData(queryString);
        refetch();
    };

    return (
        <form className="p-2" onChange={handleSubmit(onSubmit)}>
            <div className="w-full lg:flex gap-x-1">
                <div className="w-3/5">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="SearchTerm" required {...register('searchTerm')} />
                    </div>
                </div>

                <div className="md:mt-2 lg:mt-0">
                    <select id="maxPrice" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('maxPrice')}>
                        <option value="" selected>MAX Price</option>
                        <option value="10">10</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                        <option value="10000">10000</option>
                    </select>
                </div>
                <div className="my-2 lg:my-0">
                    <select id="minPrice" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('minPrice')}>
                        <option value="" selected>Min Price</option>
                        <option value="10">10</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                        <option value="10000">10000</option>
                    </select>
                </div>
                <div>
                    <select id="condition" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('condition')}>
                        <option value="" selected>Condition</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="grid md:flex gap-3 my-4">
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1'>Category</p>
                        <select id="category" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('category')}>
                            <option value="" selected>All</option>
                            <option value="RAM">RAM</option>
                            <option value="monitors">Monitors</option>
                            <option value="graphics cards">Graphics Cards</option>
                            <option value="cpu">CPU</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1'>Brand</p>
                        <select id="brand" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('brand')}>
                            <option value="" selected>All Brand</option>
                            <option value="Asus">Asus</option>
                            <option value="Intel">Intel</option>
                            <option value="Asus">Asus</option>
                            <option value="Rog">Rog</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1'>Interface</p>
                        <select id="interface" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('interface')}>
                            <option value="" selected>All</option>
                            <option value="USB">USB</option>
                            <option value="HDMI">HDMI</option>
                            <option value="Thunderbolt">Thunderbolt</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1'>Form Factor</p>
                        <select id="budget" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('budget')}>
                            <option value="" selected>All</option>
                            <option value="ATX">ATX</option>
                            <option value="MicroATX">MicroATX</option>
                            <option value="Mini-ITX">Mini-ITX</option>
                            <option value="EATX">EATX</option>
                            <option value="SFX">SFX</option>
                            <option value="TFX">TFX</option>
                            <option value="CFX">CFX</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1'>Compatibility</p>
                        <select id="compatibility" className="border font-medium border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" {...register('compatibility')}>
                            <option value="" selected>All</option>
                            <option value="Windows">Windows</option>
                            <option value="Mac">Mac</option>
                            <option value="Linux">Linux</option>
                        </select>
                    </div>
                    <div className='flex items-end'>
                        <button type="submit" className='bg-[rgb(0,174,255)] text-white rounded px-6 py-2 font-bold'>Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Search;
