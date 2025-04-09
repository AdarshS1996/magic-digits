# 🎩 Magic Digits – A Mind-Reading Number Guessing Game

**Magic Digits** is a classic number-guessing trick based on binary representation, brought to life with an interactive UI. Think of a number between 1 and 100, and the game will magically guess it—just by asking you which cards your number appears on!

---

## 🧠 How It Works

The trick relies on the fact that **every number from 1 to 100 can be represented using a 7-bit binary number**. Each card corresponds to one bit in that binary representation.

### 🔢 Binary Magic

- We use **7 cards**.
- Each card contains numbers from 1 to 100 **where a specific bit is set to 1**.
- The first number on each card is `2ⁿ`, where `n` is the bit position of that card (starting from 0 to 6).

### 🪄 The Trick

1. The user thinks of a number between 1 and 100.
2. The app shows 7 cards.
3. For each card, the user tells whether their number appears on it.
4. The app **sums the first number on each "Yes" card**.
5. The result of the sum is the guessed number!

---

## 📊 Example

Let's say the number is **45**. Its binary is `101101`.

It will appear in the following cards:

- Card 1 → Bit 0 → 1
- Card 3 → Bit 2 → 4
- Card 4 → Bit 3 → 8
- Card 6 → Bit 5 → 32

The sum of the first numbers of these cards:  
`1 + 4 + 8 + 32 = 45`

🎉 That’s the number you thought of!

---

## 🛠️ Implementation Steps

- Create 7 cards.
- Each card contains numbers from 1 to 100 where the respective bit is `1`.
- Display these cards one by one.
- Let the user answer **Yes/No** for each card.
- After 7 answers, **sum up the first numbers of the cards** marked as "Yes".
- Display the final guessed number!

---

## 💡 Technologies Used

- HTML / CSS / JavaScript
- Angular (for frontend)
- Bootstrap (for layout and modals)

---

## 🚀 Hosting URLs

- [Domain 1](https://magic-digits.firebaseapp.com/)
- [Domain 2](https://magic-digits.web.app/)
