import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
        filterData: [],
        companyData: [],
        tempData: [],
        detailData: [],
    },
    reducers: {
        filterData: (state, { payload }) => {
            console.log(current(state.filterData))

            if (payload == "All") {
                if (state.companyData.length != 0) {
                    const company = state.companyData[0].company.toLowerCase();
                    console.log(company)
                    state.tempData = state.productData.filter(p => p.company.toLowerCase() == company);
                }
                else {
                    state.tempData = state.productData;
                }
            }
            else if (state.companyData.length != 0) {
                state.tempData = state.companyData.filter((data) => {
                    if (data.category === payload.toLowerCase()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            else {

                state.tempData = state.productData.filter((data) => {
                    if (data.category === payload.toLowerCase()) {
                        return true
                    }
                    else {
                        return false
                    }

                })
            }
            state.filterData = state.tempData;


        },
        filterCompany: (state, { payload }) => {

            state.companyData = state.tempData.filter((data) => {
                if (data.company.toLowerCase() === payload.toLowerCase()) {
                    console.log(data.company.toLowerCase())

                    return true;
                }
            })
            state.filterData = state.companyData;
        },
        sortPriceorder: (state, { payload }) => {
            if (payload.toLowerCase() == "lowest") {
                state.filterData = state.filterData.sort((a, b) => {
                    return a['price'] - b['price'];
                })
            }
            else {
                state.filterData = state.filterData.sort((a, b) => {
                    return b['price'] - a['price'];
                })

            }
            state.tempData = state.filterData;


        },
        priceData: (state, { payload }) => {
            state.filterData = state.tempData

        },
        setInputText: (state, { payload }) => {
            console.log(payload.length)
            if (payload.length == 0) {
                state.filterData = state.tempData;

            }
            else {
                state.filterData = state.filterData.filter((vl) => {
                    if (vl.name.toLowerCase().includes(payload)) {
                        return vl;
                    }
                })
            }

        },
       setColorSelection:(state,{payload})=>{
        let colors=[];
        colors.length = 0;
        console.log(current(state.tempData))
        state.tempData.map((vl)=>{
            vl.colors.map((clr)=>{
                if(clr==payload) {
                    colors.push(vl);
                }
            })
        })
        state.filterData=colors;



       } 



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
            state.tempData = payload;
            state.filterData = payload;

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
export const { filterData, filterCompany, sortPriceorder, setInputText,setColorSelection } = product.actions;
export { product };
