const img =document.querySelector('img');
const name =document.querySelector('h2');
const WorkingAt =document.querySelector('p');
const following =document.querySelector('.following');
const follower =document.querySelector('.followers');
const input =document.querySelector('input');
function displayUI(data){
    img.src = data.avatar_url;
    name.innerText = data.name;
    WorkingAt.innertext = data.company;
    followings.innertext = `following : ${data.followings}`;
    followers.innertext = `followers : ${data.followings}`;

}
function handleChange(event){
    if(event.keycode ===13){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', ' url');
        xhr.onload = function (){
            let UserData = JSON.parse(xhr.response);
            displayUI(UserData);

        };
        xhr.error = function (){
            console.log('something went wrong ...');
        };
        xhr.send();
        event.target.value = '';
    }
}
input.addEventListener('keyup',handleChange);