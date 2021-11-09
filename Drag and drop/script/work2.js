let puzzles = document.querySelectorAll('.puzzles');
let boxes = document.querySelectorAll('.box');
let puzImg = document.querySelectorAll('.puzImg');

let dragItem = null;

puzImg.forEach(img => {
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragend', dragEnd);
});

[...puzzles, ...boxes].forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
});

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
    dragItem = e.target;
}

function dragEnd(e) {
    e.target.style.display = '';
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drop');
}
function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drop');
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove('drop');

    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
    }
}