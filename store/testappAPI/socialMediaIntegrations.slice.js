import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_socialmediaintegration_list = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_list",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_list(
      payload
    )
    return response.data
  }
)
export const api_v1_socialmediaintegration_create = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_create",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_create(
      payload
    )
    return response.data
  }
)
export const api_v1_socialmediaintegration_retrieve = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_retrieve",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_socialmediaintegration_update = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_update",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_update(
      payload
    )
    return response.data
  }
)
export const api_v1_socialmediaintegration_partial_update = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_partial_update",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_socialmediaintegration_destroy = createAsyncThunk(
  "socialMediaIntegrations/api_v1_socialmediaintegration_destroy",
  async payload => {
    const response = await apiService.api_v1_socialmediaintegration_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const socialMediaIntegrationsSlice = createSlice({
  name: "socialMediaIntegrations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_socialmediaintegration_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_socialmediaintegration_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_socialmediaintegration_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_socialmediaintegration_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_retrieve.fulfilled,
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
        api_v1_socialmediaintegration_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_update.fulfilled,
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
        api_v1_socialmediaintegration_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_partial_update.fulfilled,
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
        api_v1_socialmediaintegration_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_socialmediaintegration_destroy.fulfilled,
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
        api_v1_socialmediaintegration_destroy.rejected,
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
  api_v1_socialmediaintegration_list,
  api_v1_socialmediaintegration_create,
  api_v1_socialmediaintegration_retrieve,
  api_v1_socialmediaintegration_update,
  api_v1_socialmediaintegration_partial_update,
  api_v1_socialmediaintegration_destroy,
  slice: socialMediaIntegrationsSlice
}
