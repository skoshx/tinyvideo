/**
 * A video file compressor package.
 * @author skoshx
 *
 * Copyright 2020 skoshx. All rights reserved.
 */

import { pathToFileURL } from 'url';

const globby = require('globby');
const execa = require('execa');
const chalk = require('chalk');
const { join } = require('path');

interface CompressionOptions {
  compressionRate: number; // How much to compress. The higher the more it gets compressed.
  overwrite: boolean; // Flag for overwriting original file with compressed file.
  suffix: string; // The ending eg. original.mp4 -> original_compressed.mp4
}

export const defaultCompressionOptions: CompressionOptions = {
  compressionRate: 30,
  overwrite: false,
  suffix: '_compressed',
};

/**
 * Exit the program due to some error.
 * @param message The message to display on exit.
 */
export function exit(message: string, code: number) {
  if (code === 0) {
    // zero exit code, success!
    console.log('✅ ' + chalk.green(message));
    process.exit(code);
  } else {
    // non-zero exit code, error!
    console.log('🚨 ' + chalk.red(message));
    process.exit(code);
  }
}

export enum CompressResult {
  success,
  invalid_glob,
  no_glob_provided,
  compress_error,
}

export class VideoCompressor {
  private static files: string[];
  private static options: CompressionOptions = defaultCompressionOptions;

  public static async compress(
    patterns: string[],
    options?: CompressionOptions
  ): Promise<CompressResult> {
    if (options) this.options = options;

    if (patterns.length < 1) return CompressResult.no_glob_provided;
    this.files = await globby(patterns);
    if (this.files.length === 0) return CompressResult.invalid_glob;
    for (let i = 0; i < this.files.length; i++) {
      const filePath = this.fixSpaces(this.files[i]);
      // const binaryPath = this.fixSpaces(this.getBinaryFile(process.platform));
      const binaryPath = 'ffmpeg'; // Bundling FFMPEG binaries is probably useless

      const outputFileName = this.getOutputFilename(
        filePath,
        this.options.suffix
      );
      // const command = `ffmpeg -i ${filePath} -vcodec libx264 -strict -2 -crf ${this.options.compressionRate} ${outputFileName}`;
      const command = `${binaryPath} -i ${filePath} -vcodec libx264 -strict -2 -crf ${this.options.compressionRate} ${outputFileName}`;
      console.log(
        `Compressing file ${i + 1}/${
          this.files.length
        }. This might take a while depending on the size of your video…`
      );
      try {
        await execa.command(command);
      } catch (e) {
        console.log(e + '\n\n');
        return CompressResult.compress_error;
      }
    }
    return CompressResult.success;
  }

  public static getBinaryFile(platform: string): string {
    if (platform === 'win32')
      return join(__dirname, '../ffmpeg_binaries/ffmpeg.exe');
    else return join(__dirname, '../ffmpeg_binaries/ffmpeg');
  }

  /**
   * Escapes spaces in file names and paths.
   * @param fileName The filename / pathname
   */
  public static fixSpaces(fileName: string): string {
    return fileName.replace(/(\s+)/g, '\\$1');
    // if (process.platform === 'win32') return `\'${fileName}\'`;
    // else return fileName.replace(/ /g, '\\ ');
  }

  public static getOutputFilename(input: string, suffix: string): string {
    const fileName = input.substring(0, input.lastIndexOf('.'));
    const fileFormat = input.substring(input.lastIndexOf('.'));
    return `${fileName}${suffix}${fileFormat}`;
  }
}
