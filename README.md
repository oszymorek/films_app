<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">Films Application</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/oszymorek/films_app.git?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/oszymorek/films_app.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/oszymorek/films_app.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/oszymorek/films_app.git?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Project #6 - Films Application

This is my next project created using React.js. The page acts as a page representing a Application which allow to add/remove/edit favourite films and we can add assesment of films.

<strong>Creation Process</strong> </br>
<strong>Initialising the project:</strong> I used create-react-app to create the basic structure of the project.</br>
<strong>Component creation:</strong> Each section of the page was implemented as a separate React component. In this project I created reuseable component `StarRating.js`</br>
<strong>Data:</strong> Data is passed in via props (prop drilling).</br>
<strong>Styling:</strong> Application of CSS styles to give the page an aesthetically pleasing look.</br>
<strong>Hooks:</strong> Used the `useState` | `useEffect` hooks.</br>
<strong>Functions:</strong> `Search Film` | `Add Film to List` | `Edit Film` | `Remove Film` | `Select Film` | `Collapse Films`  </br>
<strong>Deployment:</strong> The project was deployed on Netlify so that it could be available to the public.</br>

https://project06-oszymorek.netlify.app/

```sh
└── films_app/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── index.html
    └── src
        ├── App.js
        ├── components
        │   ├── Box.js
        │   ├── ErrorMessage.js
        │   ├── Loader.js
        │   ├── Logo.js
        │   ├── Main.js
        │   ├── Movie.js
        │   ├── MovieDetails.js
        │   ├── MovieList.js
        │   ├── Navbar.js
        │   ├── NumResult.js
        │   ├── Search.js
        │   ├── StarRating.js
        │   ├── WatchedList.js
        │   ├── WatchedMovie.js
        │   ├── WatchedSummary.js
        │   ├── useKey.js
        │   ├── useLocalStorage.js
        │   └── useMovies.js
        ├── index.css
        └── index.js
```
