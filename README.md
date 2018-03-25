# 🌹🌹🌹
# Portland Democratic Socialists of America

> A shiny new Portland DSA website, built using [Hugo](https://gohugo.io/)!

## The Portland DSA website team
- [Gina Giampaolo](https://github.com/whoisgina)
- [Joel Coreson](https://github.com/fumb1e)
- [Andy Pressman](https://github.com/andypressman)

### License
This project is licensed under the terms of the MIT license.

## Technology requirements

- [Hugo](https://gohugo.io/)
- [Node & npm](https://docs.npmjs.com/getting-started/installing-node)

## Setup
Clone the repo to wherever your heart desires. Your `/sites` folder is always a good bet.

```
$ git clone git@github.com:portland-dsa/website-hugo.git ~/Sites/website-hugo
```

Install Hugo

```
$ brew install hugo
```

Install JS dependencies

```
$ npm install
```

### Local development

We're using Webpack to compile our SCSS and JS. To watch the `/src` directories for changes and compile, run:

```
$ npm run dev
```

At the same time, run a server with Hugo to generate the site and watch templates and static files for changes:

```
$ hugo server
```

Hugo will provide an address at which you can view the site as you work. It will also use LiveReload if you have it installed. ⚡

Running `$ hugo` in the root of the project will generate the website to the `public/` directory.

### Production development
This repo is continuously integrated with Netlify and rebuilds and deploys the site whenever a commit is pushed to `master`. You can view the site [here](http://portland-dsa.netlify.com).

✊

### Questions?
_Read-me by [whoisgina](https://github.com/whoisgina).

