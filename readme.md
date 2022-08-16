# Node JS Loading Spinner Demo

This is a demo project for the [ora](https://www.npmjs.com/package/ora) library, which is used to add loading spinners to command line interfaces and terminal applications. This is ideal for when you are performing time-consuming, asynchronous tasks and need to give the user visual feedback that the application is busy and has not frozen.

The 'ora' library is a popular choice for loading spinners with approximately 8-9 million downloads per week. It is also updated regularly with the latest version (6.1.2) released on 27 June 2022.

The library has migrated over to [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) syntax as of version 6.0.0 on 24 August 2021. I have published a [separate package](https://www.npmjs.com/package/ora-classic) mirroring the previous version. This demo has scripts for both the [classic](./classic/index.js) and the [ESM](./esm/index.js) syntax, so that you can decide which one you want to refer to.

---

## Usage

1. Open a terminal in the 'classic' or 'esm' folders, depending on which syntax you prefer.
2. Run `npm install` to download the respective version of the 'ora' package.
3. Run `node index` to execute the demo.

---

## Credits

* [@tjohnston-softdev](https://github.com/tjohnston-softdev) - Demo project, [ora-classic](https://www.npmjs.com/package/ora-classic) library.
* [@sindresorhus](https://github.com/sindresorhus) - Lead developer of the original 'ora' library.

---

## Disclaimer

This demo project is licensed under CC0 1.0 Universal. I wrote this as a reference for using the 'ora' library and to illustrate the differences between the CommonJS and ESM syntaxes. While I consider this the official demo for my 'ora-classic' fork, this is not an official demo for the 'ora' library as a whole. I am in no way affiliated with [@sindresorhus](https://github.com/sindresorhus) or anybody else who has worked on the 'ora' library. While I will make an effort to maintain this repository where applicable, I do not accept any responsibility for how you use this code or either versions of the 'ora' library.
