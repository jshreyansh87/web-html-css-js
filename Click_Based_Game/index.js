const submit = document.getElementById('FormSubmit');

var selected_difficulty;
var duration;
var selected_shape;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let Difficulty = document.getElementsByName('Difficulty');
    for (let radio of Difficulty) {
        if (radio.checked) {
            selected_difficulty = radio.value;
        }
    };

    duration = document.getElementById("duration").value;

    let Shapes = document.getElementsByName('Shapes');
    for (let radio of Shapes) {
        if (radio.checked) {
            selected_shape = radio.value;
        }
    };

    location.href = `Gaming_Zone.html?difficulty=${selected_difficulty}&duration=${duration}&shape=${selected_shape}`;
});