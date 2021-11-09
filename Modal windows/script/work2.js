const btnLogOn = document.querySelector('.btnLogOn');
const btnOut = document.querySelector('.btnOut');
const userName = document.querySelector('.userName');


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modalClose');

const authorization = document.getElementById('authorization');
const inpLogin = document.getElementById('login');
const inpPas = document.getElementById('password');

const login = (user) => {
    btnLogOn.style.display = 'none';

    btnOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;

    modal.style.display = 'none';
};

const logout = () => {
    btnLogOn.style.display = 'flex';

    btnOut.style.display = 'none';
    userName.style.display = 'flex';
    userName.textContent = '';

    localStorage.removeItem('user');
};

btnOut.addEventListener('click', logout);

btnLogOn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') { modal.style.display = 'none'; }
});

authorization.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inpLogin.value);

    if ((inpLogin.value.trim().length > 0) && (inpPas.value.trim().length > 0)) {
        const user = {
            login: inpLogin.value,
            password: inpPas.value
        };
        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    }
    else {
        error.textContent = "Заполните все поля!";
    }
});

if (localStorage.getItem('user') !== null) {
    login(JSON.parse(localStorage.getItem('user')))
}