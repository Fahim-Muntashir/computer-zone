/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { TInputs } from '../../../Types';
import { Link } from 'react-router-dom';
import { TbTrashX } from 'react-icons/tb';
import { BiEdit } from 'react-icons/bi';
import { useDeleteSingleProductMutation } from '../../../redux/features/product/productApi';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const TableItem = ({ product, refetch }: { product: TInputs, refetch: any }) => {

    const id: string = product._id as string;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [deleteProductMutation] = useDeleteSingleProductMutation();
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const handleDelete = async (id: string) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async () => {
                const res = await deleteProductMutation(id);
                console.log(res);
                if (res) {
                    toast.success('Successfully Deleted!');
                    refetch();
                }
            });


        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <tbody>
            <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
                <td className="px-4 py-3">PC</td>
                <td className="px-4 py-3">Apple</td>
                <td className="px-4 py-3">300</td>
                <td className="px-4 py-3">$2999</td>
                <td className="px-4 py-3 flex items-center justify-end">
                    <button
                        id="apple-imac-27-dropdown-button"
                        className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute py-2 w-40 md:me-0 mt-24  me-60 bg-white rounded shadow-lg">

                            <li >
                                <button onClick={() => handleDelete(id)} className="px-7 py-1 text-red-700 hover:bg-gray-100 cursor-pointer flex items-center gap-3 font-light">
                                    <span className='text-xl'>
                                        <TbTrashX />
                                    </span>


                                    <span className='font-sm'>Delete Item</span>
                                </button>
                            </li>
                            <li className="">

                                <Link to={`${id}`} className="px-4 border-t py-1 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center ps-10 gap-3 font-light">
                                    <span className='text-xl'>
                                        <BiEdit />

                                    </span>
                                    <span>Edit Item</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </td>
            </tr>
        </tbody>
    );
};

export default TableItem;
