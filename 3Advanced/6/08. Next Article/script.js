function getArticleGenerator(articles) {
    let i = 0;
    

    return function(){
        if(i == articles.length){return};
       let textToShow = articles[i];
        i++;
        const divContentRef = document.getElementById("content");
        let newArticle = document.createElement("article");
        newArticle.textContent = textToShow;
        divContentRef.appendChild(newArticle);
    }
}
