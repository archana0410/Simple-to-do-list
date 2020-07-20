const addbutton=document.querySelector('.addbutton');
var input=document.querySelector('.input');
const container=document.querySelector('.container');
class item{
	constructor(itemName){
		this.createDiv(itemName);
	}
	createDiv(itemName){
		let input=document.createElement('input');	
		input.value=itemName;
		input.disabled=true;
		input.classList.add('item_input');
		input.type="text";

		let itembox=document.createElement('div');
		itembox.classList.add('item');

		let editbutton=document.createElement('button');
		editbutton.classList.add('editbutton');
		editbutton.innerHTML="EDIT";

		let removebutton=document.createElement('button');
		removebutton.classList.add('removebutton');
		removebutton.innerHTML="DELETE";

		container.appendChild(itembox);
		itembox.appendChild(input);
		itembox.appendChild(editbutton);
		itembox.appendChild(removebutton);

		editbutton.addEventListener('click', () => this.edit(input));
		removebutton.addEventListener('click', () => this.remove(itembox));
	}

	edit(input){
		input.disabled = !input.disabled;
	}
	remove(item){
		container.removeChild(item);
	}
}
function check() {
	if(input.value != "")
	{
		new item(input.value);	
		input.value=""
	}
}

addbutton.addEventListener('click',check);
window.addEventListener('keydown',(e) =>{
	if(e.which==13)
	{
		check();
	}

})