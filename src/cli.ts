#!/usr/bin/env node

/**
 * A video file compressor package.
 * @author skoshx
 *
 * Copyright 2020 skoshx. All rights reserved.
 */

import { CompressResult, VideoCompressor, exit } from './compressor';

async function main() {
  const args: string[] = process.argv.slice(2);
  const result: CompressResult = await VideoCompressor.compress(args);

  if (result === CompressResult.no_glob_provided)
    exit(
      'You need to pass a glob pattern. For example: compress dist/*.mp4 to compress all MP4 files in the dist folder.',
      1
    );
  if (result === CompressResult.invalid_glob)
    exit(
      'No files found for that glob pattern. Make sure your glob pattern is correct. For example: compress dist/*.mp4 to compress all MP4 files in the dist folder.',
      1
    );
  if (result === CompressResult.compress_error)
    exit(
      `There was an error compressing your files. The error logs above might help you figure out what is causing the error.`,
      1
    );
  if (result === CompressResult.success) {
    exit(`Your files have been compressed!`, 0);
  }
}

main();
