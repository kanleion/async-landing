const API =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UC1SgzEkcvsECHkd1ipzAhSw&part=snippet%2Cid&order=date&maxResults=10";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "4f8e7b3075msha314e91143c3c81p1ff20djsn1c0492d33c16",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

const content = null || document.getElementById("content");

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data;
}

//funciones que permiten automaticamente llamarlas
(async() => {
        try {
            const videos = await fetchData(API);

            //template de html es lo que viene ahora
            let view = `
            ${videos.items
              .map(
                (video) => `
              <div class="group relative">
              <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                      <span aria-hidden="true" class="absolute inset-0"></span> ${video.snippet.title}
                  </h3>
              </div>
              </div>    
            `
              )
              .slice(0, 4)
              .join("")}
            
            `;

    //con slice puedo mostrar 4 elementos de los 9 por ahora aqui empezamos desde el 0 al 4
    //con join unimos los valores y con esto ya tenemos los elementos

    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();