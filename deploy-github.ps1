# Run this from inside the earnfun-x project directory.
# Replace the remote URL if your GitHub username/repository differs.

git init
git branch -M main
git add .
git commit -m "Initial EarnFun X Ads landing page"
git remote add origin https://github.com/josh24689/earnfun-x.git
git push -u origin main

Write-Host ""
Write-Host "Next: create a GitHub Release named EarnFun v1.0.0 and upload the APK as EarnFun.apk."
