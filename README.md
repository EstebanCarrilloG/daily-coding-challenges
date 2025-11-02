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
 │    │    │    └── index.js    # Exports all August challenges
 │    │    ├── september/
 │    │    │    ├── 9.js
 │    │    │    ├── 18.js
 │    │    │    ├── 19.js
 │    │    │    ├── 24.js
 │    │    │    ├── ...
 │    │    │    └── index.js    # Exports all September challenges
 │    │    └── index.js         # Exports all monthly challenges from year 2025
 |    ├── 2026/
 |    │    └── ...
 |    └──  index.js             # Exports all yearly challenges
 ├── index.js              # Runs challenges
 ├── playground.test.js    # For quick tests/debugging
 └── playground.js         # For quick tests/debugging

```

- Each file inside `challenges/<year>/<month>/` corresponds to one daily challenge.
- Each month has its own `index.js` that exports that month’s challenges.
- Each year has its own `index.js` that exports that year’s challenges.
- The main `src/index.js` imports them and logs results with challenge names + dates.

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

---

## 🧑‍💻 Usage

By default, `src/index.js` executes the selected challenges.  
For example:

```js
console.log(styleText("Callenges: August 2025", "heading"));

// 11-08-2025 - Vowel balance.
console.log(styleText("11-08-2025 - Vowel Balance"), {
  testCase: input.vowelBalance,
  output: challenge.isBalanced(input.vowelBalance),
});
// 13-08-2025 - Fibonacci sequence.
console.log(styleText("13-08-2025 - Fibonacci sequence"), {
  testCase: input.fibonacciSequence,
  output: challenge.fibonacciSequence(
    input.fibonacciSequence.startSequence,
    input.fibonacciSequence.length
  ),
});
```

### Example Output

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
