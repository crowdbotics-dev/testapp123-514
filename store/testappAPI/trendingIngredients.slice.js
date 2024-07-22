import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_trendingingredients_list = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_list",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_list(payload)
    return response.data
  }
)
export const api_v1_trendingingredients_create = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_create",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_create(payload)
    return response.data
  }
)
export const api_v1_trendingingredients_retrieve = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_retrieve",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_trendingingredients_update = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_update",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_update(payload)
    return response.data
  }
)
export const api_v1_trendingingredients_partial_update = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_partial_update",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_trendingingredients_destroy = createAsyncThunk(
  "trendingIngredients/api_v1_trendingingredients_destroy",
  async payload => {
    const response = await apiService.api_v1_trendingingredients_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const trendingIngredientsSlice = createSlice({
  name: "trendingIngredients",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_trendingingredients_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_trendingingredients_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_trendingingredients_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_trendingingredients_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_trendingingredients_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_trendingingredients_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_trendingingredients_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_trendingingredients_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_trendingingredients_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_trendingingredients_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_trendingingredients_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_trendingingredients_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_trendingingredients_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_trendingingredients_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_trendingingredients_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_trendingingredients_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_trendingingredients_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_trendingingredients_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_trendingingredients_list,
  api_v1_trendingingredients_create,
  api_v1_trendingingredients_retrieve,
  api_v1_trendingingredients_update,
  api_v1_trendingingredients_partial_update,
  api_v1_trendingingredients_destroy,
  slice: trendingIngredientsSlice
}
