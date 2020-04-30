declare module "compressor" {
    interface CompressionOptions {
        compressionRate: number;
        overwrite: boolean;
        suffix: string;
    }
    export const defaultCompressionOptions: CompressionOptions;
    /**
     * Exit the program due to some error.
     * @param message The message to display on exit.
     */
    export function exit(message: string, code: number): void;
    export enum CompressResult {
        success = 0,
        invalid_glob = 1,
        no_glob_provided = 2,
        compress_error = 3
    }
    export class VideoCompressor {
        private static files;
        private static options;
        static compress(patterns: string[], options?: CompressionOptions): Promise<CompressResult>;
        static getBinaryFile(platform: string): string;
        /**
         * Escapes spaces in file names and paths.
         * @param fileName The filename / pathname
         */
        static fixSpaces(fileName: string): string;
        static getOutputFilename(input: string, suffix: string): string;
    }
}
