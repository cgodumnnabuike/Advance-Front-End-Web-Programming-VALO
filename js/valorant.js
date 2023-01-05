function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function populateList(agents)
{
	console.log(agents.data);
	const agentsFragment = document.createDocumentFragment();
	agents.data.forEach(function(agent){
		const newLi=document.createElement("li");
		const newLink=document.createElement("a");
		const newImg=document.createElement("img");
		newLink.textContent=agent.displayName;
		newImg.src=agent.killfeedPortrait;
		//adds a querystring to the URL e.g. details.html?id=2
		newLink.setAttribute("href","details.html?id="+agent.uuid);
		newLi.appendChild(newLink);
		newLi.appendChild(newImg);
		agentsFragment.appendChild(newLi);
	})
	const agentsList=document.querySelector("#Agent-list");
	agentsList.appendChild(agentsFragment);
	
} //end of populateList, do not remove this line

function init(){
	

	loadData ("https://valorant-api.com/v1/agents?isPlayableCharacter=true",populateList);
}

init();
