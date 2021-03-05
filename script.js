// pages 
const newWrapper = document.querySelector('.new-wrapper')
const completedWrapper = document.querySelector('.completed-wrapper')
const newList = document.querySelector('.new-list')
const completedList = document.querySelector('.completed-list')

// buttons 
const addNewTask = document.querySelector('.js-add-task')
const openNew = document.querySelector('.js-open-new')
const openCompleted = document.querySelector('.js-open-completed')

// input 
const textInput = document.querySelector('.text-input')


openNew.onclick = function () {
    newWrapper.classList.remove('_hidden')
    completedWrapper.classList.add('_hidden')

    openNew.classList.add('_active-link')
    openCompleted.classList.remove('_active-link')
}

openCompleted.onclick = function () {
    completedWrapper.classList.remove('_hidden')
    openCompleted.classList.add('_active-link')

    openNew.classList.remove('_active-link')
    newWrapper.classList.add('_hidden')
}

const createListItem = function (text) {
    const newTask = document.createElement('li')
    newTask.classList.add('new-item')

    const taskTitle = document.createElement('span')
    taskTitle.classList.add('task-title')

    taskTitle.textContent = text
    taskTitle.setAttribute('contenteditable', true )

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')


    newTask.appendChild(checkbox)

    newTask.appendChild(taskTitle)


    const closeBtn = document.createElement('button')
    closeBtn.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10.253" y1="30.052" x2="30.052" y2="10.2531" stroke="#000"/>
    <line x1="10.253" y1="9.54595" x2="30.052" y2="29.3449" stroke="#000"/>
    </svg>`

    closeBtn.type = 'button'
    closeBtn.classList.add('close-button')
    closeBtn.onclick = function () {
        newTask.remove()
    }


    checkbox.addEventListener('click', function() {
        completedList.appendChild(newTask)
    })

    // checkbox.addEventListener('click', function() {
    //     completedList.appendChild(newTask)
    // })

    newTask.appendChild(closeBtn)
    
    return newTask;
}

textInput.oninput = function () {
    if (!textInput.value) {
        addNewTask.classList.remove('ready-to-add-btn')
    } else {
        addNewTask.classList.add('ready-to-add-btn')
    }

}

textInput.addEventListener('keydown', function (e) {
 if (e.keyCode === 13) {
    if (!textInput.value) {
        return;
    }

    const newListItem = createListItem(textInput.value)
    newList.appendChild(newListItem)
    textInput.value = ''
    addNewTask.classList.remove('ready-to-add-btn')
 }
})


addNewTask.onclick = function () {
    if (!textInput.value) {
        return;
    }

    const newListItem = createListItem(textInput.value)
    newList.appendChild(newListItem)
    textInput.value = ''
    addNewTask.classList.remove('ready-to-add-btn')
    
    // localStorage.setItem('task', newListItem);
}


// TODO
// сохранение в localstorage


// let cat = localStorage.getItem('task');