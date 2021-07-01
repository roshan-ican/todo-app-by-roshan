// // selectors\
// const todoInput = document.querySelector( '.todo-input' );
// const todoButton = document.querySelector( '.todo-button' );
// const todoList = document.querySelector( '.todo-list' );
// const filterOption = document.querySelector( ".filter-todo" );


// // event listeners
// document.addEventListener( "DOMContentLoaded", getTodos );
// todoButton.addEventListener( 'click', addTodo );
// todoList.addEventListener( 'click', deleteTodo );
// filterOption.addEventListener( "click", filterTodo );



// // Functions

// function addTodo( e ) {
//     // Prevent form from submitting
//     e.preventDefault();
//     //TodoDIV
//     const todoDiv = document.createElement( "div" );
//     todoDiv.classList.add( "todo" );
//     // create ListItem
//     const newTodo = document.createElement( "li" );
//     newTodo.innerText = todoInput.value;
//     //save to local - do this before
//     // save to local
//     saveLocalTodos( todoInput.value );
//     //
//     newTodo.classList.add( 'todo-item' );
//     todoDiv.appendChild( newTodo );
//     todoInput.value = "";

//     //check mark Button
//     const completeButton = document.createElement( "button" );
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completeButton.classList.add( "complete-btn" );
//     todoDiv.appendChild( completedButton );
//     // trash mark button 2
//     const trashButton = document.createElement( "button" );
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add( "trash-btn" );
//     todoDiv.appendChild( trashButton );
//     //append lists
//     todoList.appendChild( todoDiv );
//     // clear todo input value
// }

// function deleteTodo( e ) {
//     const item = e.target;

//     if ( item.classList[ 0 ] === "trash-btn" ) {
//         // e.target.parentElement.remove();
//         const todo = item.parentElement;
//         todo.classList.add( "fall" );
//         // at the end 
//         removeLocalTodos( todo );
//         todo.addEventListener( "transitionend", e => {
//             todo.remove();
//         } )
//     }
//     if ( item.classList[ 0 ] === "complete-btn" ) {
//         const todo = item.parentElement;
//         todo.classList.toggle( "completed" );
//         console.log( todo );
//     }


// }

// function filterTodo( e ) {
//     const todos = todoList.childNodes;
//     todos.forEach( function ( todo ) {
//         switch ( e.target.value ) {
//             case "all":
//                 todo.style.display = 'flex';
//                 break;
//             case "completed":
//                 if ( todo.classList.contains( 'completed' ) ) {
//                     todo.style.display = 'flex';
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if ( !todo.classList.contains( 'completed' ) ) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;

//         }
//     } )

// }

// function saveLocalTodos( todo ) {
//     // check if it's already there then don't store
//     let todos;
//     if ( localStorage.getItem( 'todos' ) === null ) {
//         todos = [];
//     } else {
//         todos = JSON.parse( localStorage.getItem( 'todos' ) );
//     }
//     todos.push( todo );
//     localStorage.setItem( 'todos', JSON.stringify( todos ) );
// }

// function removeLocalTodos( todo ) {
//     let todos;
//     if ( localStorage.getItem( 'todos' ) === null ) {
//         todos = [];
//     } else {
//         todos = JSON.parse( localStorage.getItem( 'todos' ) );
//     }
//     const todoIndex = todo.children[ 0 ].innerText;
//     todos.splice( todos.indexOf( todoIndex ), 1 );
//     localStorage.setItem( todos, JSON.stringify( todos ) );
// }

