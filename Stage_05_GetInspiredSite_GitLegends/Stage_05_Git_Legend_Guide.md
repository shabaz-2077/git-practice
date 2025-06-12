# 🧠 Stage 5: Git Absolute Legend

Welcome to the elite tier of Git mastery. This stage is all about **deep internals**, **debugging superpowers**, **open-source collaboration**, and **automation.**

---

## 🔍 Git Internals

- Git doesn’t store diffs — it stores **snapshots** of the full file tree.
- Every commit points to a **tree** (directory), which points to **blobs** (files).
- Commits also reference a **parent commit**, forming a linked history.

**Try this:**
```bash
git cat-file -p HEAD      # See commit metadata and tree
git rev-parse HEAD        # Get current commit hash
````

You’re peeking into the plumbing of Git’s content-addressable system.

---

## 🐞 Git Bisect – Pinpointing Bugs

Use binary search to find **which commit introduced a bug**.

### 🧪 How to use:

```bash
git bisect start
git bisect bad            # Mark current commit as buggy
git bisect good <hash>    # Mark known working commit
```

Git checks out commits one-by-one.

### At each step:

```bash
git bisect good           # If it works
git bisect bad            # If it’s still broken
```

Once found, Git says:

> ❗ "This commit introduced the bug"

Reset with:

```bash
git bisect reset
```

✅ Perfect for teams with large histories and bugs introduced between multiple changes.

---

## 👨‍🏫 Git Blame – Who Wrote This Line?

```bash
git blame filename.js
```

🔎 Shows line-by-line info like:

> Tony abc123 (2024-05-01): const result = calculate();

You’ll know:

* Who wrote it
* When
* In which commit

Great for **audits, investigations, and learning from past code.**

---

## 🌍 Contributing to Open Source

You’re now ready to work with the **global dev community**.

### 🔁 Fork, Clone, Branch

```bash
# Step 1: Fork on GitHub
git clone https://github.com/other/project.git
cd project

# Step 2: Create feature branch
git checkout -b fix/button-bug
```

### 🚀 Push & Pull Request

```bash
git push origin fix/button-bug
```

➡️ Then go to GitHub → Open Pull Request
➡️ Reference issues, follow `CONTRIBUTING.md`, maintain etiquette

💡 Tip: Always sync `main` or `develop` branch before creating feature branches.

---

## 🤖 Automate Git with Custom Scripts

Make Git work for you!
Write Bash or PowerShell scripts for repeatable actions:

### ✨ Example: Version Tagging Script

```bash
#!/bin/bash
VERSION=$1
git tag -a "v$VERSION" -m "Release v$VERSION"
git push origin "v$VERSION"
```

Run like:

```bash
./release.sh 2.0.0
```

💡 Extend to generate changelogs, trigger CI pipelines, or notify your team via Slack or email.

---

## 🏁 Summary Table: Git Legend Tools

| Tool/Concept | Purpose                            |
| ------------ | ---------------------------------- |
| `cat-file`   | See raw internal Git objects       |
| `rev-parse`  | Get commit and object hashes       |
| `git bisect` | Find which commit introduced a bug |
| `git blame`  | Find who wrote or edited a line    |
| Fork → PR    | Standard workflow for contributing |
| Scripts      | Automate Git workflows             |

---