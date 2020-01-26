const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function bildFolder(children, container) {
  children.forEach(child => {
    let div = document.createElement('div');

    let image = document.createElement('i');
    image.classList.add('material-icons');
    let spanText = document.createElement('span');
    spanText.textContent = child.title;

    div.appendChild(image);
    div.appendChild(spanText);
    container.appendChild(div);

    if (child.folder) {
      image.innerText = 'folder';
      let innerDiv = document.createElement('div');
      div.appendChild(innerDiv);

      innerDiv.hidden = true;

      div.addEventListener('click', (event) => {
        if (innerDiv.hidden) {
          image.innerText = 'folder_open';
          innerDiv.hidden = false;
        } else {
          image.innerText = 'folder';
          innerDiv.hidden = true;
        }
        event.stopPropagation();
      });

      if (child.children) {
        bildFolder(child.children, innerDiv)
      } else {
        let emptyEl = document.createElement('span');
        emptyEl.classList.add('empty')
        emptyEl.textContent = 'Folder is empty';
        innerDiv.appendChild(emptyEl);
      }
    } else {
      image.innerText = 'insert_drive_file';
      image.classList.add('file')
    }
  }
  )
}

bildFolder(structure, rootNode);