const container = $(`.fotorama`);
const MAIN_URL = `https://jsonplaceholder.typicode.com/photos?_limit=10`;

let photosList = [];

init();

function init() {
    fetchPhotos();
}

function fetchPhotos() {
    fetch(MAIN_URL)
        .then((resp) => resp.json())
        .then(setPhotos)
        .then(renderPhotos)
        .then(() => container.fotorama());
}

function setPhotos(list) {
    return (photosList = list);
}
function renderPhotos(list) {
    container.empty();
    list.map(renderPhoto);
}
function renderPhoto(list) {
    let img = createImg(list);
    img.appendTo(container);
}

function createImg(photo) {
    let link = createLink(photo);
    let img = $(`<img/>`, {
        src: photo.thumbnailUrl,
        alt: photo.title,
        id: photo.id,
    });
    img.appendTo(link);
    return link;
}

function createLink(photo) {
    let link = $(`<a/>`);
    link.attr(`href`, photo.url);
    return link;
}