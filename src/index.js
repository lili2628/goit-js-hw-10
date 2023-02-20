import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from "./fetchCountries";
import flagNameCardTpl from "./templates/flag-name-card";
import infoCardTpl from './templates/info-card';


const DEBOUNCE_DELAY = 300;
const searchEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');


searchEl.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));


function onSearchInput(e) {
    const searchQuery = e.target.value.trim();

    if (searchQuery === "") {
        clearAllInformationAboutCountries();
        return;
    }
    

    fetchCountries(searchQuery)
        .then(countries => {
            if (countries.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                clearAllInformationAboutCountries();
            } else if (countries.length === 1) {
                countryListEl.innerHTML = '';
                appendInfoMarkup(countries);
            } else if (countries.length < 11 && countries.length > 1) {
                appendCountriesMarkup(countries);
                countryInfoEl.innerHTML = '';
            }
        })
        .catch(error => {
            Notiflix.Notify.failure("Oops, there is no country with that name");
            clearAllInformationAboutCountries();
        });

function appendCountriesMarkup(countries) {
    const makeListOfCountriesWithFlags = countries.map(flagNameCardTpl).join('');
    
    countryListEl.innerHTML = '';
    countryListEl.insertAdjacentHTML('beforeend', makeListOfCountriesWithFlags);
}

function appendInfoMarkup(countries) {
    const makeCountryInfo = countries.map(infoCardTpl).join('');
    
    countryInfoEl.innerHTML = '';
    countryInfoEl.insertAdjacentHTML('beforeend', makeCountryInfo);
}

function clearAllInformationAboutCountries() {
    countryInfoEl.innerHTML = '';
    countryListEl.innerHTML = '';
}
