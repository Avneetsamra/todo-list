const text = document.getElementById('addTodoItem')
const button = document.getElementById('addTodo')
const lists = document.getElementById('todoList')


let s =document.createElement('style')
document.body.appendChild(s)



let a = 0
button.addEventListener('click', () =>
{
    let li = document.createElement('li')
    li.textContent= text.value
    li.id= "li"+a
    a=a+1
    lists.appendChild(li)
    
    
    let dell = document.createElement('button')
    let t =document.createTextNode("delete");
    dell.appendChild(t)
    
    li.appendChild(dell)
   
   
   li.addEventListener('click', ()=>
    {
     s.innerHTML = "#" +li.id + "{color:orange; text-decoration:line-through;}"   
    })
    
    dell.addEventListener('click', ()=>
    {
       s.innerHTML = "#" +li.id + "{color:black; text-decoration:line-through;}"   
        // e.stopPropagation()
    })
})
 