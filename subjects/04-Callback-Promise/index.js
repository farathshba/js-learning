const fetch = require('node-fetch')

function handler(albumId, id) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&id=${id}`)
            .then(res => res.json())
            .then(data => {
                const promises = data.map(photos => 
                    photos.title
                )
                
                return Promise.all(promises)
            })
}

const result = handler(1, 1)

console.log(result);
