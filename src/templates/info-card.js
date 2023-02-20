export default function infoCardTpl(country) {
    //const lang = [];

    //for (const language of languages) {
    //    lang.push(language["name"]);
    //}

    //const langString = lang.toString();
    const { name: { official }, flags: { svg }, capital, population, languages } = country;

    const lang = Object.values(languages)
        .join(", ");
    
    

    return `
    <div class=country-info-head>
        <img class=country-info-flag src=${svg} alt="flag of ${official}" width=50 height=35 >
        <p class=country-info-name> ${official}
    </div>
    <ul class=card-info>
        <li>
            Capital: ${capital}
        </li>
        <li>
            Population: ${population}
        </li>
        <li>
            Languages:  ${lang}
        </li>
    <ul>
    `;
}