:root {
  --gray-00: #ffffff;
  --gray-05: #f5f6f7;
  --gray-15: #d0d0d5;
  --gray-75: #3b3b4f;
  --gray-85: #1b1b32;
  --gray-90: #0a0a23;
  --blue-50: #198eee;
  --error: #a94442;
  --danger-color: #850000;
  --danger-background: #ffadad;
}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--gray-85);
  color: var(--gray-05);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 30px auto;
}

h2 {
  margin-bottom: 15px;
}

form {
  width: 100%;
  text-align: center;
  padding: 15px;
}

fieldset {
  border: 0 none;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

fieldset div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bracket,
.comma {
  font-size: 2.3em;
}

form .comma {
  margin-left: 2px;
}

select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  height: 38px;
  width: 50px;
  text-align: center;
}

button {
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
  padding: 10px 16px;
  font-size: 23px;
  width: 100%;
}

select:focus-visible,
button:focus-visible {
  outline: 3px solid var(--blue-50);
}

.output-container {
  width: 95%;
  min-height: 55px;
  margin-top: 25px;
  border-radius: 0;
  padding: 15px;
  overflow-wrap: break-word;
  text-align: center;
}

.output-array {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.output-value {
  font-size: 2em;
}

.alert {
  background-color: var(--danger-background);
  border: 3px solid var(--danger-color);
  color: var(--danger-color);
}

@media (min-width: 550px) {
  form,
  .output-container {
    max-width: 480px;
  }

  fieldset {
    max-width: 400px;
  }

  .output-array {
    max-width: 420px;
  }
}
