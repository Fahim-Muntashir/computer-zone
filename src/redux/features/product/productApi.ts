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

        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
        }),
        
        updateSingleProduct: builder.mutation({
            query: (data) => ({
                url: `/product/${data.id}`,
                method: "PUT",
                body: data.data,
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

export const { usePostProductMutation, useGetAllProductsQuery , useUpdateSingleProductMutation,useDeleteSingleProductMutation,useGetSingleProductQuery} = productApi;
