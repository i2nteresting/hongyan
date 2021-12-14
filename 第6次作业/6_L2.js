const sleep= t  =>  new Promise (r => setTimeout(r,t))
    const p=document.querySelector("p")
    const content="元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。 念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。庭下如积水空明，水中藻、荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。"
    for(var i=0;i<content.length;i++){
        p.textContent += content[i]; 
        await sleep(200);
    }

   
 