🌹🌹🌹
# Portland Democratic Socialists of America
> A shiny new Portland DSA website, built using [Hugo](https://gohugo.io/)!

### Technology requirements

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

## Local development


To run `webpack` (which builds CSS and JS for the site) and `hugo`
simultaneously, navigate to the project directory in your terminal and type:

```
$ npm run dev
```

Hugo will provide an address at which you can view the site as you work
(localhost:1313 by default). It will also use LiveReload if you have it installed. ⚡

Running `$ hugo` in the root of the project will generate the website to the `public/` directory.

## Production development
This repo is continuously integrated with Netlify and rebuilds and deploys the
site whenever a commit is pushed to `master`. You can view the site
[here](http://portland-dsa.netlify.com).

### Questions?
Read-me by [whoisgina](https://github.com/whoisgina). Contact her with questions!

### The Portland DSA website team
- [Gina Giampaolo](https://github.com/whoisgina)
- [Joel Coreson](https://github.com/fumb1e)
- [Andy Pressman](https://github.com/andypressman)

✊
