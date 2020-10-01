<h1 align="center">Repo Land </h1>
<p align="center">Welcome to Repo Land! View all of your favorite organization's repositories! </p>
<img src="./gif/repo-land.gif" alt="logo"/>

## Project Setup

### Download dependencies

```
cd [project directory]
npm install
```

### Start Server

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view project in the browser.

---

## Run Tests

```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

## Built With

- [React JS](https://github.com/facebook/create-react-app)
- [Twitter Bootstrap 4](https://getbootstrap.com/)

---

## Placeholder Data

To avoid exceeding Github API's rate limit, I provided some placeholder data for repositories and commits that can be accessed in [`src/temp/data.js`](src/temp/data.js) <br/>

Comments are provided where AJAX calls are made and can be switched with the placeholder data provided.

[`src/App.jsx`](src/App.jsx)

```
// ! COMMENT OUT LINES BELOW IF USING PLACEHOLDER DATA
const resp = await axios.get(`${REPO_BASE_URL}/${organization}/repos`);
setRepositories(resp);

// get owner's avatar to display in Header component
setOwnerAvatar(resp.data[0].owner.avatar_url);

// * USE PLACEHOLDER DATA BELOW
setRepositories(repoData.response);
setOwnerAvatar(repoData.response.data[0].owner.avatar_url);
```

[`src/components/commits/Commits.jsx`](src/components/commits/Commits.jsx)

```
// ! COMMENT OUT LINES BELOW IF USING PLACEHOLDER DATA
const resp = await axios.get(`${COMMIT_BASE_URL}/${organization}/${name}/commits?page=1&per_page=${perPage}`);
setCommits(resp);

// * USE PLACEHOLDER DATA BELOW
setCommits(commitData.response);
```

---

## Github API

Unauthenticated requests have a rate limit up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests. Read more about Github's API rate limits [here](https://developer.github.com/v3/#rate-limiting).

- [Github Developer v3](https://developer.github.com/v3/)

---

## Authors

- Kevin Reber - [Github](https://github.com/kevinreber) - [Website](https://www.kevinreber.dev/) - [LinkedIn](https://www.linkedin.com/in/kevin-reber/)
