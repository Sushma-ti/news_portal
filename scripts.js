document.addEventListener('DOMContentLoaded', () => {
    // Example news data, in a real scenario, fetch this from a server
    const newsData = [
        { title: 'News 1', content: 'Content for news 1.' },
        { title: 'News 2', content: 'Content for news 2.' },
        { title: 'News 3', content: 'Content for news 3.' },
        { title: 'News 4', content: 'Content for news 4.' },
        { title: 'News 5', content: 'Content for news 5.' },
        { title: 'News 6', content: 'Content for news 6.' }
    ];

    const newsContainer = document.getElementById('news-container');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
});
