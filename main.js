// 每页显示的新闻数量
const newsPerPage = 10;
let currentPage = 1;

// 获取所有的新闻条目
const allNewsItems = Array.from(document.querySelectorAll('#news-container li'));

// 隐藏所有新闻条目
function hideAllNews() {
    allNewsItems.forEach(item => {
        item.style.display = 'none';
    });
}

// 渲染新闻
function renderNews(page) {
    hideAllNews();  // 先隐藏所有新闻条目

    const startIndex = (page - 1) * newsPerPage;
    const endIndex = page * newsPerPage;
    const newsToShow = allNewsItems.slice(startIndex, endIndex);

    // 显示当前页的新闻条目
    newsToShow.forEach(item => {
        item.style.display = 'block';
    });
}

// 渲染分页导航
function renderPagination() {
    const totalPages = Math.ceil(allNewsItems.length / newsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';  // 清空之前的分页

    // 创建分页按钮
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.href = "#";  // 使用 # 来防止跳转
        if (i === currentPage) {
            pageLink.style.fontWeight = 'bold';  // 简单加粗当前页码
        }
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = i;
            renderNews(currentPage);
            renderPagination();  // 更新分页导航状态
        });
        pagination.appendChild(pageLink);

        // 在页码之间加上空格
        if (i < totalPages) {
            pagination.appendChild(document.createTextNode(' '));
        }
    }
}

// 初次渲染
renderNews(currentPage);
renderPagination();
