const installerwinUrl = 'https://github.com/josecantero/curseApp/releases/download/untagged-fae40158193f8345d799/curseApp-Setup-1.0.78.exe';
const installerlinUrl = 'https://github.com/josecantero/curseApp/releases/download/untagged-fae40158193f8345d799/curseApp-1.0.78.AppImage';
const grupoFbUrl = 'https://www.facebook.com/groups/cursosgratisenstreaming/';

const btnClass = 'btn primary-cta'
const winClass = 'win32'
const linClass = 'linux'

const installerwin = document.getElementsByClassName(btnClass + winClass);
console.log(installerwin);
openExternalLink(installerwin, installerwinUrl);

const installerlin = document.getElementsByClassName(btnClass + linClass);
console.log(installerlin);
openExternalLink(installerlin, installerlinUrl);

const grupoFb = document.getElementsByClassName(btnClass + ' fbg');
openExternalLink(grupoFb, grupoFbUrl);

function openExternalLink(button, url) {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            window.location.href = url;
        });
    }
}
