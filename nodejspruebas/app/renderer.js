const marked = require('marked');

const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');
const newFileButton = document.querySelector('#new-file');
const openFileButton = document.querySelector('#open-file');
const saveMarkdownButton = document.querySelector('#save-markdown');
const revertButton = document.querySelector('#revert');
const saveHtmlButton = document.querySelector('#save-html');
const showFileButton = document.querySelector('#show-file');
const openInDefaultButton = document.querySelector('#open-in-default');


//funcion encargada de convertir el texto
const renderToMarkdown = (markdown) => {
    htmlView.innerHTML = marked(markdown, { sanitize: true});
};
//con este de aqui abajo se captura lo que escribes 
markdownView.addEventListener('keyup', e => {
    const currentContent = e.target.value;
    renderToMarkdown(currentContent);
});