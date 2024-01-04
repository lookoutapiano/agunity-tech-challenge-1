# AgUnity Tech Challenge 1

Register for an API key at https://openweathermap.org/and wait for your key to
become active.
Create an interface in pure HTML, CSS and TS (no frameworks except Redux,
Chrome compatible browser with latest ECMAScript features) that takes a
location as input and a button to query the above api and displays relevant
information in a clean design. Include a README to explain how to test your code.
This should take no more than 1-2 hours.
Send us a link to a your github repo with the code.

## How to Run Locally

Clone the project

```bash
  git clone https://github.com/lookoutapiano/agunity-tech-challenge-1.git
```

Install dependencies

```bash
  npm i -g typescript
  npm i http-server
```

Compile TS file

```bash
  tsc -w
```

Start the server

```bash
  http-server
```

## How to Test Code
- Enter a valid location (e.g., city name or coordinates) in the input field.
- Click the button to trigger the API request.
- Check if the weather information is displayed correctly.
