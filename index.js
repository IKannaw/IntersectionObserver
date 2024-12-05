const userId = "user123"; 
const viewedArticles = new Set();
const articles = document.querySelectorAll(".article");

console.log(articles);
const observeOptions = {
    root: null,
    threshold :1.0
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
             const articleId = entry.target.getAttribute("data-article-id");
            if (!viewedArticles.has(articleId)) {
                 setTimeout(() => {
                      if (entry.isIntersecting) {
                          viewedArticles.add(articleId); 
                        }
                 }, 1000);
             }
        }
    });
}, observeOptions)

articles.forEach(article => observer.observe(article));