import axios from "axios"
const testappAPI = axios.create({
  baseURL: "https://testapp123-514.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_augmentedrealitykitchen_list(payload) {
  return testappAPI.get(`/api/v1/augmentedrealitykitchen/`)
}
function api_v1_augmentedrealitykitchen_create(payload) {
  return testappAPI.post(`/api/v1/augmentedrealitykitchen/`, payload)
}
function api_v1_augmentedrealitykitchen_retrieve(payload) {
  return testappAPI.get(`/api/v1/augmentedrealitykitchen/${payload.id}/`)
}
function api_v1_augmentedrealitykitchen_update(payload) {
  return testappAPI.put(
    `/api/v1/augmentedrealitykitchen/${payload.id}/`,
    payload
  )
}
function api_v1_augmentedrealitykitchen_partial_update(payload) {
  return testappAPI.patch(
    `/api/v1/augmentedrealitykitchen/${payload.id}/`,
    payload
  )
}
function api_v1_augmentedrealitykitchen_destroy(payload) {
  return testappAPI.delete(`/api/v1/augmentedrealitykitchen/${payload.id}/`)
}
function api_v1_contentguidelines_list(payload) {
  return testappAPI.get(`/api/v1/contentguidelines/`)
}
function api_v1_contentguidelines_create(payload) {
  return testappAPI.post(`/api/v1/contentguidelines/`, payload)
}
function api_v1_contentguidelines_retrieve(payload) {
  return testappAPI.get(`/api/v1/contentguidelines/${payload.id}/`)
}
function api_v1_contentguidelines_update(payload) {
  return testappAPI.put(`/api/v1/contentguidelines/${payload.id}/`, payload)
}
function api_v1_contentguidelines_partial_update(payload) {
  return testappAPI.patch(`/api/v1/contentguidelines/${payload.id}/`, payload)
}
function api_v1_contentguidelines_destroy(payload) {
  return testappAPI.delete(`/api/v1/contentguidelines/${payload.id}/`)
}
function api_v1_culinarycertification_list(payload) {
  return testappAPI.get(`/api/v1/culinarycertification/`)
}
function api_v1_culinarycertification_create(payload) {
  return testappAPI.post(`/api/v1/culinarycertification/`, payload)
}
function api_v1_culinarycertification_retrieve(payload) {
  return testappAPI.get(`/api/v1/culinarycertification/${payload.id}/`)
}
function api_v1_culinarycertification_update(payload) {
  return testappAPI.put(`/api/v1/culinarycertification/${payload.id}/`, payload)
}
function api_v1_culinarycertification_partial_update(payload) {
  return testappAPI.patch(
    `/api/v1/culinarycertification/${payload.id}/`,
    payload
  )
}
function api_v1_culinarycertification_destroy(payload) {
  return testappAPI.delete(`/api/v1/culinarycertification/${payload.id}/`)
}
function api_v1_culinarycontent_list(payload) {
  return testappAPI.get(`/api/v1/culinarycontent/`)
}
function api_v1_culinarycontent_create(payload) {
  return testappAPI.post(`/api/v1/culinarycontent/`, payload)
}
function api_v1_culinarycontent_retrieve(payload) {
  return testappAPI.get(`/api/v1/culinarycontent/${payload.id}/`)
}
function api_v1_culinarycontent_update(payload) {
  return testappAPI.put(`/api/v1/culinarycontent/${payload.id}/`, payload)
}
function api_v1_culinarycontent_partial_update(payload) {
  return testappAPI.patch(`/api/v1/culinarycontent/${payload.id}/`, payload)
}
function api_v1_culinarycontent_destroy(payload) {
  return testappAPI.delete(`/api/v1/culinarycontent/${payload.id}/`)
}
function api_v1_localcuisinesuggestion_list(payload) {
  return testappAPI.get(`/api/v1/localcuisinesuggestion/`)
}
function api_v1_localcuisinesuggestion_create(payload) {
  return testappAPI.post(`/api/v1/localcuisinesuggestion/`, payload)
}
function api_v1_localcuisinesuggestion_retrieve(payload) {
  return testappAPI.get(`/api/v1/localcuisinesuggestion/${payload.id}/`)
}
function api_v1_localcuisinesuggestion_update(payload) {
  return testappAPI.put(
    `/api/v1/localcuisinesuggestion/${payload.id}/`,
    payload
  )
}
function api_v1_localcuisinesuggestion_partial_update(payload) {
  return testappAPI.patch(
    `/api/v1/localcuisinesuggestion/${payload.id}/`,
    payload
  )
}
function api_v1_localcuisinesuggestion_destroy(payload) {
  return testappAPI.delete(`/api/v1/localcuisinesuggestion/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return testappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_recipe_list(payload) {
  return testappAPI.get(`/api/v1/recipe/`)
}
function api_v1_recipe_create(payload) {
  return testappAPI.post(`/api/v1/recipe/`, payload)
}
function api_v1_recipe_retrieve(payload) {
  return testappAPI.get(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipe_update(payload) {
  return testappAPI.put(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_partial_update(payload) {
  return testappAPI.patch(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_destroy(payload) {
  return testappAPI.delete(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_seoanalytics_list(payload) {
  return testappAPI.get(`/api/v1/seoanalytics/`)
}
function api_v1_seoanalytics_create(payload) {
  return testappAPI.post(`/api/v1/seoanalytics/`, payload)
}
function api_v1_seoanalytics_retrieve(payload) {
  return testappAPI.get(`/api/v1/seoanalytics/${payload.id}/`)
}
function api_v1_seoanalytics_update(payload) {
  return testappAPI.put(`/api/v1/seoanalytics/${payload.id}/`, payload)
}
function api_v1_seoanalytics_partial_update(payload) {
  return testappAPI.patch(`/api/v1/seoanalytics/${payload.id}/`, payload)
}
function api_v1_seoanalytics_destroy(payload) {
  return testappAPI.delete(`/api/v1/seoanalytics/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return testappAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_socialmediaintegration_list(payload) {
  return testappAPI.get(`/api/v1/socialmediaintegration/`)
}
function api_v1_socialmediaintegration_create(payload) {
  return testappAPI.post(`/api/v1/socialmediaintegration/`, payload)
}
function api_v1_socialmediaintegration_retrieve(payload) {
  return testappAPI.get(`/api/v1/socialmediaintegration/${payload.id}/`)
}
function api_v1_socialmediaintegration_update(payload) {
  return testappAPI.put(
    `/api/v1/socialmediaintegration/${payload.id}/`,
    payload
  )
}
function api_v1_socialmediaintegration_partial_update(payload) {
  return testappAPI.patch(
    `/api/v1/socialmediaintegration/${payload.id}/`,
    payload
  )
}
function api_v1_socialmediaintegration_destroy(payload) {
  return testappAPI.delete(`/api/v1/socialmediaintegration/${payload.id}/`)
}
function api_v1_trendingingredients_list(payload) {
  return testappAPI.get(`/api/v1/trendingingredients/`)
}
function api_v1_trendingingredients_create(payload) {
  return testappAPI.post(`/api/v1/trendingingredients/`, payload)
}
function api_v1_trendingingredients_retrieve(payload) {
  return testappAPI.get(`/api/v1/trendingingredients/${payload.id}/`)
}
function api_v1_trendingingredients_update(payload) {
  return testappAPI.put(`/api/v1/trendingingredients/${payload.id}/`, payload)
}
function api_v1_trendingingredients_partial_update(payload) {
  return testappAPI.patch(`/api/v1/trendingingredients/${payload.id}/`, payload)
}
function api_v1_trendingingredients_destroy(payload) {
  return testappAPI.delete(`/api/v1/trendingingredients/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return testappAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return testappAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return testappAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return testappAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return testappAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return testappAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_useractivity_list(payload) {
  return testappAPI.get(`/api/v1/useractivity/`)
}
function api_v1_useractivity_create(payload) {
  return testappAPI.post(`/api/v1/useractivity/`, payload)
}
function api_v1_useractivity_retrieve(payload) {
  return testappAPI.get(`/api/v1/useractivity/${payload.id}/`)
}
function api_v1_useractivity_update(payload) {
  return testappAPI.put(`/api/v1/useractivity/${payload.id}/`, payload)
}
function api_v1_useractivity_partial_update(payload) {
  return testappAPI.patch(`/api/v1/useractivity/${payload.id}/`, payload)
}
function api_v1_useractivity_destroy(payload) {
  return testappAPI.delete(`/api/v1/useractivity/${payload.id}/`)
}
function api_v1_usercommunityprofile_list(payload) {
  return testappAPI.get(`/api/v1/usercommunityprofile/`)
}
function api_v1_usercommunityprofile_create(payload) {
  return testappAPI.post(`/api/v1/usercommunityprofile/`, payload)
}
function api_v1_usercommunityprofile_retrieve(payload) {
  return testappAPI.get(`/api/v1/usercommunityprofile/${payload.id}/`)
}
function api_v1_usercommunityprofile_update(payload) {
  return testappAPI.put(`/api/v1/usercommunityprofile/${payload.id}/`, payload)
}
function api_v1_usercommunityprofile_partial_update(payload) {
  return testappAPI.patch(
    `/api/v1/usercommunityprofile/${payload.id}/`,
    payload
  )
}
function api_v1_usercommunityprofile_destroy(payload) {
  return testappAPI.delete(`/api/v1/usercommunityprofile/${payload.id}/`)
}
function api_v1_userprofile_list(payload) {
  return testappAPI.get(`/api/v1/userprofile/`)
}
function api_v1_userprofile_create(payload) {
  return testappAPI.post(`/api/v1/userprofile/`, payload)
}
function api_v1_userprofile_retrieve(payload) {
  return testappAPI.get(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_userprofile_update(payload) {
  return testappAPI.put(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_partial_update(payload) {
  return testappAPI.patch(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_destroy(payload) {
  return testappAPI.delete(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_usersecurity_list(payload) {
  return testappAPI.get(`/api/v1/usersecurity/`)
}
function api_v1_usersecurity_create(payload) {
  return testappAPI.post(`/api/v1/usersecurity/`, payload)
}
function api_v1_usersecurity_retrieve(payload) {
  return testappAPI.get(`/api/v1/usersecurity/${payload.id}/`)
}
function api_v1_usersecurity_update(payload) {
  return testappAPI.put(`/api/v1/usersecurity/${payload.id}/`, payload)
}
function api_v1_usersecurity_partial_update(payload) {
  return testappAPI.patch(`/api/v1/usersecurity/${payload.id}/`, payload)
}
function api_v1_usersecurity_destroy(payload) {
  return testappAPI.delete(`/api/v1/usersecurity/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return testappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return testappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_augmentedrealitykitchen_list,
  api_v1_augmentedrealitykitchen_create,
  api_v1_augmentedrealitykitchen_retrieve,
  api_v1_augmentedrealitykitchen_update,
  api_v1_augmentedrealitykitchen_partial_update,
  api_v1_augmentedrealitykitchen_destroy,
  api_v1_contentguidelines_list,
  api_v1_contentguidelines_create,
  api_v1_contentguidelines_retrieve,
  api_v1_contentguidelines_update,
  api_v1_contentguidelines_partial_update,
  api_v1_contentguidelines_destroy,
  api_v1_culinarycertification_list,
  api_v1_culinarycertification_create,
  api_v1_culinarycertification_retrieve,
  api_v1_culinarycertification_update,
  api_v1_culinarycertification_partial_update,
  api_v1_culinarycertification_destroy,
  api_v1_culinarycontent_list,
  api_v1_culinarycontent_create,
  api_v1_culinarycontent_retrieve,
  api_v1_culinarycontent_update,
  api_v1_culinarycontent_partial_update,
  api_v1_culinarycontent_destroy,
  api_v1_localcuisinesuggestion_list,
  api_v1_localcuisinesuggestion_create,
  api_v1_localcuisinesuggestion_retrieve,
  api_v1_localcuisinesuggestion_update,
  api_v1_localcuisinesuggestion_partial_update,
  api_v1_localcuisinesuggestion_destroy,
  api_v1_login_create,
  api_v1_recipe_list,
  api_v1_recipe_create,
  api_v1_recipe_retrieve,
  api_v1_recipe_update,
  api_v1_recipe_partial_update,
  api_v1_recipe_destroy,
  api_v1_seoanalytics_list,
  api_v1_seoanalytics_create,
  api_v1_seoanalytics_retrieve,
  api_v1_seoanalytics_update,
  api_v1_seoanalytics_partial_update,
  api_v1_seoanalytics_destroy,
  api_v1_signup_create,
  api_v1_socialmediaintegration_list,
  api_v1_socialmediaintegration_create,
  api_v1_socialmediaintegration_retrieve,
  api_v1_socialmediaintegration_update,
  api_v1_socialmediaintegration_partial_update,
  api_v1_socialmediaintegration_destroy,
  api_v1_trendingingredients_list,
  api_v1_trendingingredients_create,
  api_v1_trendingingredients_retrieve,
  api_v1_trendingingredients_update,
  api_v1_trendingingredients_partial_update,
  api_v1_trendingingredients_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_useractivity_list,
  api_v1_useractivity_create,
  api_v1_useractivity_retrieve,
  api_v1_useractivity_update,
  api_v1_useractivity_partial_update,
  api_v1_useractivity_destroy,
  api_v1_usercommunityprofile_list,
  api_v1_usercommunityprofile_create,
  api_v1_usercommunityprofile_retrieve,
  api_v1_usercommunityprofile_update,
  api_v1_usercommunityprofile_partial_update,
  api_v1_usercommunityprofile_destroy,
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_retrieve,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_destroy,
  api_v1_usersecurity_list,
  api_v1_usersecurity_create,
  api_v1_usersecurity_retrieve,
  api_v1_usersecurity_update,
  api_v1_usersecurity_partial_update,
  api_v1_usersecurity_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
