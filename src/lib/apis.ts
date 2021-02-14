import axios from "axios"

const ACCESS_TOKEN = "G7JcTWd-6AKGY1Zdwg0W6pxnxUydBpptunDjHgopcSEAAAF3nxWXDA";
const REST_API_KEY = "37d8c5b06ed4992550999ab7c6702671";
const REDIRECT_URI = "http://localhost:3000/oauth"

const client = axios.create({
    baseURL : "https://kapi.kakao.com",
    headers : {
        "Authorization" : `Bearer ${ACCESS_TOKEN}`,
        "Context-Type" : "application/json; charset=UTF-8"
    }
})

// 카카오 로그인 /oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code
export const getUserLogin = async () => {
    return await client.get(`
        /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code    
    `)
}
// 유저 프로필 가져오기 /v1/api/talk/profile

export const getUserProfile = async () => {
    return await client.get("/v1/api/talk/profile");
}
// 유저 친구 목록 가져오기 /v1/api/talk/friends
export const getUserFriendsList = async () => {
    return await client.get("/v1/api/talk/friends")
}

