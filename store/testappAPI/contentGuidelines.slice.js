import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_contentguidelines_list = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_list",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_list(payload)
    return response.data
  }
)
export const api_v1_contentguidelines_create = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_create",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_create(payload)
    return response.data
  }
)
export const api_v1_contentguidelines_retrieve = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_retrieve",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_retrieve(payload)
    return response.data
  }
)
export const api_v1_contentguidelines_update = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_update",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_update(payload)
    return response.data
  }
)
export const api_v1_contentguidelines_partial_update = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_partial_update",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_contentguidelines_destroy = createAsyncThunk(
  "contentGuidelines/api_v1_contentguidelines_destroy",
  async payload => {
    const response = await apiService.api_v1_contentguidelines_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const contentGuidelinesSlice = createSlice({
  name: "contentGuidelines",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_contentguidelines_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentguidelines_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentguidelines_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentguidelines_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentguidelines_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_contentguidelines_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_contentguidelines_partial_update.fulfilled,
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
        api_v1_contentguidelines_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_contentguidelines_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentguidelines_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentguidelines_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_contentguidelines_list,
  api_v1_contentguidelines_create,
  api_v1_contentguidelines_retrieve,
  api_v1_contentguidelines_update,
  api_v1_contentguidelines_partial_update,
  api_v1_contentguidelines_destroy,
  slice: contentGuidelinesSlice
}
