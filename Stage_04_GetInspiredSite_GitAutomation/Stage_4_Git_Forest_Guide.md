# 🌲 Stage 4 – Git Forest (Pro-Level Git Automation)

📁 Project Folder: GetInspiredQuoteSite_GIT_Pro  
🎯 Goal: Learn advanced Git features like Aliases, Hooks, Husky, GitHub Actions, CI/CD, and Squash commits.

---

## ✅ 1. Set Up Git Aliases

🔹 **Purpose:** Shorten repetitive Git commands for efficiency.

🔹 **Commands:**

    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.cm commit
    git config --global alias.st status

🔹 **Usage Example:**

    git co main
    git cm -m "feat: added header"

---

## ✅ 2. Manual Git Hooks (Optional)

🔹 **Purpose:** Automatically run scripts (like tests) before a commit.

🔹 **Steps:**

1. Initialize Git repo:
    git init

2. Create a file:  
    .git/hooks/pre-commit

3. Add this inside:

    #!/bin/sh
    echo "Running pre-commit checks..."
    npm test || exit 1

4. Make it executable:
    chmod +x .git/hooks/pre-commit

Now every `git commit` will run `npm test`.

---

## ✅ 3. Setup Husky (Recommended for JS Projects)

🔹 **Purpose:** Modern way to manage Git hooks easily.

🔹 **Steps:**

    npm init -y                      # Creates package.json
    npm install husky --save-dev    # Install husky
    npx husky install               # Initialize

🔹 Add to package.json:

    "scripts": {
      "prepare": "husky install"
    }

🔹 Create a pre-commit hook:

    npx husky add .husky/pre-commit "npm test"

Now, every commit will automatically trigger tests before completing.

---

## ✅ 4. GitHub Actions for CI/CD

🔹 **Purpose:** Automate testing on push/pull-request using GitHub.

🔹 **Steps:**

1. Create folder and file:  
   .github/workflows/test.yml

2. Paste this config:

    name: Run Tests

    on: [push, pull_request]

    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - name: Install Node
            uses: actions/setup-node@v3
            with:
              node-version: 18
          - run: npm install
          - run: npm test

🔹 GitHub will now run this on every push or PR.

---

## ✅ 5. Squash Commits

🔹 **Purpose:** Combine multiple related commits into one.

🔹 **Steps:**

    git rebase -i HEAD~3

Example output:

    pick 1a2b3c initial commit
    pick 4d5e6f added console log
    pick 7g8h9i removed console log

Change to:

    pick 1a2b3c initial commit
    squash 4d5e6f added console log
    squash 7g8h9i removed console log

Then update the commit message.

---

## 🧠 Optional Tools

| Tool         | Why Use                                  |
|--------------|-------------------------------------------|
| Prettier     | Auto-format JS before committing          |
| ESLint       | Lint JS files for issues before commits   |
| Husky        | Prevent bad commits                       |
| GitHub Actions | Test, Build, or Deploy on push          |

---

## 🏁 Final Summary

✔ Git aliases configured  
✔ Manual Git hook tested  
✔ Husky setup complete  
✔ GitHub Actions integrated  
✔ Squash commits practiced  

---
