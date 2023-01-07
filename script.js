console.log("*****Exercise 1 : Select A Kind Of Music*****")

// Display the value of the selected option.
const select = document.getElementById('genres')
const selectedOptionValue = select.value
console.log(selectedOptionValue)


// Add an additional option to the select tag:
// <option value="classic">Classic</option>
select.insertAdjacentHTML('beforeend', '<option value="classic">Classic</option>')
select.value = 'classic'

console.log("*****Exercise 2: Delete Colors*****")

const button = document.querySelector('input[type="button"]')
button.addEventListener('click', removecolor)

function removecolor() {
    const select2 = document.getElementById('colorSelect')
    const selectedOption = select2.value
    select2.remove(select2.selectedIndex)
}

console.log("*****Exercise 3 : Create A Shopping List (view html file)*****")




