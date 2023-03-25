import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
    'book/getBooks',
    async ([search, category, sorted, startIndex], thinkAPI) => {
        try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&maxResults=${30}&startIndex=${startIndex * 30}&orderBy=${sorted}`)
            if (!res.ok) {
                throw new Error('ServerError')
            }
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error);
            return thinkAPI.rejectWithValue(error.message);
        }
    })

const booksReducer = createSlice({
    name: 'book',
    initialState: {
        books: [],
        searchText: '',
        sorted: 'relevance',
        category: '',
        startIndex: 0,
        status: null,
        error: null,
        total: "",
    },
    reducers: {
        setSearchText(state, { payload }) {
            state.searchText = payload
        },
        changeSort(state, action) {
            state.sorted = action.payload
        },
        changeCategory(state, { payload }) {
            state.category = payload
        },
        cleanBooks(state) {
            state.books = []
            state.startIndex = 0
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.status = 'resolved'
            if (action.payload.items) {
                action.payload.items.forEach(item => state.books.push(item))
                state.startIndex += 1
            }
            if (action.payload.totalItems > 0 && state.startIndex == 1) {
                state.total = action.payload.totalItems
            }
        })

        builder.addCase(getBooks.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }
})

export const { setSearchText, changeSort, changeCategory, cleanBooks } = booksReducer.actions
export default booksReducer.reducer