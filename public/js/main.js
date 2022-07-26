import * as date from "./modules/handledDate.js";

let display_list = document.getElementById('display_list');
document.addEventListener('keypress',createToDo);
document.getElementById('btn_send').addEventListener('click',createToDo);
function disabledAllInput(){
    for (let i = 0; i < display_list.children.length; i++) {
        console.log(display_list.children[i].children[0]);
        display_list.children[i].children[0].disabled = true;
        
    }
}
function createToDo(e){  // fonction qui cree chaque todo item et ses outils
    if((e.key == 'Enter')){
        disabledAllInput(); 
    }
    
    let input = document.getElementById('input_text');
    if((e.key == 'Enter' || e.target.innerHTML== "send") && input.value != ''){  // verifie qu on touhce sur enter et que il y a qqch dans l'input
        let todo = document.createElement('input');
        
  
        let modifs = document.createElement('div');
        modifs.id = 'modifs_controls';

     
        let delete_btn = document.createElement('div');
        delete_btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        let done_btn = document.createElement('div');
        done_btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        modifs.append(delete_btn,done_btn);

        done_btn.addEventListener('click',function(e){
        
            if(e.target.className != 'fa-solid fa-rotate-left'){
                e.target.className = 'fa-solid fa-rotate-left';
            }
            else{
                e.target.className = 'fa-solid fa-check';
            }
            
            e.path[3].children[0].classList.toggle('done');
            console.log(e.path[3].children[0].classList);
    
           
        })

        delete_btn.addEventListener('click',function(e){
            let secure = confirm('etes vous sur ?');
            if (secure){
                e.path[4].removeChild(e.path[3]);
            }
            
        })

  
        let todo_box = document.createElement('div');
        todo_box.classList.add('todo_box_style');
        todo_box.append(todo,modifs);
        todo.value = input.value;
        todo.disabled = 'true';
        todo.classList.add('todo_style');
        todo_box.addEventListener('dblclick',function(e){
            console.log(e);
            e.path[0].disabled = false;
            
        })

        display_list.appendChild(todo_box);
        input.value = ''; // on reset l input
    }
    

}

let filtre_all = document.getElementById('filtreAll');
filtre_all.addEventListener('click',function(){
    for (let i = 0; i < display_list.children.length; i++) {
        display_list.children[i].style.display = 'flex';

    }
})

let filtre_done = document.getElementById('filtreDone');
filtre_done.addEventListener('click',function(){
    for (let i = 0; i < display_list.children.length; i++) {
        console.log( display_list.children[0] );
        if ( display_list.children[i].children[0].classList.contains("done")){
            display_list.children[i].style.display = 'flex';
        }else{
            display_list.children[i].style.display = 'none';
        }
        
    }
})
let filtre_undone = document.getElementById('filtreUndone');
filtre_undone.addEventListener('click',function(){
    for (let i = 0; i < display_list.children.length; i++) {
        console.log( display_list.children[0] );
        if ( display_list.children[i].children[0].classList.contains("done")){
            display_list.children[i].style.display = 'none';
        }else{
            display_list.children[i].style.display = 'flex';
        }
        
    }
})