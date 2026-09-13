# EarnFun X Ads Landing Page

Conversion-focused landing page for the EarnFun Android app.

## Project structure

- `index.html` — landing page
- `style.css` — responsive design
- `script.js` — lightweight download interaction
- `assets/` — supplied EarnFun screenshots and icon

## APK release

The landing page expects the APK to be published as a GitHub Release asset named:

`EarnFun.apk`

Download URL used by the page:

`https://github.com/josh24689/earnfun-x/releases/latest/download/EarnFun.apk`

APK SHA-256 for the supplied build:

`dc1c251a3c56a4b3f32b19e157069d1a1a251dff8e4ad04b37a7065b4cca9f52`

Approximate APK size: `70.8 MB`

## Deploy with Cloudflare Pages

Repository name suggested: `earnfun-x`

1. Create the GitHub repository.
2. Push this project to the `main` branch.
3. Create a GitHub Release and upload the APK as `EarnFun.apk`.
4. In Cloudflare Pages, connect the GitHub repository.
5. Use `main` as the production branch.
6. No framework/build step is required; the project is plain static HTML.
7. Deploy.

## Important

Do not commit the APK into the normal Git repository. Keep the APK as a GitHub Release asset so the repository remains small and the landing page can use the stable `releases/latest/download/EarnFun.apk` URL.
