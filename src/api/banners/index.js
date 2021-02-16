import { postJson} from '../basic'

export async function fetchBannersOnMainJson(data) {
    const headers = await postJson('/api/banners/bannersOnMain', data);
    return headers.json();
}

export function getBannersOnMain() {
    return fetch('/api/banners/bannersOnMain')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw new Error(res.error)
            }
            return res;
        })
}