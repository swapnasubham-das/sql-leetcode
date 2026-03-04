# SQLVault — 50 LeetCode SQL Solutions

A sleek, interactive web application showcasing **50 curated SQL problems** from LeetCode with solutions in multiple SQL dialects.

![SQLVault Preview](https://img.shields.io/badge/Problems-50-orange?style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-✓-blue?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-✓-blue?style=flat-square)
![SQL Server](https://img.shields.io/badge/SQL%20Server-✓-blue?style=flat-square)
![Oracle](https://img.shields.io/badge/Oracle-✓-blue?style=flat-square)

## ✨ Features

- **50 SQL Problems** — Carefully selected LeetCode SQL challenges covering Easy, Medium, and Hard difficulties
- **Multi-Dialect Solutions** — View solutions in MySQL, PostgreSQL, SQL Server, and Oracle
- **Dark/Light Theme** — LeetCode-inspired color scheme with smooth theme toggle
- **Search & Filter** — Quickly find problems by title, ID, or tags
- **Difficulty Filtering** — Filter by Easy 🟢, Medium 🟠, or Hard 🔴
- **Syntax Highlighting** — Beautiful code presentation with proper SQL syntax colors
- **Responsive Design** — Works seamlessly on desktop and mobile devices
- **Copy to Clipboard** — One-click copy for any solution
- **Modular Architecture** — Clean separation of HTML, CSS, and JavaScript
- **Zero Dependencies** — Pure HTML, CSS, and JavaScript (no frameworks needed)

## 🚀 Quick Start

**Option 1: Local Server (Recommended)**

ES6 modules require serving from a web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

**Option 2: Clone & Serve**

```bash
# Clone the repository
git clone https://github.com/swapnasubham-das/sql-leetcode.git
cd sql-leetcode

# Serve with Python
python -m http.server 8000
```

## 📚 Problem Categories

| Category | Topics Covered |
|----------|---------------|
| **Joins** | LEFT JOIN, INNER JOIN, SELF JOIN, CROSS JOIN |
| **Aggregations** | GROUP BY, HAVING, COUNT, SUM, AVG |
| **Subqueries** | Nested queries, EXISTS, IN |
| **Window Functions** | RANK, DENSE_RANK, ROW_NUMBER, LAG, LEAD |
| **String Functions** | CONCAT, SUBSTRING, LIKE patterns |
| **Date Functions** | DATEDIFF, DATE_FORMAT, EXTRACT |
| **Set Operations** | UNION, EXCEPT, INTERSECT |

## 🎨 Theme

The application features a **LeetCode-inspired** color palette:

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| Accent | `#ffa116` 🟠 | `#f59e0b` |
| Easy | `#00b8a3` 🟢 | `#00af9b` |
| Medium | `#ffa116` 🟠 | `#f59e0b` |
| Hard | `#ff375f` 🔴 | `#ef4743` |

## 🗂️ Project Structure

```
sql-leetcode/
├── css/
│   └── styles.css      # All styling (CSS custom properties, themes)
├── js/
│   ├── app.js          # Application logic (ES6 module)
│   └── questions.js    # 50 SQL problems with solutions
├── index.html          # Main HTML structure
├── README.md           # Documentation
└── .gitignore          # Git exclusions
```

## 💡 Usage Tips

1. **Search** — Type problem number (e.g., `#175`) or keywords
2. **Filter** — Click difficulty buttons to filter problems
3. **Switch Dialects** — Use dialect tabs to see vendor-specific solutions
4. **Copy Code** — Click the copy button in the code header
5. **Toggle Theme** — Use the theme button in the navigation bar

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox
- **Vanilla JavaScript** — No frameworks or libraries
- **Google Fonts** — JetBrains Mono & Inter

## 📖 Learning Resources

- [LeetCode SQL Problems](https://leetcode.com/problemset/database/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Server Documentation](https://docs.microsoft.com/en-us/sql/)

## 👤 Author

**Swapnasubham Das**

## 📄 License

© 2025 Swapnasubham Das. All rights reserved.

---

⭐ Star this repo if you find it helpful!
