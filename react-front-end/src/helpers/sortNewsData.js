export default function sortNewsData(newsData) {
  const newsReportsSpliced = []
  const newsReports = [];
  const loadSize = 15;


  newsData[0].data.articles.forEach((newsArticle) => {
    newsReports.push({ source: { id: newsArticle.source.id, name: newsArticle.source.name }, author: newsArticle.author, title: newsArticle.title, description: newsArticle.description, url: newsArticle.url, urlToImage: newsArticle.urlToImage })
  });

  for (var i=0; i<newsReports.length; i+=loadSize) {
    newsReportsSpliced.push(newsReports.slice(i,i+loadSize));
  }
  console.log("newsReports: ", newsReports);
  console.log("newsReportsSpliced: ", newsReportsSpliced);

  return { newsReports }
}
