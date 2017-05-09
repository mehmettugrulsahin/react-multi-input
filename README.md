# Multi Input Component

## Approach
Development approach is to build big and complex components by first breaking them down into smaller and less complex components to promote modularity, reusability, scalability, maintainability via Component Driven Design (CDD) and Atomic Design Patterns. Following this approach, smaller pieces of the whole are built first as atoms and molecules implemented as React components to together form organisms and templates.

## Web technologies & patterns
- Create React App

  This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
  `react` and `react-dom` are used to render the layout

- Storybook

  [Storybook](https://github.com/storybooks/storybook) is used as a development environment for all the React UI components. It allows you to browse this component library, view the different states of each component, and interactively develop and test components.

- Atomic Design

  MultiInput component is built using [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) patterns to promote re-usability with a clearly defined component structure.

  Components are built from small to big in terms of complexity. Atoms are built to form molecules,
  molecules to form a single `MultiInput` organism and the organism is populated with static data in
  `MultiInputCard` template.

  Atoms are categorized as `Image`, `Text` and `Title` components.
  Molecules are categorized as `Info` and `List` components.

  `MultiInput` is the only organism.

  `MultiInputCard` is the only template.

- Babel

  [Babel](https://github.com/babel/babel) is used for transpiling ES6 to ES5 for the browser.

- Webpack

  [Webpack](https://github.com/webpack/webpack) is used to create bundles for development, production and storybook

- Sass

  [Sass](http://sass-lang.com/) CSS3 extention is used for adding nested rules, variables, mixins, selector inheritance.

- BEM

  [BEM](http://getbem.com/) Block Element Modifier methodology is used to to create reusable components by enabling independent blocks and CSS selectors to promote modularity and flexibility.

- HTTP client and request mocking
  [axios](https://github.com/mzabriskie/axios) is used to make HTTP requests
  [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) is used to mock HTTP requests

## Development Notes
- create-react-app is used to initially create the package.

- Application entry point is `/src/index.js` as indicated in `/config/webpack.config.dev.js` and `/config/webpack.config.prod.js` files

- Application is already ejected from react-scripts using `npm run eject` to extend webpack configuration with
`scss` loader.

- `/.storybook/config.js` contains Storybook configuration
`/.storybook/webpack.config.js` extends webpack configuration for Storybook with `scss` loader.

- `sass-loader` and `node-sass` packages are used by webpack for compiling `.scss` files.

## Available Scripts

- `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm test`
Launches the test runner in the interactive watch mode.

- `npm storybook`
Runs Storybook and shows all available components and their stories
Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

- `npm build-storybook` Run build for Storybook

## Directory structure
```
   |-components
   |---Atoms
   |-----Image
   |-----Text
   |-----Title
   |---Molecules
   |-----Info
   |-----List
   |---Organisms
   |-----Card
   |---Templates
   |-----Input
   |-data
   |-fonts
   |-stories
   |-theming
```

- `components` folder contains all the components structured in atomic design patterns
as atoms, molecules, organisms and templates taking into account the complexity of each component.

- `data` folder contains the static data used to populate the components with sample data.

- `font` folder contains the IcoMoon fonts file

- `stories` folder contains the stories of all components in `index.js` file

## Components

### Atoms

#### Atoms > Image
- `Icon` is a stateless function component that accepts `name` `width` and `height` props and renders
  various icons depending on `name`.
  ```
  <Icon name={'cross'} width={"10"} height={"10"} />
  <Icon name={'printer'} width={"22"} height={"22"} />
  <Icon name={'chevron-thin-left'} width={"22"} height={"22"} />
  <Icon name={'chevron-thin-right'} width={"22"} height={"22"} />
  ```

#### Atoms > Text
- `Info` is a staless function component that accepts `size` and `body` props and renders a `div` element with the text.
  ```
  <Info
    size={'small'}
    body={"Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen"}
  />
  ```

- `Input` is a class component that accepts `borderless`, `onKeyDown` and `onChange` props and renders an `input` element.
  ```
  <Input
    onChange={this.onChange}
    onKeyDown={this.onKeyPress}
    borderless
    val={newItemText}
  />
  ```

- `Label` is a staless function component that accepts `size`, `text` and `striking` props and renders a `strong`
  element either a striking or regular text depending on `striking`.
  ```
  <Label size={'small'} text={"E-mailadressen"} />
  <Label size={'medium'} text={"E-mailadressen"} striking />
  ```

#### Atoms > Title
- `Heading`  is a staless function component that accepts `size` and `text` props and renders a span
  with the text in an appropriate size depending on `size`.
  ```
  <Heading size={'h1'} text={"Uitbetalingen"} />
  <Heading size={'h2'} text={"Uitbetalingen"} />
  <Heading size={'h3'} text={"Uitbetalingen"} />
  <Heading size={'h4'} text={"Uitbetalingen"} />
  ```

### Molecules

#### Molecules > Info
- `Tag` is a class component that accepts `id`, `text` and `onMouseDown` props and renders
  `Info` and `Icon` components.
  ```
  <Tag id={mails.items[0].id} text={mails.items[0].text} />
  ```

#### Molecules > List
- `TagList` is a class component that accepts `items` array and renders a `Tag` component for each item
  along with an `Input` component next to the items.
  ```
  <TagList items={mails.items} />
  ```

### Organisms
#### Organisms > Card
- `MultiInput` is a stateless function component that accepts `intro`, `mails` and `telephones` props and renders
  `Heading`, `Info`, `Label`, `TagList` and `Input` components.
  ```
  <MultiInput
    intro={intro}
    mails={mails}
    telephones={telephones}
  />
  ```

### Templates
#### Templates > Input
- `MultiInputCard` is a class component that accepts `intro`, `mails` and `telephones` props and renders
  a `MultiInput` component.
  ```
  <MultiInputCard
    intro={intro}
    mails={mails}
    telephones={telephones}
  />
  ```
