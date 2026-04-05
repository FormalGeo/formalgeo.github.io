function initNewsPagination({containerSelector, paginationSelector, itemsPerPage, initialPage}) {
    // 私有状态（每个调用都有自己的一份）
    let currentPage = initialPage;
    const container = document.querySelector(containerSelector);
    const pagination = document.querySelector(paginationSelector);
    const allItems = Array.from(container.querySelectorAll('li'));

    // 隐藏所有条目
    function hideAll() {
        allItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    // 渲染新闻
    function renderNews(page) {
        hideAll();

        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;

        allItems.slice(start, end).forEach(item => {
            item.style.display = 'block';
        });
    }

    // 渲染分页
    function renderPagination() {
        const totalPages = Math.ceil(allItems.length / itemsPerPage);
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = i;

            if (i === currentPage) {
                link.style.fontWeight = 'bold';
            }

            link.addEventListener('click', e => {
                e.preventDefault();
                currentPage = i;
                renderNews(currentPage);
                renderPagination();
            });

            pagination.appendChild(link);

            if (i < totalPages) {
                pagination.appendChild(document.createTextNode(' '));
            }
        }
    }

    // 初始化
    renderNews(currentPage);
    renderPagination();
}

initNewsPagination({
    containerSelector: '#news-container',
    paginationSelector: '#news-pagination',
    itemsPerPage: 10,
    initialPage: 1
});

initNewsPagination({
    containerSelector: '#publications-container',
    paginationSelector: '#publications-pagination',
    itemsPerPage: 5,
    initialPage: 1
});

initNewsPagination({
    containerSelector: '#extended-container',
    paginationSelector: '#extended-pagination',
    itemsPerPage: 8,
    initialPage: 1
});

initNewsPagination({
    containerSelector: '#competitive-container',
    paginationSelector: '#competitive-pagination',
    itemsPerPage: 5,
    initialPage: 1
});