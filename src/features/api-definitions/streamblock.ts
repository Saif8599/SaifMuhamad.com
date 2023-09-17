export declare interface StreamBlockItemJson<T, V> {
  type: T;
  value: V;
  id: string;
}

/**
 * Generic type to map an object of possible types a StreamBlock can contain to
 * an array of union types that matches the API response.
 *
 * For example: to create a fictitious ExampleStreamBlock that may contain
 * ButtonBlocks (as "btn") or ImageBlocks (as "img"), you can type it as
 * follows:
 *
 *   interface ButtonBlockJson {
 *     title: string;
 *   }
 *
 *   interface ImageBlockJson {
 *     src: string;
 *     alt: string;
 *   }
 *
 *   type ExampleStreamBlockJson = StreamBlockJson<{
 *     btn: ButtonBlockJson,
 *     img: ImageBlockJson,
 *   }>
 *
 * The resulting type will be:
 *
 *   (
 *     | StreamBlockItemJson<'btn', ButtonBlockJson>
 *     | StreamBlockItemJson<'img', ImageBlockJson>
 *   )[]
 *
 * which expands to the following API representation:
 *
 *   (
 *     | { type: 'btn', value: { title: string }, id: string }
 *     | { type: 'img', value: { src: string, alt: string }, id: string }
 *   )[]
 */
export declare type StreamBlockJson<T extends Record<string, unknown>> = {
  [K in keyof T]: StreamBlockItemJson<K, T[K]>;
}[keyof T][];
