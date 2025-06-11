---

# 🌳 Stage 3 – Git Tree Mastery (My Learning Notes)

📂 Folder: `GetInspiredQuoteSite_GitPro`  
🧠 Purpose: Deep dive into pro-level Git commands like rebase, stash, squash, tagging, semantic commits, etc.

---

## ✅ 1. Git Rebase – Keeping My Feature Branches Updated

**Why I used it:**  
To make sure `feature/header` was based on the latest `main` without unnecessary merge commits.

**Command used:**
```bash
git checkout feature/header
git rebase main
````

**What it did:**
Re-applied my header work *on top of* the latest version of `main`.

---

## ✅ 2. Git Stash – Temporarily Hiding My Changes

**Why I used it:**
I had uncommitted work on `feature/header` and needed to quickly switch to `main`.

**Commands used:**

```bash
git stash
git checkout main
# after work on main
git stash pop
```

**What it did:**
Saved my current work, let me switch branches, and later re-applied it cleanly.

---

## ✅ 3. Git Tags – Marking My First Version

**Why I used it:**
To mark a stable, merged state of the app as `v1.0.0`.

**Commands used:**

```bash
git tag v1.0.0
git push origin v1.0.0
```

**What it did:**
Labeled the current commit in `main` as a version checkpoint. Useful for future releases or rollbacks.

---

## ✅ 4. Semantic Commits – Writing Clean, Meaningful Messages

**Why I used it:**
To make commit logs more understandable for myself and future readers (and changelogs later).

**Format I followed:**

```bash
<type>: <short summary>
```

**Types I used:**

| Type        | When I use it                     |
| ----------- | --------------------------------- |
| `feat:`     | For new features like UI sections |
| `fix:`      | For bug fixes                     |
| `docs:`     | For documentation/comment changes |
| `style:`    | For spacing, CSS tweaks           |
| `refactor:` | For reorganizing logic            |
| `test:`     | For adding tests                  |
| `chore:`    | For setup/config updates          |

**Example I committed:**

```bash
git commit -m "docs: add attribution comment in footer"
```

---

## ✅ 5. Amend Commit – Fixing My Last Commit

**Why I used it:**
I forgot to include a file and didn’t want to create a new commit just for that.

**Command used:**

```bash
git add footer.html
git commit --amend
```

**What it did:**
Merged the new change into the previous commit and let me edit the commit message.

---

## ✅ 6. Interactive Rebase – Squashing Multiple Commits

**Why I used it:**
To clean up a bunch of small `console.log` commits into a single, meaningful one.

**Command used:**

```bash
git rebase -i HEAD~3
```

**Steps I followed:**

1. Changed all but the first `pick` to `squash`
2. Wrote a new commit message like:

   ```
   debug: clean up console logging
   ```

**Result:**
Instead of 3 commits like:

* add console.log 1
* add console.log 2
* remove console.log

…I got 1 clean commit summarizing all the work.

---

## 🔁 Other Commands I Practiced

| Command                                | Purpose                            |
| -------------------------------------- | ---------------------------------- |
| `git init`                             | Start a new Git project            |
| `git status`                           | See what’s staged/unstaged         |
| `git log --oneline`                    | Quick view of commit history       |
| `git merge feature/header`             | Merged feature into main cleanly   |
| `git push origin branch`               | Pushed local changes to GitHub     |
| `git tag -a v1.0.0 -m "msg"`           | Annotated tag with message         |
| `git commit --amend`                   | Fix/extend the last commit         |
| `git rebase -i HEAD~n`                 | Clean commit history interactively |
| `git config --global core.editor nano` | Made editor easier to use          |

---

## 🧠 Final State

* `main` branch = ✅ production-ready version
* `feature/header` = ✅ rebased & merged into main
* Version `v1.0.0` tagged
* All commits cleaned, squashed, and semantically written

---

## 🚀 Next Steps (Optional for Stage 4)

* Learn GitHub Pull Requests + Code Review
* Branch protection & release workflows
* Submodules & mono-repo basics
* Undo mistakes with `reflog`
* Git hooks (automation on commit)

---


