function pokeServer (event) {
    event.preventDefault();

    // POST articleUrl to server
    const articleUrl = document.getElementById('article').value;
    console.log(articleUrl);

    Client.postArticleUrl('/articleUrl', {'article': articleUrl});
}

export { pokeServer }