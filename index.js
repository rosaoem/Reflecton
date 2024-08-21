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
    const entries = JSON.parse(localStorage.getItem('journalEntry')) || [];
    const container = document.getElementById('entriesContainer');

    //display each entry
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <p><strong>Date:</strong> ${entry.date}</p>
            <p>${entry.text}</p>
        `;

        container.appendChild(entryDiv);

    });
}

//execute loadEntries function when past_entries.thml loads
window.onload = loadEntries;
