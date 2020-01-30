# Node v13 and support for ECMA script

Running node with ECMA script and no transpilation => CommonJS

https://nodejs.org/api/esm.html#esm_ecmascript_modules

## Install latest versiom of node 

### NVM

`nvm install node --reinstall-packages-from=node`

checking for version

```
$ node --version
v13.7.0
```

## Running

`node --experimental-modules test.js`
