import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_seoanalytics_list = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_list",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_list(payload)
    return response.data
  }
)
export const api_v1_seoanalytics_create = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_create",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_create(payload)
    return response.data
  }
)
export const api_v1_seoanalytics_retrieve = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_retrieve",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_retrieve(payload)
    return response.data
  }
)
export const api_v1_seoanalytics_update = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_update",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_update(payload)
    return response.data
  }
)
export const api_v1_seoanalytics_partial_update = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_partial_update",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_seoanalytics_destroy = createAsyncThunk(
  "sEOAnalytics/api_v1_seoanalytics_destroy",
  async payload => {
    const response = await apiService.api_v1_seoanalytics_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sEOAnalyticsSlice = createSlice({
  name: "sEOAnalytics",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_seoanalytics_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seoanalytics_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seoanalytics_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seoanalytics_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seoanalytics_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_seoanalytics_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_seoanalytics_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seoanalytics_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seoanalytics_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_seoanalytics_list,
  api_v1_seoanalytics_create,
  api_v1_seoanalytics_retrieve,
  api_v1_seoanalytics_update,
  api_v1_seoanalytics_partial_update,
  api_v1_seoanalytics_destroy,
  slice: sEOAnalyticsSlice
}
