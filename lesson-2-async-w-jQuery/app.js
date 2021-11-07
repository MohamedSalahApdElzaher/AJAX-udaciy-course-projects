/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    function addImage(images) {
        const firstImage = images.results[0];
    
        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
                <img src="${firstImage.urls.small}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`
        );
    }

    $.ajax({
        url:  `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
        headers:{

            'Authorization': 'Client-ID <your-client-id>'
        }
    }).done(addImage);

    $.ajax({
        url:  `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<your-API-key-goes-here>`
        headers:{

            'Authorization': 'Client-ID <your-client-id>'
        }
    }).done(addArticles);

    function addArticles () {
        const data = JSON.parse(articleRequest.responseText);
        console.log(data);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
})();
