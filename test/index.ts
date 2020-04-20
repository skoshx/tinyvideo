import test from 'ava';
import { VideoCompressor, defaultCompressionOptions, CompressResult } from '../src/compressor';

test('getOutputFilename works', (t) => {
  const first = VideoCompressor.getOutputFilename('pizza.pizza.mp4', defaultCompressionOptions.suffix);
  const second = VideoCompressor.getOutputFilename('pizza.mp4', '');
  t.is(first, 'pizza.pizza_compressed.mp4');
  t.is(second, 'pizza.mp4');
});

test('reports correct errors', async (t) => {
  const first = await VideoCompressor.compress(['invalid glob']); // invalid glob
  const second = await VideoCompressor.compress(['']); // no glob
  const third = await VideoCompressor.compress(['test/*.js']); // glob to incompatible file
  t.is(first, CompressResult.invalid_glob);
  t.is(second, CompressResult.no_glob_provided);
  t.is(third, CompressResult.compress_error);
});

test('successfully compresses video', async (t) => {
  const result = await VideoCompressor.compress(['*.mov']);
  t.is(result, CompressResult.success);
});
