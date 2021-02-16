export function postJson(path, data) {
    return fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export function postFormData(path, formData) {
    return fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'form/multipart'
        },
        body: formData
    })
}