import * as date from "./modules/handledDate.js";

let display_list = document.getElementById('display_list');
document.addEventListener('keypress',createToDo);
document.getElementById('btn_send').addEventListener('click',createToDo);

function createToDo(e){
    console.log(e);
    let input = document.getElementById('input_text').value;
    if((e.key == 'Enter' || e.target.innerHTML== "send") && input != ''){
        let todo = document.createElement('input');
        let dots = document.createElement('div');
        let modifs = document.createElement('div');
        modifs.id = 'modifs_controls';

        let delete_btn = document.createElement('p');
        delete_btn.innerHTML = `<i class="fa-solid fa-circle-trash"></i>`;
        let rename_btn = document.createElement('p');
        rename_btn.innerHTML = `<i class="fa-solid fa-input-numeric"></i>`;
        let done_btn = document.createElement('p');
        done_btn.innerHTML = `<i class="fa-solid fa-badge-check"></i>`;
        modifs.append(delete_btn,rename_btn,done_btn);

        dots.classList.add('dots_style')
        dots.addEventListener('click',function(){

        })
        let todo_box = document.createElement('div');
        todo_box.classList.add('todo_box_style');
        todo_box.append(todo,dots,modifs);
        dots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
        todo.value = input;
        todo.disabled = 'true';
        todo.classList.add('todo_style');

        display_list.appendChild(todo_box);
    }
    
}