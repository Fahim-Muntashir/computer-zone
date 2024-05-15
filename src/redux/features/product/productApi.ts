import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postProduct: builder.mutation({
            query: (productInfo) => ({
                url: "/product/",
                method: "POST",
                body: productInfo,
            }),
        }),

        getAllProducts: builder.query({
            query: () => ({
                url: "/product/",
                method: "GET",
            }),
        }),

        deleteSingleProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            }),
        })
        
    }),
});

export const { usePostProductMutation, useGetAllProductsQuery ,useDeleteSingleProductMutation} = productApi;
