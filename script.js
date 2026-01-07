//renderData儲存陣列
let tododata=[{
    content:'做todo list !',
    checked:false
}];

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

    const newtodo ={
        content:inputText.value,
        checked:false
    }

    tododata.push(newtodo);
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
        const targetLi = e.target.closest('li');
        targetLi.remove();
        
        console.log('項目已刪除');
    }
}

//新增renderData來控制輸入的待辦事項
function renderData(){
    console.log("渲染函式啟動了！");
    let str="";
    tododata.forEach(function(item, index){
        str +=`<li>
                <label class="todoList_label">
                    <input class="todoList_input" type="checkbox" 
                           ${item.checked ? 'checked' : ''} 
                           data-num="${index}">
                    <span>${item.content}</span>
                </label>
                <a href="#" class="delete" data-num="${index}">
                    <i class="fa fa-times" data-num="${index}"></i>
                </a>
            </li>`;
            
            });
    console.log("目前的 HTML 字串內容：", str);
    ul.innerHTML = str;
}