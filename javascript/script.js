
window.onload = function(){
  document.getElementById('change_heading').innerText = 'Hello world!'; 

  let section = document.querySelector('section');
  section.addEventListener('mouseover', function(x){
      let selectedColor = document.querySelector('.selected');
      selectedColor.innerText = x.target.className;
  })
  
  let newDiv = document.createElement('div');
  newDiv.className = 'purple';
  document.querySelector('section').appendChild(newDiv);

  
}

