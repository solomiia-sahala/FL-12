

// Your code goes here

const rootNode = document.getElementById('root');

window.addEventListener('hashchange', (event) => {
     rootNode.innerHTML = '';

     let hash = location.hash;

     if( hash === '#') {
        drowMainPage();
     } else if (hash === '#/add') {
         drowAdd();
     } else if (hash.includes('#/modify')) {
        let idStartIndex = hash.lastIndexOf('/');
        let id = hash.substring(idStartIndex + 1, hash.length - 1);
         drowModify(id);
     }
 });
drowMainPage();

function drowMainPage() {
    let mainPage = document.createElement('div');
    rootNode.append(mainPage);

    let addNewButton = document.createElement('button');
    addNewButton.textContent = 'Add new';
    addNewButton.id = 'button-add-new';
    mainPage.append(addNewButton);
  
    for (let i = 0; i < localStorage.length; i++) {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let termDiv = document.createElement('div');
        mainPage.append(termDiv);

        let term = document.createElement('input');
        term.setAttribute('type', 'text');
        term.setAttribute('placeholder', 'Term');
        term.value = item.term;
        termDiv.append(term);

        let definition = document.createElement('input');
        definition.setAttribute('type', 'text');
        definition.setAttribute('placeholder', 'Definition');
        definition.value = item.definition;
        termDiv.append(definition);

        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        termDiv.append(btnEdit);

        let btnRemove = document.createElement('button');
        btnRemove.textContent = 'Remove';
        termDiv.append(btnRemove);

        btnRemove.addEventListener('click', () => { 
            localStorage.removeItem(localStorage.key(i));
            mainPage.removeChild(termDiv);
        });

        btnEdit.addEventListener('click', () => { 
            location.hash = '/modify/' + localStorage.key(i);
        });
    } 

    addNewButton.addEventListener('click', () => {
        location.hash = '/add';
    });
}
 
function drowAdd() {
    let addPage = document.createElement('div');
    rootNode.append(addPage);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    addPage.append(nameInput);

    let btnAdd = document.createElement('button');
    btnAdd.textContent = 'Add terms';
    addPage.append(btnAdd);

    let btnSave = document.createElement('button');
    btnSave.textContent = 'Save changes';
    addPage.append(btnSave);

    let btnCancel = document.createElement('button');
    btnCancel.textContent = 'Cancel';
    addPage.append(btnCancel);

    let termDiv = document.createElement('div');
    addPage.append(termDiv);
    termDiv.hidden = true;

    let term = document.createElement('input');
    term.setAttribute('type', 'text');
    term.setAttribute('placeholder', 'Term');
    termDiv.append(term);

    let definition = document.createElement('input');
    definition.setAttribute('type', 'text');
    definition.setAttribute('placeholder', 'Definition');
    termDiv.append(definition);

    btnAdd.addEventListener('click', () => {
        termDiv.hidden = !termDiv.hidden;
    });

    btnCancel.addEventListener('click', () => {
        location.hash = '';
    });

    btnSave.addEventListener('click', () => {
        let item = new Object();
        item.term = term.value;
        item.definition = definition.value;
        localStorage.setItem(nameInput.value, JSON.stringify(item));
    });
}


function drowModify(id) {
    let modifyPage = document.createElement('div');
    rootNode.append(modifyPage);

    let modifyItem = JSON.parse(localStorage.getItem(id));

    let term = document.createElement('input');
    term.setAttribute('type', 'text');
    term.setAttribute('placeholder', 'Term');
    term.value = modifyItem.term;
    modifyPage.append(term);

    let definition = document.createElement('input');
    definition.setAttribute('type', 'text');
    definition.setAttribute('placeholder', 'Definition');
    definition.value = modifyItem.definition;
    modifyPage.append(definition);

    let btnSave = document.createElement('button');
    btnSave.textContent = 'Save changes';
    modifyPage.append(btnSave);

    let btnCancel = document.createElement('button');
    btnCancel.textContent = 'Cancel';
    modifyPage.append(btnCancel);

    btnCancel.addEventListener('click', () => {
        location.hash = '';
    });

    btnSave.addEventListener('click', () => {
        let item = new Object();
        item.term = term.value;
        item.definition = definition.value; 
        localStorage.setItem(id, JSON.stringify(item));
    });
}









