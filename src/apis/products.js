import fetcher from './../services/ServicesFetcher';

export const getProducts = async () => {
    const response = await fetcher('https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b', {
        method: 'GET'
    })
    return response;
}