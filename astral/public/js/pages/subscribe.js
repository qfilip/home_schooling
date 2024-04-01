let sq = document.getElementById('sq');
let ul = document.getElementById('item-list');
let allListItems;
(() => {
    allListItems = [];
    for(let li of ul.children) {
        allListItems.push({
            dataId: li.getAttribute('data-id'),
            text: li.textContent
        })
    }

    sq.addEventListener("keyup", () => {
        let query = sq.value.toLocaleLowerCase();
        const itemsToShow = allListItems
            .filter(x => x.text.toLowerCase().includes(query))
            .map(x => {
                const li = document.createElement('li');
                li.setAttribute('data-id', x.dataId);
                li.textContent = x.text;

                return li;
            });

        ul.innerHTML = '';
        itemsToShow.forEach(x => ul.appendChild(x));
        // const e = document.createElement('li');
        // e.setAttribute('data-id', ul.children.length.toString());
        // e.innerText = `subscriber ${ul.children.length}`;
        // ul.appendChild(e);
    });
})()