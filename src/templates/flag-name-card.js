export default function flagNameCardTpl (country){    
    const { name: { official }, flags: { svg }} = country;
    
    return `
        <li class=country-list-item>
            <img class=flag-img src=${svg} alt="flag of ${official}" width=35>
            <p class=card-name> ${official}
        </li>
    `;
}