import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_localcuisinesuggestion_list = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_list",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_list(
      payload
    )
    return response.data
  }
)
export const api_v1_localcuisinesuggestion_create = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_create",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_create(
      payload
    )
    return response.data
  }
)
export const api_v1_localcuisinesuggestion_retrieve = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_retrieve",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_localcuisinesuggestion_update = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_update",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_update(
      payload
    )
    return response.data
  }
)
export const api_v1_localcuisinesuggestion_partial_update = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_partial_update",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_localcuisinesuggestion_destroy = createAsyncThunk(
  "localCuisineSuggestions/api_v1_localcuisinesuggestion_destroy",
  async payload => {
    const response = await apiService.api_v1_localcuisinesuggestion_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const localCuisineSuggestionsSlice = createSlice({
  name: "localCuisineSuggestions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_localcuisinesuggestion_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_localcuisinesuggestion_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_localcuisinesuggestion_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_localcuisinesuggestion_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_retrieve.fulfilled,
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
        api_v1_localcuisinesuggestion_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_update.fulfilled,
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
        api_v1_localcuisinesuggestion_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_partial_update.fulfilled,
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
        api_v1_localcuisinesuggestion_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_localcuisinesuggestion_destroy.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  api_v1_localcuisinesuggestion_list,
  api_v1_localcuisinesuggestion_create,
  api_v1_localcuisinesuggestion_retrieve,
  api_v1_localcuisinesuggestion_update,
  api_v1_localcuisinesuggestion_partial_update,
  api_v1_localcuisinesuggestion_destroy,
  slice: localCuisineSuggestionsSlice
}
