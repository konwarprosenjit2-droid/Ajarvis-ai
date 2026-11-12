const form=document.getElementById('chatForm');
const input=document.getElementById('userInput');
const messages=document.getElementById('messages');
const replies=[
  {keys:['hello','hi','hey'],text:'Hello, Prosenjit! All systems are running smoothly. What would you like to do today?'},
  {keys:['what can you do','features','help'],text:'In this demo I can greet you, share fun facts, offer motivation, and respond to a few common questions. I am a simulated assistant, not connected to a live AI service yet.'},
  {keys:['time','clock'],text:'I do not have a live clock connection in demo mode. You can check the time shown on your device.'},
  {keys:['fun fact','fact'],text:'Fun fact: A day on Venus is longer than its year. Venus takes longer to rotate once than to orbit the Sun!'},
  {keys:['motivation','motivate'],text:'Small steps create big progress. Stay curious, keep learning, and give your best to one task at a time, Prosenjit.'},
  {keys:['who are you','your name'],text:'I am JARVIS, your personal assistant demo, created for Prosenjit.'},
  {keys:['owner','creator','prosenjit'],text:'This JARVIS demo was made for Prosenjit.'},
  {keys:['thank','thanks'],text:'You are welcome, Prosenjit. I am here whenever you want to try another demo command.'}
];
function addMessage(text,who){const row=document.createElement('div');row.className='message '+who;const avatar=document.createElement('div');avatar.className='avatar';avatar.textContent=who==='bot'?'J':'P';const bubble=document.createElement('div');bubble.className='bubble';const meta=document.createElement('small');meta.textContent=(who==='bot'?'JARVIS':'YOU')+' · NOW';const p=document.createElement('p');p.textContent=text;bubble.append(meta,p);row.append(avatar,bubble);messages.append(row);messages.scrollTop=messages.scrollHeight}
function getReply(message){const q=message.toLowerCase();const match=replies.find(item=>item.keys.some(k=>q.includes(k)));return match?match.text:"I'm still in demo mode, so I don't know that one yet. Try “What can you do?”, “Tell me a fun fact”, or “Give me motivation”."}
function send(text){const value=text.trim();if(!value)return;addMessage(value,'user');input.value='';setTimeout(()=>addMessage(getReply(value),'bot'),450)}
form.addEventListener('submit',e=>{e.preventDefault();send(input.value)});
document.querySelectorAll('.suggestion').forEach(button=>button.addEventListener('click',()=>send(button.textContent)));
document.getElementById('clearBtn').addEventListener('click',()=>{messages.innerHTML='';addMessage('Chat cleared. Systems are ready for a new conversation, Prosenjit.','bot')});
