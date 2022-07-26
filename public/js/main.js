import * as date from "./modules/handledDate.js";

let display_list = document.getElementById('display_list');
document.addEventListener('keypress',createToDo);
document.getElementById('btn_send').addEventListener('click',createToDo);

function createToDo(e){
    console.log(e);
    let input = document.getElementById('input_text').value;
    if((e.key == 'Enter' || e.target.innerHTML== "send") && input != ''){
        let todo = document.createElement('input');
        todo.classList.add('undone');
        todo.addEventListener('dblclick',function(e){
            console.log(e);
            todo.disabled = 'false';
        })
       
        let modifs = document.createElement('div');
        modifs.id = 'modifs_controls';
        //modifs.innerHTML= `<i class="fa-solid fa-trash-can" ></i> <i id="done" class="fa-solid fa-check" ></i>`;

     
        let delete_btn = document.createElement('div');
        delete_btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        let done_btn = document.createElement('div');
        done_btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        modifs.append(delete_btn,done_btn);

        done_btn.addEventListener('click',function(e){
            console.log(e);
        })

  
        let todo_box = document.createElement('div');
        todo_box.classList.add('todo_box_style');
        todo_box.append(todo,modifs);
        todo.value = input;
        todo.disabled = 'true';
        todo.classList.add('todo_style');

        display_list.appendChild(todo_box);
    }
    
}