<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Demo Site Built with Gatsby's Default Starter
</h1>

Demo hosted by Netlify here: https://coffeefirst.netlify.com/

## Step 1. Clone the repo

```sh
git clone https://github.com/tpage99/coffee-first.git
```

## Step 2. npm install

```sh
npm install
```

## Step 3. to run locally

```sh
gatsby develop
```

## Step 4. Be awesome

😎

## Resources

📕[Gatsby E-Commerce Tutorial](https://www.gatsbyjs.org/docs/ecommerce-tutorial/#installing-the-stripejs-plugin) 
 - Unfortunately, I didn't find this tutorial until after I was encountering some problems with Gatsby building nodes with the [gatsby-source-stripe](https://www.gatsbyjs.org/packages/gatsby-source-stripe/) plugin
 - Found that even though there are still server-side issues in the logs with the nodes not being built, it was indeed working as they were available in GraphiQL 
   - ⏰ need to set a reminder to do a pull-request or something

💰[Stripe API Reference](https://stripe.com/docs/api)

👨‍💻[Gatsby's Debugging HTML Builds Info](https://www.gatsbyjs.org/docs/debugging-html-builds/)
 - This was super helpful for determining why build was working locally, but failing when trying to deploy to Netlify
 - Research if getting the "window not defined" error
   - TLDR; utilize `componentDidMount` 
   - [Don't Modify State Directly](https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly) according to React docs. Define state (Stripe in this instance) and set to empty array, then `setState` within `componentDidMount`