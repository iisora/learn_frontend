import { CSRF_TOKEN } from "./csrf_token";

function handleResponse(response) {
    console.log("response", response);
    if (response.status === 204) {
        return "";
    } else if (response.status === 404) {
        return null;
    } else {
        return response.json();
    }
}

function apiService(endpoint, method, data) {
    const config = {
        method: method || "GET", // default: GET
        // JSON 文字列に変換
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
            "content-type": "application/json",
            "X-CSRFTOKEN": CSRF_TOKEN
        }
    };
    console.log("config", config);
    return fetch(endpoint, config).then(handleResponse);
}

export { apiService };