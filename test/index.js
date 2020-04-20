const test = require('ava');
const {
  VideoCompressor,
  defaultCompressionOptions,
  CompressResult,
} = require('../src/compressor');

const fs = require('fs');
const path = require('path');

test('getOutputFilename works', (t) => {
  const first = VideoCompressor.getOutputFilename(
    'pizza.pizza.mp4',
    defaultCompressionOptions.suffix
  );
  const second = VideoCompressor.getOutputFilename('pizza.mp4', '');
  t.is(first, 'pizza.pizza_compressed.mp4');
  t.is(second, 'pizza.mp4');
});

test('reports correct errors', async (t) => {
  const first = await VideoCompressor.compress(['invalid glob']); // invalid glob
  const second = await VideoCompressor.compress([]); // no glob
  const third = await VideoCompressor.compress(['test/index.js']); // glob to incompatible file
  t.is(first, CompressResult.invalid_glob);
  t.is(second, CompressResult.no_glob_provided);
  t.is(third, CompressResult.compress_error);
});

test('successfully compresses video', async (t) => {
  const result = await VideoCompressor.compress(['test/*.mov']);
  t.is(result, CompressResult.success);
});

test('binary file located correctly', async (t) => {
  const file = VideoCompressor.getBinaryFile(process.platform);
  const winFile = VideoCompressor.getBinaryFile('win32');
  const correctFilePathMac = path.join(
    __dirname,
    '..',
    'ffmpeg_binaries',
    'ffmpeg'
  );
  const correctFilePathWin = path.join(
    __dirname,
    '..',
    'ffmpeg_binaries',
    'ffmpeg.exe'
  );
  t.true(fs.existsSync(file));
  t.true(fs.existsSync(winFile));
  t.is(file, correctFilePathMac);
  t.is(winFile, correctFilePathWin);
});

test('file path correct', async (t) => {
  const file = VideoCompressor.fixSpaces('test video.mp4');
  t.is(file, 'test\\ video.mp4');
});
