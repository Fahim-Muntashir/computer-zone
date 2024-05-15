import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { usePostProductMutation } from '../../../redux/features/product/productApi';
import { TInputs } from '../../../Types';


const ProductForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TInputs>({
        defaultValues: {
            "name": "Example Product",
            "price": 99.99,
            "quantity": 10,
            "category": "Electronics",
            "brand": "Example Brand",
            "compatibility": "Universal",
            "interfaceType": ["USB", "Bluetooth"],
            "condition": "New",
            "capacity": "128GB",
            "color": "Black",
            "formFactor": "Portable"
        }
    });

    const [addProduct, { error }] = usePostProductMutation();

    if (error) {
        console.log("error");
    }

    const onSubmit: SubmitHandler<TInputs> = (data) => {

        const res = addProduct(data)

        console.log(res);

    };

    return (
        <section className="py-1 bg-blueGray-50 lg:w-5/6 mx-auto">
            <div className="w-full px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Add Product for Sale!
                            </h6>
                            <button
                                className=" text-white 
                    bg-blue-500
                    active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Save News
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto mt-8">

                            <div className="lg:flex gap-x-3">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        News Subtitle
                                    </label>
                                    <input
                                        placeholder='Price $'
                                        {...register("price", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.price && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        Name
                                    </label>
                                    <input
                                        placeholder="Prodcut Name"
                                        {...register("name", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>

                            <div className="lg:flex gap-x-3">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        quantity                                    </label>
                                    <input
                                        placeholder='Quantity'
                                        {...register("quantity", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.quantity && <span className="text-red-500">This field is required</span>}
                                </div>
                                {/* category */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        Category                                        </label>
                                    <input
                                        placeholder='Category'
                                        {...register("category", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.category && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>

                            <div className="lg:flex gap-x-3">

                                {/* quantity */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        Brand
                                    </label>
                                    <input
                                        placeholder='Brand'
                                        {...register("brand", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.brand && <span className="text-red-500">This field is required</span>}
                                </div>

                                {/* Compatibility */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        Compatibility                                    </label>
                                    <input
                                        placeholder='Compatibility'
                                        {...register("compatibility", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.compatibility && <span className="text-red-500">This field is required</span>}


                                </div>
                                {/* interfaceType */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >  News Subtitle
                                    </label>
                                    <input
                                        placeholder='interfaceType'
                                        {...register("interfaceType", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.interfaceType && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>

                            <div className='lg:flex gap-x-3'>

                                {/* condition */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >
                                        Condititon
                                    </label>
                                    <input
                                        placeholder='condition'
                                        {...register("condition", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.condition && <span className="text-red-500">This field is required</span>}
                                </div>

                                {/* capacity */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >  News Subtitle
                                    </label>
                                    <input
                                        placeholder='capacity'
                                        {...register("capacity", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.capacity && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>


                            <div className='lg:flex gap-x-3'>
                                {/* color */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >  color
                                    </label>
                                    <input
                                        placeholder='color'
                                        {...register("color", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.color && <span className="text-red-500">This field is required</span>}

                                </div>
                                {/* formFactor */}
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="subtitle"
                                    >  News Subtitle
                                    </label>
                                    <input
                                        placeholder='formFactor'
                                        {...register("formFactor", { required: true })}
                                        className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                                    />
                                    {errors.formFactor && <span className="text-red-500">This field is required</span>}
                                </div>

                            </div>

                            {/* Add more fields for other product attributes as needed */}

                            <input type="submit" value="Submit" className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer" />
                        </form>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default ProductForm;
