import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_augmentedrealitykitchen_list = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_list",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_list(
      payload
    )
    return response.data
  }
)
export const api_v1_augmentedrealitykitchen_create = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_create",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_create(
      payload
    )
    return response.data
  }
)
export const api_v1_augmentedrealitykitchen_retrieve = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_retrieve",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_augmentedrealitykitchen_update = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_update",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_update(
      payload
    )
    return response.data
  }
)
export const api_v1_augmentedrealitykitchen_partial_update = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_partial_update",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_augmentedrealitykitchen_destroy = createAsyncThunk(
  "augmentedRealityKitchens/api_v1_augmentedrealitykitchen_destroy",
  async payload => {
    const response = await apiService.api_v1_augmentedrealitykitchen_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const augmentedRealityKitchensSlice = createSlice({
  name: "augmentedRealityKitchens",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_augmentedrealitykitchen_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_augmentedrealitykitchen_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_retrieve.fulfilled,
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
        api_v1_augmentedrealitykitchen_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_update.fulfilled,
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
        api_v1_augmentedrealitykitchen_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_partial_update.fulfilled,
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
        api_v1_augmentedrealitykitchen_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_augmentedrealitykitchen_destroy.fulfilled,
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
        api_v1_augmentedrealitykitchen_destroy.rejected,
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
  api_v1_augmentedrealitykitchen_list,
  api_v1_augmentedrealitykitchen_create,
  api_v1_augmentedrealitykitchen_retrieve,
  api_v1_augmentedrealitykitchen_update,
  api_v1_augmentedrealitykitchen_partial_update,
  api_v1_augmentedrealitykitchen_destroy,
  slice: augmentedRealityKitchensSlice
}
