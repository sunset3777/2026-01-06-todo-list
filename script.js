//新增刪除功能
ul.addEventListener('click', deleteItem);

function deleteItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('fa-times')) {
        const targetLi = e.target.closest('li');
        targetLi.remove();
        
        console.log('項目已刪除');
    }
}