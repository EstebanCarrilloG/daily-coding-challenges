# Daily Coding Challenge

A collection of **freeCodeCamp daily coding challenges**, organized by month and solved in **JavaScript**.  
The goal is to practice algorithms, problem-solving, and clean coding on a consistent basis.

---

## 📂 Project Structure

```
/src
 ├── challenges/
 │    ├── 2025/
 │    │    ├── august/
 │    │    │    ├── 11.js
 │    │    │    ├── 13.js
 │    │    │    ├── 14.js
 │    │    │    ├── ...
 │    │    │    ├── challengesTests.js     # Runs tests for all August challenges
 │    │    │    └── index.js               # Exports all August challenges
 │    │    ├── september/
 │    │    │    ├── 9.js
 │    │    │    ├── 18.js
 │    │    │    ├── 19.js
 │    │    │    ├── 24.js
 │    │    │    ├── ...
 │    │    │    ├── challengesTests.js     # Runs tests for all september challenges
 │    │    │    └── index.js               # Exports all September challenges
 │    │    └── index.js         # Exports all monthly challenges from year 2025
 |    ├── 2026/
 |    │    └── ...
 |    └──  index.js             # Exports all yearly challenges
 ├── index.js              # Runs challenges tests depending of the user election
 ├── playground.test.js    # For quick tests/debugging
 └── playground.js         # For quick tests/debugging

```

- Each file inside `challenges/<year>/<month>/` corresponds to one daily challenge.
- Each month has its own `index.js` that exports that month’s challenges.
- Each year has its own `index.js` that exports that year’s challenges.
- The main `src/index.js` file runs the selected challenges tests depending on the user election.

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/EstebanCarrilloG/daily-coding-challenge.git
   cd daily-coding-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 📜 **Available Scripts**

In the project directory, you can run:

#### `npm run start`

Runs the app using nodemon on `src/index.js`.

#### `npm run playground`

Runs the playground script using nodemon on `src/playground.js`.

#### `npm run ui`

Runs a local web UI at `http://127.0.0.1:4000` with a calendar view to browse challenges and open each day solution.

#### `npm run ui:dev`

Runs the same UI server using nodemon for development.

---

## 🧑‍💻 Usage

`src/index.js` runs all the challenges tests or only the selected depending of the user election.

Once you run `npm run start` you will be prompted.

```bash
 • Hello! Welcome to the Coding Challenges!

Here you can see the challenges tests for the given month and year.
Start by entering the month and year of your choice.
Note: The challenges starts from August 2025.

• Enter the month:
• Enter the year:
```

You should provide a valid month `[january, february, ... ] || all` and year `>= 2025`.

### Example Output

For August 2025.

```bash
 • Callenges: August 2025
 ▸ 11-08-2025 - Vowel Balance
 { testCase: '123A#b!E&*456-o.U', output: true }
 ▸ 13-08-2025 - Fibonacci sequence
 {
  testCase: { startSequence: [ 21, 32 ], length: 10 },
  output: [
     21,   32,  53,  85,
    138,  223, 361, 584,
    945, 1529
  ]
}
```

### Calendar UI

To visualize solutions in a cleaner way using a calendar:

1. Run `npm run ui`
2. Open `http://127.0.0.1:4000` in your browser
3. Select year and month
4. Click a day with a challenge to see the solution source code

---

## 🧑‍🤝‍🧑 Contributing

Contributions are welcome!  
You can:

- Add new daily challenges
- Improve existing solutions
- Add explanations or comments for clarity
- Suggest optimizations

To contribute:

1. Fork the repo
2. Create a new branch
3. Add or modify challenges following the same folder structure
4. Submit a pull request 🚀

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

✨ Happy coding! ✨
