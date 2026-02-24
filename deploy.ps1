Write-Host "=== DEPLOY SCRIPT FOR GH-PAGES ==="

# 1) Ensure we are in the project root
Write-Host "Current directory: $PWD"

# 2) Switch to main
Write-Host "Switching to main..."
git checkout main

# 3) Install dependencies (optional but safe)
Write-Host "Installing dependencies..."
npm install

# 4) Build project
Write-Host "Building project..."
npm run build

# 5) Create gh-pages branch if it doesn't exist
$branchExists = git branch --list gh-pages

if (-not $branchExists) {
    Write-Host "gh-pages branch does not exist. Creating it..."
    git checkout -b gh-pages
} else {
    Write-Host "Switching to existing gh-pages branch..."
    git checkout gh-pages
}

# 6) Delete everything except .git
Write-Host "Cleaning gh-pages branch..."
Get-ChildItem -Force | Where-Object { $_.Name -notmatch '^\.git$' } | Remove-Item -Recurse -Force

# 7) Copy dist content
Write-Host "Copying build files..."
Copy-Item -Path "..\UnityDev_Portfolio\dist\*" -Destination "." -Recurse -Force

# 8) Commit and push
Write-Host "Committing changes..."
git add .
git commit -m "Automated deploy"
git push -u origin gh-pages

# 9) Return to main
Write-Host "Returning to main..."
git checkout main

Write-Host "=== DEPLOY COMPLETE ==="