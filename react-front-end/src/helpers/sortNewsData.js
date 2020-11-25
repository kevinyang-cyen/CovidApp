export default function sortNewsData(newsData) {
  const newsReports = [];

  newsData[0].data.articles.forEach((newsArticle) => {
    newsReports.push({ source: { id: newsArticle.source.id, name: newsArticle.source.name }, author: newsArticle.author, title: newsArticle.title, description: newsArticle.description, url: newsArticle.url, urlToImage: newsArticle.urlToImage })
  });

  return { newsReports }
}
