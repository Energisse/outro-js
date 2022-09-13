# Outro Js

Add an outro to windows

## Run

`node index.js` or execute `outro.exe` on windows

## Compile to exe

Use [ vercel/pkg ](https://github.com/vercel/pkg) to compile nodeJs script into executable for windows.

`npm install -g pkg`

`pkg -t node14-win-x64 index.js -o outro`

| Os            | Windows | Linux           | Macos |
| ------------- | ------- | --------------- | ----- |
| Compatibility | ✅      | ❌ (In comming) | ❌    |
