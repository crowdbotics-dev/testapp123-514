import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_culinarycertification_list = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_list",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_list(payload)
    return response.data
  }
)
export const api_v1_culinarycertification_create = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_create",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_create(
      payload
    )
    return response.data
  }
)
export const api_v1_culinarycertification_retrieve = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_retrieve",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_culinarycertification_update = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_update",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_update(
      payload
    )
    return response.data
  }
)
export const api_v1_culinarycertification_partial_update = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_partial_update",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_culinarycertification_destroy = createAsyncThunk(
  "culinaryCertifications/api_v1_culinarycertification_destroy",
  async payload => {
    const response = await apiService.api_v1_culinarycertification_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const culinaryCertificationsSlice = createSlice({
  name: "culinaryCertifications",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_culinarycertification_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_culinarycertification_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycertification_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_culinarycertification_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_culinarycertification_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_retrieve.fulfilled,
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
        api_v1_culinarycertification_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_culinarycertification_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_culinarycertification_update.fulfilled,
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
        api_v1_culinarycertification_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_partial_update.fulfilled,
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
        api_v1_culinarycertification_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_culinarycertification_destroy.fulfilled,
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
        api_v1_culinarycertification_destroy.rejected,
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
  api_v1_culinarycertification_list,
  api_v1_culinarycertification_create,
  api_v1_culinarycertification_retrieve,
  api_v1_culinarycertification_update,
  api_v1_culinarycertification_partial_update,
  api_v1_culinarycertification_destroy,
  slice: culinaryCertificationsSlice
}
