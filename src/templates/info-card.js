export default function infoCardTpl({ capital, population, languages }) {
    //const lang = [];

    //for (const language of languages) {
    //    lang.push(language["name"]);
    //}

    //const langString = lang.toString();

    const lang = Object.values(languages)
        .join(", ");
    
    

    return `
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