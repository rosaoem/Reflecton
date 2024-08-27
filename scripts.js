function saveEntry(){
    const entryText = document.getElementById('entryText').value;
    if (entryText.trim() === ''){
        alert('You have to enter something');
        return;
    }

    //get past entries or initialize 
    let entries = JSON.parse(localStorage.getItem('journalEntry')) || [];

    //adding the new entry to array of entries
    entries.push({ text:entryText, date:new Date().toLocaleString()});

    //save updated entries array to localStorage
    localStorage.setItem('journalEntry', JSON.stringify(entries));

    //clear the text area
    document.getElementById('entryText').value = '';

    //redirect to past entries page
    window.location.href = 'pastEntries.html';
}

//load past entries
function loadEntries(){
    console.log("Loading The Past..."); //using to debug
    const container = document.getElementById('entriesContainer');
    if(!container){
        return;
    }
    const entries = JSON.parse(localStorage.getItem('journalEntry')) || [];

    container.innerHTML ='';

    //display each entry
    entries.forEach((entry,index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <p><strong>Date:</strong> ${entry.date}</p>
            <p>${entry.text}</p>
            <button class="deleteButton" onclick="deleteEntry(${index})">Delete</button>

        `;

        container.appendChild(entryDiv);

    });
}

//delete function
function deleteEntry(index){
    let entries = JSON.parse(localStorage.getItem('journalEntry')) || [];
    entries.splice(index,1);
    localStorage.setItem('journalEntry', JSON.stringify(entries));
    loadEntries(); //reloading to show updated entries
}

//execute loadEntries function when past_entries.thml loads
window.onload = loadEntries;
