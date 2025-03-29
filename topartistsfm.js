/* Script that fetches the last.fm API and generates a list of your top artists with your scrobbles */
/*-------------------*/
const api_key = "";
const user = "";
const top_number = 10;
/* ---------------- */


const api = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${user}&api_key=${api_key}`
fetch(api)
        .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            const artists = xmlDoc.getElementsByTagName("artist");
            let html = "<ul id='top-artists-chart'>";

            for (let i = 0; i < top_number; i++) {
                const name = artists[i].getElementsByTagName("name")[0].textContent;
                const playcount = artists[i].getElementsByTagName("playcount")[0].textContent;
                const url = artists[i].getElementsByTagName("url")[0].textContent;

                // print
                html += `<li><span id="number">${i+1} </span> <a href="${url}" id="artist-name">${name}</a><br>Plays: <span id="plays">${playcount}</span><br></li>`;
                }

                html += "</ul>";
                document.getElementById("top-artists").innerHTML = html;
            })
            .catch(error => {
                console.error("Error loading", error);
                document.getElementById("top-artists").innerText = "API couldn't load";
            });