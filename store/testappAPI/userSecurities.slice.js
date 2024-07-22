import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_usersecurity_list = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_list",
  async payload => {
    const response = await apiService.api_v1_usersecurity_list(payload)
    return response.data
  }
)
export const api_v1_usersecurity_create = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_create",
  async payload => {
    const response = await apiService.api_v1_usersecurity_create(payload)
    return response.data
  }
)
export const api_v1_usersecurity_retrieve = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_retrieve",
  async payload => {
    const response = await apiService.api_v1_usersecurity_retrieve(payload)
    return response.data
  }
)
export const api_v1_usersecurity_update = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_update",
  async payload => {
    const response = await apiService.api_v1_usersecurity_update(payload)
    return response.data
  }
)
export const api_v1_usersecurity_partial_update = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_partial_update",
  async payload => {
    const response = await apiService.api_v1_usersecurity_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_usersecurity_destroy = createAsyncThunk(
  "userSecurities/api_v1_usersecurity_destroy",
  async payload => {
    const response = await apiService.api_v1_usersecurity_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userSecuritiesSlice = createSlice({
  name: "userSecurities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_usersecurity_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersecurity_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersecurity_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersecurity_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersecurity_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_usersecurity_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usersecurity_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usersecurity_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usersecurity_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_usersecurity_list,
  api_v1_usersecurity_create,
  api_v1_usersecurity_retrieve,
  api_v1_usersecurity_update,
  api_v1_usersecurity_partial_update,
  api_v1_usersecurity_destroy,
  slice: userSecuritiesSlice
}
