//引入proxy-web-storage套件
import {local} from './node_modules/proxy-web-storage/package.json'
if(!local.tododata){
    local.tododata=[{content: '做todo list !', checked: false}];
}


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

    local.tododata.push({
        content: inputText.value,
        checked: false
    });

    inputText.value = '';
    renderData();

    console.log('成功加入新待辦事項!');
}

addButton.addEventListener('click',addItem)

//新增刪除功能
ul.addEventListener('click', deleteItem);


function deleteItem(e) {
    
    if (e.target.classList.contains('fa-times')) {
        e.preventDefault();
        const index = e.target.getAttribute('data-num');
        local.tododata.splice(index, 1);
        renderData();
    }
}