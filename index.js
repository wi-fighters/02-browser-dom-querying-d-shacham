const body = document.getElementsByTagName('body');
for (let i = 0; i < body.length; i++) {
    body[i].style.fontFamily = 'Arial, Helvetica, sans-serif';
}

const header = document.getElementsByClassName('title');
header[0].style.textAlign = "center";

const menuHeaders = document.getElementsByClassName('category');
menuHeaders[0].style.color = "red";
menuHeaders[1].style.color = "green";
menuHeaders[2].style.color = "blue";
for (let k = 0; k < menuHeaders.length; k++) {
    menuHeaders[k].style.fontStyle = "italic";
    menuHeaders[k].style.textDecoration = "underline";
    menuHeaders[k].style.fontSize = 'xx-large';
    menuHeaders[k].style.paddingLeft = '25px';
}

const colorGenerator = () => {
    const colors = ['rgb(128, 0, 128, 0.5)', 'rgb(255, 165, 0, 0.5)', 'rgba(48, 253, 243, 0.5)', 'rgba(250, 93, 255, 0.502)', 'rgba(93, 255, 115, 0.502)'];
    const randomColor = colors[Math.floor(colors.length * Math.random())];

    return randomColor;
}

const foodList = document.getElementsByClassName('food-category');
for (let j = 0; j < foodList.length; j++) {
    foodList[j].style.listStylePosition = 'inside';
    foodList[j].style.backgroundColor = colorGenerator();
    foodList[j].style.width = '320px';
    foodList[j].style.padding = '5px 0 10px 25px';
    foodList[j].style.margin = '20px';
}

const listItem = document.getElementsByClassName('food-item');
for (let n = 0; n < listItem.length; n++) {
    listItem[n].style.margin = '15px 15px 15px 0';
}

const main = document.getElementsByClassName('main');
let mobile = window.matchMedia('(max-width: 700px)');

const warning = document.getElementById('warning');
warning.style.fontSize = 'xx-large';
warning.style.fontFamily = 'Courier';

const even = document.querySelectorAll('.allergy-info:nth-child(even)');
for (let l = 0; l < even.length; l++) {
    even[l].style.backgroundColor = 'rgb(146, 204, 255)';
}

const allergies = document.getElementsByClassName('allergies');
allergies[0].style.width = '300px';
allergies[0].style.marginTop = '-15px';

const allergyWarning = document.getElementsByClassName('allergy-warning');
allergyWarning[0].style.display = 'flex';
allergyWarning[0].style.flexDirection = 'column';
allergyWarning[0].style.alignItems = 'center';

const footer = document.getElementsByClassName('footer');

const foodDesc = document.getElementsByClassName('food-desc');
for (let m = 0; m < even.length; m++) {
    foodDesc[m].style.border = '4px solid orange';
    foodDesc[m].style.borderRadius = '50%';
    foodDesc[m].style.padding = '25px 28px';
    foodDesc[m].style.margin = '15px';
}
const firstFoodDesc = document.querySelectorAll('.food-desc:first-of-type');

firstFoodDesc[0].style.padding = '25px 12px';

if (mobile.matches) {
    main[0].style.display = 'flex';
    main[0].style.flexDirection = 'column';
    main[0].style.alignItems = 'center';
    footer[0].style.display = 'flex';
    footer[0].style.flexDirection = 'column';
    footer[0].style.alignItems = 'center';
    footer[0].style.justifyContent = 'center';
} else {
    main[0].style.display = 'flex';
    main[0].style.justifyContent = 'center';
    footer[0].style.display = 'flex';
    footer[0].style.flexDirection = 'row';
    footer[0].style.alignItems = 'center';
    footer[0].style.justifyContent = 'center';
}