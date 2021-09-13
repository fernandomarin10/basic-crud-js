document.addEventListener('DOMContentLoaded', function (){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');
    const alert = document.getElementById('alert');

    function addTodo(){
        //una funcion dentro de una funcion permite usar las variables sin que se pasen como parametros
        if(title.value === '' || description.value === ''){
            console.error('Title and description are required');
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-danger mb-1 ml-1">
            <i class="fa fa-trash"></i>
            </button>
        </td>
        `;
    }

    btn.onclick = addTodo;
});

//26:31


