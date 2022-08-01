image_array = [
    'WebDuck1.webm',
    'WebDuck2.webm',
    'WebDuck3.webm',
    'WebDuck4.webm',
    'WebDuck4.webm',
    'WebDuck5.webm',
    'WebDuck6.webm',
    'WebDuck7.webm',
    'WebDuck8.webm',
    'WebDuck9.webm',
]

var filename = selected_image

body.onload = function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index]

    document.getElementById('preview').src = `../Website/${selected_image}`
    filename = selected_image
}