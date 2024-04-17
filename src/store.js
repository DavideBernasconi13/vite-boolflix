import { reactive } from 'Vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        serie: 'search/tv'
    },
    option: {
        params: {
            api_key: 'fae310742a2c62f6d86e0f01886b7afb',
            query: 'a'
        }
    }, 
    imageBaseUrl: ''

}); 