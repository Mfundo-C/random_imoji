btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){
    let response = await fetch('https://emoji-api.com./emojis?access_key=ced1fdafffe2a9c3672cb67a2f41c04d4aebbb7a');
    data = await response.json()

    for (let i=0; i < 1500; i++){
        emoji.push({
         emojiName: data[i].character,
         emojiCode: data[i].unicodeName   
        })
    }

}

getEmoji()



btnEl.addEventListener('click', () => {
    const randomNUM = Math.floor(Math.random() * emoji.length);

    btnEl.innerText = emoji[randomNUM].emojiName;
    
   emojiNameEl.innerText = emoji[randomNUM].emojiCode;
});