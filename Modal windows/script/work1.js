let cards = [
    {
        id: "1",
        head: "Rosemary Cole",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque mi laoreet rhoncus bibendum. Vestibulum vulputate eget urna in vulputate. Sed mattis posuere magna, vel ultrices purus vestibulum nec. Nullam mauris elit, congue ut aliquet non, sollicitudin aliquet ante. Aenean imperdiet magna in ultrices bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ullamcorper quis nulla auctor commodo. In lacus dui, lacinia eu vehicula ac, gravida eget felis. Aliquam ullamcorper nibh quis augue iaculis, iaculis posuere quam consectetur. Etiam imperdiet aliquam tincidunt. Nullam porttitor tempus pellentesque. Proin vel consequat quam, eget bibendum mauris. Nullam efficitur fermentum nisi, ut dapibus mauris fringilla nec.",
        image: "media/modalWindows/img1.jpg",
    },
    {
        id: "2",
        head: "Roberta Riley",
        body: "Sed fermentum, tortor quis imperdiet luctus, diam velit dignissim mi, in placerat sem leo in leo. Maecenas nec tortor sed mi viverra aliquam. Proin aliquet eu ante non lacinia. Etiam mattis, turpis non gravida pulvinar, nibh arcu interdum leo, ac placerat nunc nisl ac diam. In imperdiet gravida nunc, sed feugiat massa egestas quis. Integer at mollis risus. Praesent viverra lacus ac diam ultrices pretium. Nam fringilla nunc quis sem ornare porta. Ut vel turpis diam. Duis cursus fringilla ultricies. Etiam mattis mollis nulla et cursus. Maecenas venenatis lobortis massa, at accumsan enim. Cras scelerisque erat sit amet congue feugiat.",
        image: "media/modalWindows/img2.jpg",
    },
    {
        id: "3",
        head: "Terrence Rivera",
        body: "Nunc malesuada interdum velit. Quisque mattis vel ipsum dapibus fermentum. Suspendisse rutrum, nunc vel lobortis mollis, eros turpis varius elit, ac ullamcorper sapien nisi vel velit. Donec imperdiet purus vitae volutpat lacinia. Aliquam egestas elit non nisi tincidunt, ut elementum magna ultrices. Fusce auctor pharetra finibus. Vivamus faucibus eget mi vehicula tincidunt. Donec ac tellus a enim euismod dictum. Donec fermentum, urna nec vulputate tristique, orci mauris finibus sem, in imperdiet lorem justo ut libero. Morbi accumsan urna arcu, eget interdum nisl mollis a. In efficitur vel dolor quis tincidunt. Curabitur ut ligula ut mi condimentum consectetur vel quis ipsum. Sed vitae augue sapien. Nam lorem dui, dignissim id felis sed, finibus blandit mi. Nam sagittis felis nibh, ac faucibus diam molestie sed. Morbi eu magna quis odio rutrum volutpat.",
        image: "media/modalWindows/img3.jpg",
    },
]

let cardsCount = document.querySelector('.cards');

createManyCards(cards, cardsCount);

function createManyCards(array, cont) {
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item));
    });
}

function createCard({ id, image, head, body }) {
    return `
            <article class = "card" id = "${id}">
            <img src = "${image}" class = "cardImg" alt = "head">
            <h2>${head}</h2>
            <p>${cropText(body)}</p>
            <div class = "bnts">
                <button class = "btn-delete">Удалить</button>
                <button class = "btn-info">Подробнее</button>
            </div>
            </article">
        `;
}

function cropText(text, length = 140) {
    return text.substr(0, length) + '...';
}

const modalWrapper = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal-close');

document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', showInfo)
});

document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', deleteCard);
});

btnClose.addEventListener('click', closeModal);

modalWrapper.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

function showInfo(e) {
    modalWrapper.classList.remove('hide');

    showCard(cards, e);
}

function closeModal() {
    modalWrapper.classList.add('hide');
}

function deleteCard(e) {
    e.target.closest('article.card').remove();
}

document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
        closeModal();
    }
});

function showCard(array, e) {
    let { image, head, body } = array.find(item => item.id === e.target.closest('article.card').id);
    document.querySelector('.card-modal-left > img').src = image;
    document.querySelector('.card-modal-right > h3').textContent = head;
    document.querySelector('.card-modal-right > p').textContent = body;
}