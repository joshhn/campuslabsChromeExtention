const EVENTS_ENDPOINT = 'https://raw.githubusercontent.com/joshhn/campuslabsChromeExtention/daily-update/data-scraper/campuslabs_events_data.json';

export default function fetchEvents() {
  fetch(EVENTS_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      chrome.storage.local.clear({ events_data: data });
      chrome.storage.local.set({ events_data: data });
    })
    .catch((err) => {
      console.log(err);
    });
}
