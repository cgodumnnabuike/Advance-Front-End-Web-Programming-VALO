function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()





function populateContent(agent)
{
	
	console.log(agent.data);
	const displayNameEl=document.querySelector("#displayName");
	const descriptionEl=document.querySelector("#description");
	const abilitiesEl=document.querySelector("#abilities");
	const roleEl=document.querySelector("#role");
	displayNameEl.textContent = agent.data.displayName;
	descriptionEl.textContent = agent.data.description;
	const carouselEl=document.getElementById('carousel-image');
	const carouselEl2=document.getElementById('carousel-image1');
	carouselEl.src= agent.data.fullPortrait;
	carouselEl2.src = agent.data.background;
    roleEl.textContent = `${agent.data.role.displayName} - ${agent.data.role.description}`;
	
	
	const abilities = agent.data.abilities
	abilities.forEach(function(ability){
		const abiLi=document.createElement("li");
		console.log(ability.description)
		abiLi.textContent=`${ability.displayName} - ${ability.description}`;
		abilitiesEl.appendChild(abiLi);
	});

	


}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://valorant-api.com/v1/agents/"+id ,populateContent);
	
}


init();
