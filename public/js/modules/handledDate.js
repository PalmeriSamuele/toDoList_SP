let newdate = new Date();
let month_name = newdate.toLocaleString('default', { month: 'long' });
let date_box = document.getElementById('date_now');
date_box.innerText = newdate.getDate()+' '+ month_name;