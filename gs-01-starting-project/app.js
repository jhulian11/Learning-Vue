const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

const addGoal = () => {
    const enteredValue = input.value;

    if(enteredValue.trim() == "")
        return;

    const listItem = document.createElement('li');
    
    listItem.textContent = enteredValue;
    list.appendChild(listItem);

    input.value = "";
};

btn.addEventListener('click', addGoal);
