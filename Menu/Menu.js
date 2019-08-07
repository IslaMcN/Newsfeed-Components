/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuButton = document.querySelector('.menu-selector')
function menuCreator(items){
  const thing = document.createElement('div')
  let menu = document.createElement('ul')
  let item = document.createElement('li');
 menu.appendChild(menuList);
 menuList.appendChild(menuListItems);

  item.textContent = items;

  thing.classList.add('.menu')

  thing.addEventListener('click', function openNav() {
    document.getElementById(".menu").style.width = "250px";
  },
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById(".menu").style.width = "0";
  } )
 return menu
} 

let containers = document.querySelector('.container')

for(let i = 0; i < menuItems; i++){
  let menu = menuCreator(menuItems[i]);
  containers.appendChild(menu);
}




function openNav() {
  document.getElementById(".menu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById(".menu").style.width = "0";
}