# https://www.Design.C3.AI

React landing page for the C3.AI Design Team, featuring event announcements, core values, team introduction, and current job openings.

This site does not require any external user input or forms, and does not make any external requests to APIs or other service.

It is strictly a content based single page site, meant to display static information about the design team.

## Architecture

This is a react.js single page application, utilizing github as version control.
This github repo is then linked to a netlify account for CI/CD.
Any push to the `main` branch will trigger a build and automatically deploy to the current domain (by default netlify generated this url https://gleaming-raindrop-ce5940.netlify.app).
However, upon approval from C3.AI infosec team, we will be assigned the new subdomain of `design.c3.ai`. 
https://docs.netlify.com/domains-https/custom-domains/
Three.js, and starfall.js are inlined as scripts in index.html (to avoid referencing scripts on external CDNs or S3 buckets) to create our hero background animation.

Note: Any hrefs linking to external sites have been given the rel attribute of `noopener noreferrer`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
We are using Vitejs which is a native ES Module based dev server as opposed to a traditional bundle based dev server.
See [Configuration Reference](https://vitejs.dev/guide/).

## Support notes
We are shipping our templates with a very basic React configuration to let you quickly get into the development process.