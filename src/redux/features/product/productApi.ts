import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        product: builder.mutation({
            query: (productInfo) => ({
                url: "/product/",
                method: "POST",
                body:productInfo,
            
            }),
        }),
    }),
})

export const { useProductMutation} = productApi;