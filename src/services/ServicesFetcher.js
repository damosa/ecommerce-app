const checkStatus = (response) => {
    const { status, statusText } = response;
    if(status >= 200 && status < 300) {
        return response;
    }

    const error = new Error(statusText);
    error.response = response;
    throw error;
}

const fetcher = (url, options) => {
    return fetch(url, options)
        .then(checkStatus)
        .then(res => res.json());
}

export default fetcher