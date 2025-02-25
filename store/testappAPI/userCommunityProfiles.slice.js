import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_usercommunityprofile_list = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_list",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_list(payload)
    return response.data
  }
)
export const api_v1_usercommunityprofile_create = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_create",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_create(
      payload
    )
    return response.data
  }
)
export const api_v1_usercommunityprofile_retrieve = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_retrieve",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_usercommunityprofile_update = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_update",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_update(
      payload
    )
    return response.data
  }
)
export const api_v1_usercommunityprofile_partial_update = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_partial_update",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_usercommunityprofile_destroy = createAsyncThunk(
  "userCommunityProfiles/api_v1_usercommunityprofile_destroy",
  async payload => {
    const response = await apiService.api_v1_usercommunityprofile_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userCommunityProfilesSlice = createSlice({
  name: "userCommunityProfiles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_usercommunityprofile_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_usercommunityprofile_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usercommunityprofile_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_usercommunityprofile_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_usercommunityprofile_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usercommunityprofile_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_usercommunityprofile_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_usercommunityprofile_retrieve.fulfilled,
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
        api_v1_usercommunityprofile_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usercommunityprofile_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_usercommunityprofile_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usercommunityprofile_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_usercommunityprofile_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_usercommunityprofile_partial_update.fulfilled,
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
        api_v1_usercommunityprofile_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_usercommunityprofile_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_usercommunityprofile_destroy.fulfilled,
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
        api_v1_usercommunityprofile_destroy.rejected,
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
  api_v1_usercommunityprofile_list,
  api_v1_usercommunityprofile_create,
  api_v1_usercommunityprofile_retrieve,
  api_v1_usercommunityprofile_update,
  api_v1_usercommunityprofile_partial_update,
  api_v1_usercommunityprofile_destroy,
  slice: userCommunityProfilesSlice
}
