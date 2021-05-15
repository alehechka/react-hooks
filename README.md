# Welcome to @alehechka/react-hooks

[![Version](https://img.shields.io/npm/v/@alehechka/react-hooks.svg)](https://www.npmjs.com/package/@alehechka/react-hooks)

A collection of useful hooks that I made for personal use, but feel free to include the package in your own projects or contribute! This is a [Node.js](https://nodejs.org/en/) package available through the [npm registry](https://nodejs.org/en/).
You can install `@alehechka/react-hooks` with the [`yarn add` command](https://yarnpkg.com/cli/add).

# Install

```sh
yarn add @alehechka/react-hooks
```

# Usage

### useToggle

```js
const [value, toggle, turnOn, turnOff] = useToggle(); // defaults to false
```

You can also give it another default initial state:

```js
const [value, toggle, turnOn, turnOff] = useToggle(true); // defaults to true
```

Examples:

```ts
toggle(); // flips the value between true/false

toggle(true); // sets the value to true

toggle(false); // sets the value to false
/*
    NOTE:   Toggle optionally allows for any value to be provided.

            However, the value will only be explicitly changed when the
            value provided is a boolean.

            This allows for the toggle function to be a great use case for checkboxes
            and other onChange or onClick events that provide an event object to the
            callback.

            In these cases, as long as the value is not a boolean it will still toggle
            back and forth.
*/

turnOn(); // sets the value to true

turnOff(); // sets the value to false
```

In the real world I commonly use these functions as follows:

```ts
const [submitting, , startSubmitting, stopSubmitting] = useToggle();

const [loading, , startLoading, stopLoading] = useToggle();

const [checked, toggleCheckBox] = useToggle();
```

This implementation of useToggle is an extension from Josh Comeau's [implementation](https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/) that includes some useful on/off functions.

### useOnMount

```js
useOnMount(() => {
	handleMount();
	return handleUnmount();
});
```

This hook is a wrapper to `useEffect` that only acts as `componentDidMount` and `componentWillUnmount` from class-based React. The hook is effectively the same as using `useEffect` with an empty dependency array with the caveat that TypeScript won't yell at you to add dependencies or add the `eslint-disable` comment to your hook.

# Author

👤 **Adam Lehechka**

- Website: [alehechka.github.io](https://alehechka.github.io/)
- Github: [@alehechka](https://github.com/alehechka)

# 🤝 Contributing

Feel free open an issue on the [issues page](https://github.com/alehechka/react-hooks/issues) or a pull request in the [repo on GitHub](https://github.com/alehechka/react-hooks/pulls)!

# Show your support

Give a ⭐️ if this project helped you!

# License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Contributions, issues and feature requests are welcome!
