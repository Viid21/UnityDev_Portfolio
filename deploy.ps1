# 0) ./deploy.ps1
Write-Host "=== CLEAN DEPLOY TO GH-PAGES ==="

# 1) Go to project root
Write-Host "Current directory: $PWD"

# 2) Switch to main
Write-Host "Switching to main..."
git checkout main

# 3) Delete remote gh-pages
Write-Host "Deleting remote gh-pages (if exists)..."
git push origin --delete gh-pages 2>$null

# 4) Delete local gh-pages
Write-Host "Deleting local gh-pages (if exists)..."
git branch -D gh-pages 2>$null

# 5) Install dependencies
Write-Host "Installing dependencies..."
npm install

# 6) Build project
Write-Host "Building project..."
npm run build

# 7) Create new gh-pages branch
Write-Host "Creating new gh-pages branch..."
git checkout -b gh-pages

# 8) Copy dist content into branch root
Write-Host "Copying build files..."
Copy-Item -Path ".\dist\*" -Destination "." -Recurse -Force

# 9) Commit and push
Write-Host "Committing and pushing..."
git add .
git commit -m "clean deploy"
git push -u origin gh-pages

# 10) Return to main
Write-Host "Returning to main..."
git checkout main

Write-Host "=== DEPLOY COMPLETE ==="