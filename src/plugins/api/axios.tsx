import axios from "axios";
import { TApiResponse } from "src/type/common.type";
import { UserLoginPayload, UserLoginResponse } from "src/type/api.type";

// Render部署網址
const apiRequest = axios.create({
  baseURL: "https://freyja-788f.onrender.com/api/v1",
});

// User
export const apiUserLogin = (
  data: UserLoginPayload
): TApiResponse<UserLoginResponse> => apiRequest.post("/user/login", data);
export const apiUserSignup = (data) => apiRequest.post("/user/signup", data);
export const apiUserForgot = (data) => apiRequest.post("/user/forgot", data);
export const apiUserCheck = (data) => apiRequest.get("/user/check", data);
export const apiUserGet = (data) => apiRequest.get("/user", { params: data });
export const apiUserUpdate = (data) => apiRequest.put("/user", data);

// 驗證
export const apiVerifyEmail = (data) => apiRequest.post("/verify/email", data);
export const apiVerifyGenerateEmailCode = (data) =>
  apiRequest.post("/verify/generateEmailCode", data);
