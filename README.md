# TinyVideo

> TinyVideo is a TINY video compressor that also makes your videos TINY. Uses FFMPEG.

## Features

- Really simple compressing using glob patterns.
- 

## Install

```
$ npm install -g tinyvideo
```

Yarn:

```
$ yarn global add tinyvideo
```

###### Download

- [Normal](https://raw.githubusercontent.com/SkoshRG/http-server/master/index.ts)

## Usage

```shell
tinyvideo folder/*.mp4
```

## Usage (Programmatic)

```js
import { CompressResult, VideoCompressor } from 'tinyvideo';

const result = await VideoCompressor.compress(['test/*.mov']);
```

## API

Uses `FFMPEG` as the backend.

### compress(patterns, options?)

Returns a promise with the CompressResult.

### patterns: `string[]`

An array of glob patterns.

### options: `CompressionOptions` (Optional)

#### compressionRate: `number`

The amount to compress. The higher the more compression. Defaults to `30`.

#### overwrite: `boolean`

Whether to overwrite the files being compressed. Defaults to false.

#### suffix: `string`

The suffix that gets appended to the filenames of the compressed files. Defaults to `_compressed`.
