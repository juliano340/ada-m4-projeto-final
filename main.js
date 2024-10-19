import './style.css'

// USUARIOS:

let usuarios = [
  {
    id: 1,
    nome: 'Juliano'
  },
  {
    id: 2,
    nome: 'Raiza'
  },
  {
    id: 3,
    nome: 'Natalia'
  },
  {
    id: 4,
    nome: 'Jonathan'
  }
];

// TAGS: 

let tags = [

  {
    id: 1,
    tagName: 'Frontend',
  },

  {
    id: 2,
    tagName:  'Backend',

  },
  {
    id: 3,
    tagName: 'Fullstack'
  },

 ];


// FILTRO

const filters = {
  userId: null,
  tagId: null
}


// ELEMENTOS HTML

let $users = document.querySelector('#users');
let $tags = document.querySelector('#tags');
let $user = document.querySelector('#user');
let $tag = document.querySelector('#tag');


// EVENTOS:

//USERS

$users.addEventListener('click', (event) => {
  console.log(event.target);
  $users.querySelectorAll('li').forEach((li) => {
    console.log(li);
    li.classList.remove('active');
  })
  const id = event.target.dataset.id;
  filters.userId = id;
  console.log(id);

  event.target.classList.add('active');

  render();
})

// TAGS

$tags.addEventListener('click', (event) => {
  console.log(event.target);
  $tags.querySelectorAll('li').forEach((li) => {
    li.classList.remove('active');
  })

  const id = event.target.dataset.id;
  filters.tagId = id;

  console.log(id);
  event.target.classList.add('active');
  render();


})

// FUNÇÕES DE RENDERIZAÇÃO

function renderUser() {

  $user.textContent = filters.userId;

}

function renderTag() {

  $tag.textContent = filters.tagId;

}

function renderUsers() {

  const html = usuarios.map(usuario => {

    return `<li data-id="${usuario.id}"> ${usuario.nome} </li>`;
  }).join('');

   $users.innerHTML = html;


}


function renderTags() {

  const html = tags.map(tag => {

    return `<li data-id="${tag.id}"> ${tag.tagName} </li>`;
  }).join('');

  console.log(html);

  $tags.innerHTML = html;

}

renderUsers();
renderTags();

function render() {   
  renderUser();
  renderTag();
}

render();








