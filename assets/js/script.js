const form = document.querySelector('#comment-form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const comments = document.querySelector('#comments');
const error = document.querySelector('#error');

function addComment(name, message) {
  const article = document.createElement('article');
  article.className = 'comment';
  const author = document.createElement('strong');
  author.textContent = name;
  const text = document.createElement('p');
  text.textContent = message;
  const removeButton = document.createElement('button');
  removeButton.className = 'delete';
  removeButton.type = 'button';
  removeButton.textContent = '🗑️ Supprimer';
  removeButton.addEventListener('click', function () { article.remove(); });
  article.appendChild(author);
  article.appendChild(text);
  article.appendChild(removeButton);
  comments.appendChild(article);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (name.length < 2) { error.textContent = 'Le nom doit contenir au moins 2 caractères.'; error.hidden = false; return; }
  if (message.length < 10) { error.textContent = 'Le commentaire doit contenir au moins 10 caractères.'; error.hidden = false; return; }
  addComment(name, message);
  form.reset();
  error.hidden = true;
});

addComment('Téo', 'Super recette !');
addComment('Léa', 'Test de commentaire');
