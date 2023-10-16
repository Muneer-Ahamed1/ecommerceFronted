import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("Product/fetchProduct", async () => {
    return (axios.get("https://api.pujakaitem.com/api/products")
        .then((raw) => {
            console.log(raw)
            return raw.data
        })
        .catch((err) => {
            throw err
        })
    )
})

export const fetchDetails = createAsyncThunk("Detail/fetchDetail", async (id) => {
    const detail = axios.get(`https://api.pujakaitem.com/api/products?id=${id}`)
        .then((raw) => {
            return raw.data;
        })
        .catch((err) => {
            throw error
        })
    return detail;

})


const product = createSlice({
    name: "  Product",
    initialState: {
        status: {
            loading: true,
            error: false,
            issue: ""
        },
        productData: [],
        detailData: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status = {
                loading: true,
                error: false,
                issue: ""
            }
        },
        [fetchProduct.fulfilled]: (state, { payload }) => {
            state.status.loading = false
            state.productData = payload;
            console.log(payload)

        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = {
                loading: false, error: true, issue: action.error.message
            }
        },

        [fetchDetails.pending]: (state, action) => {
            state.status = {
                loading: true,
                error: false,
                issue: ""
            }
        },
        [fetchDetails.fulfilled]: (state, { payload }) => {
            state.status.loading = false
            state.detailData = payload;

        },
        [fetchDetails.rejected]: (state, action) => {
            state.status = { loading: false, error: true, issue: action.error.message };
        }
    }
}
)

export default product.reducer;
export { product };
