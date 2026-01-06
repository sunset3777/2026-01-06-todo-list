//新增新的待辦事項
const inputText = document.querySelector('#inputtext input')
const addButton = document.querySelector('#inputtext a')
const ul = document.querySelector('#list')

function addItem(e){
    e.preventDefault();

    if (inputText.value ==='') {
        alert('不能輸入空的待辦事項');
        return;
    }

    const li = document.createElement('li')
    
    li .innerHTML =
    `<label class="todoList_label">
    <input class="todoList_input" type="checkbox" value="true">
    <span>${inputText.value}</span>
    </label>
    <a href="#">
    <i class="fa fa-times"></i>
    </a>`
    
    ul .appendChild(li);

    inputText.value ='';

    console.log('成功加入新待辦事項!');
}

addButton.addEventListener('click',addItem)

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