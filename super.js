import { list } from "./script.js";

document.querySelector('#search-button').addEventListener('click', () => {
    search();
});

function search(){
    const val = document.querySelector('#search-input').value.trim().toLowerCase();
    const found = list.find(item => (item.name.toLowerCase() === val) || (String(item.id)===val));

    if (found) {
        const hiddenCard = document.querySelector('#hidden-card');
        const pageContent = document.querySelector('#page-content');
        pageContent.classList.add('blur');
        hiddenCard.innerHTML = `
            <div class="card">
                <div class="heading-card">
                    <div class="details">
                        <h2>${found.name}</h2>
                        <div class="weight-height">
                            <p>Weight : ${found.weight}</p>
                            <p>Height : ${found.height}</p>
                        </div>
                    </div>
                    <button class="close-btn">X</button>
                </div>
                <div class="img-stats">
                    <img src="${found.image}" alt="">
                    <div class="stats">
                        <h2>POWER STATS</h2>
                        <div class="wrapper">
                        <div class="stat">
                            <div class="stat-no"><span>HP</span><span>${found.hp}</span></div>
                            <div class="bar"><div class="fill red" style="width:${found.hp}%"></div></div>
                        </div>
                        <div class="stat">
                            <div class="stat-no"><span>Attack</span><span>${found.attack}</span></div>
                            <div class="bar"><div class="fill yellow" style="width:${found.attack}%"></div></div>
                        </div>
                        <div class="stat">
                            <div class="stat-no"><span>Defense</span><span>${found.defense}</span></div>
                            <div class="bar"><div class="fill blue" style="width:${found.defense}%"></div></div>
                        </div>
                        <div class="stat">
                            <div class="stat-no"><span>Special Attack</span><span>${found.specialAttack}</span></div>
                            <div class="bar"><div class="fill green" style="width:${found.specialAttack}%"></div></div>
                        </div>
                        <div class="stat">
                            <div class="stat-no"><span>Speed</span><span>${found.speed}</span></div>
                            <div class="bar"><div class="fill red" style="width:${found.speed}%"></div></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="uni"><p class="uni-p">Universe : </p><p class="inner-text">${found.uni}</p></div>
                <div class="type"><p class="type-p">Type :</p><p class="inner-text">${found.type}</p></div>
                <div class="special"><p class="special-p">SPECIAL :</p><p class="inner-text">${found.special}</p></div>
            </div>
        `;

        hiddenCard.classList.remove("hidden");
        hiddenCard.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn')) {
                hiddenCard.innerHTML="";
                hiddenCard.classList.add('hidden');
                pageContent.classList.remove('blur');
            }
        });
    }
}
document.querySelector('#increase').addEventListener('click',
    ()=>{
        const val=document.querySelector('#search-input').value;
        const found = list.find(item => (item.name.toLowerCase() === val));
        if(found){
                document.querySelector('#search-input').value=Number(found.id)+Number(1);
            }
        else{
            document.querySelector('#search-input').value=Number(val)+Number(1);
        }
        
    }
);
document.querySelector('#decrease').addEventListener('click',
    ()=>{
        const val=document.querySelector('#search-input').value;
        if(val<1){
            document.querySelector('#search-input').value=0;
        }
        else if(isNaN(val)){
            const found = list.find(item => (item.name.toLowerCase() === val));
            if(found){
                document.querySelector('#search-input').value=Number(found.id)-Number(1);
            }
        }
        else{
            document.querySelector('#search-input').value=Number(val)-Number(1);
        }
    }
);
document.querySelector('#search-input').addEventListener("keypress",
    (event)=>{
        if(event.key==="Enter"){
            search();
            event.preventDefault();
        }
    }
)