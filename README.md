# react-googlemap-starter

location based frontend web app using react + googlemap

## how to run

### setup

- install latest bun runtime

```sh
$ curl -fsSL https://bun.sh/install | bash
bun was installed successfully to ~/.bun/bin/bun

$ bun -v
1.2.15
```

### configure

- install packages with bun

```sh
$ bun init -y
$ bun i
bun install v1.2.15 (df017990)
Checked 161 installs across 215 packages (no changes) [19.00ms]
```

- create runtime variables

```sh
$ cat .env
REACT_APP_MAPS_API_KEY={YOUR_GOOGLEMAP_API_KEY}
```

### launch

- run bun app with development mode

```sh
$ bun dev
```
