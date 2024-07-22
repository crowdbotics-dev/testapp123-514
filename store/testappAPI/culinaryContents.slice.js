import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_culinarycontent_list = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_list",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_list(payload)
    return response.data
  }
)
export const api_v1_culinarycontent_create = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_create",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_create(payload)
    return response.data
  }
)
export const api_v1_culinarycontent_retrieve = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_retrieve",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_retrieve(payload)
    return response.data
  }
)
export const api_v1_culinarycontent_update = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_update",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_update(payload)
    return response.data
  }
)
export const api_v1_culinarycontent_partial_update = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_partial_update",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_culinarycontent_destroy = createAsyncThunk(
  "culinaryContents/api_v1_culinarycontent_destroy",
  async payload => {
    const response = await apiService.api_v1_culinarycontent_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const culinaryContentsSlice = createSlice({
  name: "culinaryContents",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_culinarycontent_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycontent_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycontent_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycontent_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycontent_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_culinarycontent_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_culinarycontent_partial_update.fulfilled,
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
        api_v1_culinarycontent_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_culinarycontent_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycontent_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycontent_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_culinarycontent_list,
  api_v1_culinarycontent_create,
  api_v1_culinarycontent_retrieve,
  api_v1_culinarycontent_update,
  api_v1_culinarycontent_partial_update,
  api_v1_culinarycontent_destroy,
  slice: culinaryContentsSlice
}
