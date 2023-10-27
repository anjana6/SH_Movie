const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "715be4e42eb43a17ff39330f371c7cfa",
    originalImage: (path) => `https://image.tmdb.org/t/p/original${path}`,
    w500Image: (path) => `https://image.tmdb.org/t/p/w500${path}`
}

export default apiConfig;