// function getTodos() {
//     let todos;
//     if ( localStorage.getItem( 'todos' ) === null ) {
//         todos = [];
//     } else {
//         todos = JSON.parse( localStorage.getItem( 'todos' ) );
//     }
//     todos.forEach( function ( todo ) {
//         //create todo div
//         const todoDiv = document.createElement( "div" );
//         todoDiv.classList.add( "todo" );
//         //create list 
//         const newTodo = document.createElement( "li" );
//         newTodo.innerText = todo;
//         newTodo.classList.add( "todo-item" );
//         todoDiv.appendChild( newTodo );
//         todoInput.value = "";
//         // create completed button
//         const completedButton = document.createElement( "button" );
//         completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//         completedButton.classList.add( "complete-btn" );
//         todoDiv.appendChild( completedButton );
//         // create trash button
//         const trashButton = document.createElement( "button" );
//         trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//         trashButton.classList.add( "trash-btn" );
//         todoDiv.appendChild( trashButton );
//         //attach final todo
//         todoList.appendChild( todoDiv );

//     } )
// }


//Select DOM
const todoInput = document.querySelector( ".todo-input" );
const todoButton = document.querySelector( ".todo-button" );
const todoList = document.querySelector( ".todo-list" );
const filterOption = document.querySelector( ".filter-todo" );

//Event Listeners
document.addEventListener( "DOMContentLoaded", getTodos );
todoButton.addEventListener( "click", addTodo );
todoList.addEventListener( "click", deleteTodo );
filterOption.addEventListener( "click", filterTodo );

//Functions

function addTodo( e ) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement( "div" );
    todoDiv.classList.add( "todo" );
    //Create list
    const newTodo = document.createElement( "li" );
    newTodo.innerText = todoInput.value;
    //Save to local - do this last
    //Save to local
    saveLocalTodos( todoInput.value );
    //
    newTodo.classList.add( "todo-item" );
    todoDiv.appendChild( newTodo );
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement( "button" );
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add( "complete-btn" );
    todoDiv.appendChild( completedButton );
    //Create trash button
    const trashButton = document.createElement( "button" );
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add( "trash-btn" );
    todoDiv.appendChild( trashButton );
    //attach final Todo
    todoList.appendChild( todoDiv );
}

function deleteTodo( e ) {
    const item = e.target;

    if ( item.classList[ 0 ] === "trash-btn" ) {
        // e.target.parentElement.remove();
        const todo = item.parentElement;
        todo.classList.add( "fall" );
        //at the end
        removeLocalTodos( todo );
        todo.addEventListener( "transitionend", e => {
            todo.remove();
        } );
    }
    if ( item.classList[ 0 ] === "complete-btn" ) {
        const todo = item.parentElement;
        todo.classList.toggle( "completed" );
        console.log( todo );
    }
}

function filterTodo( e ) {
    const todos = todoList.childNodes;
    todos.forEach( function ( todo ) {
        switch ( e.target.value ) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if ( todo.classList.contains( "completed" ) ) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if ( !todo.classList.contains( "completed" ) ) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    } );
}

function saveLocalTodos( todo ) {
    let todos;
    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    } else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }
    todos.push( todo );
    localStorage.setItem( "todos", JSON.stringify( todos ) );
}

function removeLocalTodos( todo ) {
    let todos;
    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    } else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }
    const todoIndex = todo.children[ 0 ].innerText;
    todos.splice( todos.indexOf( todoIndex ), 1 );
    localStorage.setItem( "todos", JSON.stringify( todos ) );
}

function getTodos() {
    let todos;
    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    } else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }
    todos.forEach( function ( todo ) {
        //Create todo div
        const todoDiv = document.createElement( "div" );
        todoDiv.classList.add( "todo" );
        //Create list
        const newTodo = document.createElement( "li" );
        newTodo.innerText = todo;
        newTodo.classList.add( "todo-item" );
        todoDiv.appendChild( newTodo );
        todoInput.value = "";
        //Create Completed Button
        const completedButton = document.createElement( "button" );
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add( "complete-btn" );
        todoDiv.appendChild( completedButton );
        //Create trash button
        const trashButton = document.createElement( "button" );
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add( "trash-btn" );
        todoDiv.appendChild( trashButton );
        //attach final Todo
        todoList.appendChild( todoDiv );
    } );
}