const inputBox = document.getElementById('inputField');  // 할 일 입력창
const addToDo = document.getElementById('addToDo');      // 버튼
const toDoList = document.getElementById('toDoList');    // 할 일 리스트창

addToDo.addEventListener('click', function() {
    const list = document.createElement('li');

    if (!inputBox.value)
        alert('경고')
    else
    {
        list.textContent = inputBox.value
        toDoList.appendChild(list)
        inputBox.value = ''
    }

    
    list.addEventListener('click', function() {
        list.style.textDecoration = "line-through"
    })
    list.addEventListener('dblclick', function(){
        toDoList.removeChild(list)
    })
})
