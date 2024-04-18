import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        serie: 'search/tv'
    },
    options: {
        params: {
            api_key: 'fae310742a2c62f6d86e0f01886b7afb',
            query: '',
        }
    },
    imageUrl: 'https://image.tmdb.org/t/p/original',
    movie: [],
    series: []
}); 