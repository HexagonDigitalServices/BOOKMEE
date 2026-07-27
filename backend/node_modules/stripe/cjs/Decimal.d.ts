declare const __brand: unique symbol;
declare const __stripeType: unique symbol;
/**
 * Rounding direction for Decimal operations.
 *
 * @remarks
 * Seven modes corresponding to
 * {@link https://standards.ieee.org/ieee/754/6210/ | IEEE 754-2019} §4.3
 * rounding-direction attributes:
 *
 * | Direction      | IEEE 754 name           | Behavior                          | Examples (→ integer)                  |
 * | -------------- | ----------------------- | --------------------------------- | ------------------------------------- |
 * | `'ceil'`       | `roundTowardPositive`   | Toward +∞                         |  1.1→2, -1.1→-1                       |
 * | `'floor'`      | `roundTowardNegative`   | Toward -∞                         |  1.9→1, -1.1→-2                       |
 * | `'round-down'` | `roundTowardZero`       | Toward zero (truncate)            |  1.9→1, -1.9→-1                       |
 * | `'round-up'`   | —                       | Away from zero                    |  1.1→2, -1.1→-2                       |
 * | `'half-up'`    | `roundTiesToAway`       | Nearest; ties away from zero      |  0.5→1, -0.5→-1, 1.4→1               |
 * | `'half-down'`  | —                       | Nearest; ties toward zero         |  0.5→0, -0.5→0, 1.6→2                |
 * | `'half-even'`  | `roundTiesToEven`       | Nearest; ties to even (banker's)  |  0.5→0, 1.5→2, 2.5→2, 3.5→4          |
 *
 * @public
 */
export type RoundDirection = 'ceil' | 'floor' | 'round-down' | 'round-up' | 'half-up' | 'half-down' | 'half-even';
/**
 * Precision specification for {@link DecimalImpl.round}.
 *
 * @remarks
 * Two modes are supported:
 * - `"decimal-places"` — round to a fixed number of digits after the decimal point.
 * - `"significant-figures"` — round to a fixed number of significant digits.
 *
 * @example
 * ```ts
 * // Round to 2 decimal places
 * amount.round('half-even', { mode: 'decimal-places', value: 2 });
 *
 * // Round to 4 significant figures
 * amount.round('half-up', { mode: 'significant-figures', value: 4 });
 * ```
 *
 * @public
 */
export interface DecimalRoundingOptions {
    mode: 'decimal-places' | 'significant-figures';
    value: number;
}
/**
 * Built-in rounding presets keyed by semantic name.
 *
 * @remarks
 * This is an **open interface** — consumers can extend it via declaration
 * merging to register custom presets that are accepted by
 * {@link DecimalImpl.round}:
 *
 * ```ts
 * declare module '@stripe/apps-extensibility-sdk/stdlib' {
 *   interface DecimalRoundingPresets {
 *     'my-custom-preset': DecimalRoundingOptions;
 *   }
 * }
 * ```
 *
 * Built-in presets:
 *
 * | Preset              | Equivalent DecimalRoundingOptions                      |
 * | ------------------- | ------------------------------------------------------ |
 * | `"ubb-usage-count"` | `{ mode: "significant-figures", value: 15 }`          |
 * | `"v1-api"`          | `{ mode: "decimal-places", value: 12 }`               |
 *
 * @public
 */
export interface DecimalRoundingPresets {
    'ubb-usage-count': DecimalRoundingOptions;
    'v1-api': DecimalRoundingOptions;
}
/**
 * The IEEE 754 decimal128 coefficient size (34 digits) — the recommended
 * precision for {@link DecimalImpl.div} when full precision is desired.
 *
 * @remarks
 * Pass this as the `precision` argument to `div()` when you want the
 * maximum available precision. Division requires explicit precision —
 * no invisible defaults in financial code.
 *
 * @example
 * ```ts
 * // Use the full decimal128 precision explicitly
 * a.div(b, DEFAULT_DIV_PRECISION, 'half-even');
 * ```
 *
 * @public
 */
export declare const DEFAULT_DIV_PRECISION = 34;
/**
 * Internal implementation of arbitrary-precision decimal arithmetic.
 *
 * @remarks
 * Represents a decimal value as `coefficient × 10^exponent` using
 * native `BigInt` for the coefficient, giving unlimited precision with
 * no rounding on construction. Instances are always
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze | frozen}
 * and all arithmetic produces new instances.
 *
 * This class is **not** exported directly — consumers interact with
 * the branded {@link Decimal} type and the {@link Decimal | Decimal companion object}.
 *
 * @internal
 */
declare class DecimalImpl {
    /** @internal */
    private readonly _coefficient;
    /** @internal */
    private readonly _exponent;
    /**
     * Construct and normalise a decimal value.
     *
     * @param coefficient - The unscaled integer value.
     * @param exponent - The power-of-ten scale factor.
     *
     * @internal
     */
    constructor(coefficient: bigint, exponent: number);
    /**
     * Strip trailing zeros from `coefficient`, incrementing `exponent`
     * for each zero removed. Zero always normalises to `(0n, 0)`.
     *
     * @param coefficient - Raw coefficient before normalisation.
     * @param exponent - Raw exponent before normalisation.
     * @returns A `[coefficient, exponent]` tuple with trailing zeros removed.
     *
     * @internal
     */
    private static normalize;
    /**
     * Apply rounding to the result of an integer division.
     *
     * @remarks
     * BigInt division truncates toward zero. This helper inspects the
     * `remainder` to decide whether to adjust the truncated `quotient`
     * by ±1 according to the chosen {@link RoundDirection}.
     *
     * The rounding direction is derived from the signs of `remainder`
     * and `divisor`: when they agree the exact fractional part is
     * positive (the truncation point is below the true value, so +1
     * rounds to nearest); when they disagree the fractional part is
     * negative (−1 rounds to nearest).
     *
     * @param quotient - Truncated integer quotient (`dividend / divisor`).
     * @param remainder - Division remainder (`dividend % divisor`).
     * @param divisor - The divisor used in the division.
     * @param direction - The rounding strategy to apply.
     * @returns The rounded quotient.
     *
     * @internal
     */
    private static roundDivision;
    /**
     * Return the sum of this value and `other`.
     *
     * @param other - The addend.
     * @returns A new {@link Decimal} equal to `this + other`.
     *
     * @public
     */
    add(other: Decimal): Decimal;
    /**
     * Return the difference of this value and `other`.
     *
     * @param other - The subtrahend.
     * @returns A new {@link Decimal} equal to `this - other`.
     *
     * @public
     */
    sub(other: Decimal): Decimal;
    /**
     * Return the product of this value and `other`.
     *
     * @param other - The multiplicand.
     * @returns A new {@link Decimal} equal to `this × other`.
     *
     * @public
     */
    mul(other: Decimal): Decimal;
    /**
     * Return the quotient of this value divided by `other`.
     *
     * @remarks
     * Division scales the dividend to produce `precision` decimal digits
     * in the result, then applies integer division and rounds the
     * remainder according to `direction`.
     *
     * Division requires explicit rounding control — no invisible defaults
     * in financial code. For full precision use {@link DEFAULT_DIV_PRECISION}
     * (34, matching the IEEE 754 decimal128 coefficient size).
     *
     * @example
     * ```ts
     * Decimal.from('1').div(Decimal.from('3'), 5, 'half-up');   // "0.33333"
     * Decimal.from('5').div(Decimal.from('2'), 0, 'half-up');   // "3"
     * Decimal.from('5').div(Decimal.from('2'), 0, 'half-even'); // "2"
     * ```
     *
     * @param other - The divisor. Must not be zero.
     * @param precision - Maximum number of decimal digits in the result.
     * @param direction - How to round when the exact quotient cannot
     *   be represented at the requested precision.
     * @returns A new {@link Decimal} equal to `this ÷ other`, rounded to
     *   `precision` decimal places.
     * @throws {@link Error} if `other` is zero.
     * @throws {@link Error} if `precision` is negative or non-integer.
     *
     * @public
     */
    div(other: Decimal, precision: number, direction: RoundDirection): Decimal;
    /**
     * Three-way comparison of this value with `other`.
     *
     * @example
     * ```ts
     * const a = Decimal.from('1.5');
     * const b = Decimal.from('2');
     * a.cmp(b); // -1
     * b.cmp(a); //  1
     * a.cmp(a); //  0
     * ```
     *
     * @param other - The value to compare against.
     * @returns `-1` if `this \< other`, `0` if equal, `1` if `this \> other`.
     *
     * @public
     */
    cmp(other: Decimal): -1 | 0 | 1;
    /**
     * Return `true` if this value is numerically equal to `other`.
     *
     * @param other - The value to compare against.
     * @returns `true` if `this === other` in value, `false` otherwise.
     *
     * @public
     */
    eq(other: Decimal): boolean;
    /**
     * Return `true` if this value is strictly less than `other`.
     *
     * @param other - The value to compare against.
     * @returns `true` if `this \< other`, `false` otherwise.
     *
     * @public
     */
    lt(other: Decimal): boolean;
    /**
     * Return `true` if this value is less than or equal to `other`.
     *
     * @param other - The value to compare against.
     * @returns `true` if `this ≤ other`, `false` otherwise.
     *
     * @public
     */
    lte(other: Decimal): boolean;
    /**
     * Return `true` if this value is strictly greater than `other`.
     *
     * @param other - The value to compare against.
     * @returns `true` if `this \> other`, `false` otherwise.
     *
     * @public
     */
    gt(other: Decimal): boolean;
    /**
     * Return `true` if this value is greater than or equal to `other`.
     *
     * @param other - The value to compare against.
     * @returns `true` if `this ≥ other`, `false` otherwise.
     *
     * @public
     */
    gte(other: Decimal): boolean;
    /**
     * Return `true` if this value is exactly zero.
     *
     * @returns `true` if the value is zero, `false` otherwise.
     *
     * @public
     */
    isZero(): boolean;
    /**
     * Return `true` if this value is strictly less than zero.
     *
     * @returns `true` if negative, `false` if zero or positive.
     *
     * @public
     */
    isNegative(): boolean;
    /**
     * Return `true` if this value is strictly greater than zero.
     *
     * @returns `true` if positive, `false` if zero or negative.
     *
     * @public
     */
    isPositive(): boolean;
    /**
     * Return the additive inverse of this value.
     *
     * @returns A new {@link Decimal} equal to `-this`.
     *
     * @public
     */
    neg(): Decimal;
    /**
     * Return the absolute value.
     *
     * @returns A new {@link Decimal} equal to `|this|`. If this value is
     *   already non-negative, returns `this` (no allocation).
     *
     * @public
     */
    abs(): Decimal;
    /**
     * Round this value to a specified precision.
     *
     * @remarks
     * **Rounding directions** (IEEE 754-2019 §4.3):
     *
     * | Direction      | Behavior                                       |
     * | -------------- | ---------------------------------------------- |
     * | `'ceil'`       |  1.1→2, -1.1→-1, 1.0→1 (toward +∞)             |
     * | `'floor'`      |  1.9→1, -1.1→-2, 1.0→1 (toward -∞)             |
     * | `'round-down'` |  1.9→1, -1.9→-1 (toward zero / truncate)       |
     * | `'round-up'`   |  1.1→2, -1.1→-2 (away from zero)               |
     * | `'half-up'`    |  0.5→1, 1.5→2, -0.5→-1 (ties away from zero)   |
     * | `'half-down'`  |  0.5→0, 1.5→1, -0.5→0 (ties toward zero)       |
     * | `'half-even'`  |  0.5→0, 1.5→2, 2.5→2, 3.5→4 (ties to even)     |
     *
     * **Precision** is specified as a {@link DecimalRoundingOptions} object
     * or a preset name from {@link DecimalRoundingPresets}:
     *
     * @example
     * ```ts
     * // Using a preset
     * amount.round('half-even', 'v1-api');
     *
     * // Using explicit options
     * amount.round('half-even', { mode: 'decimal-places', value: 2 });
     * amount.round('half-up', { mode: 'significant-figures', value: 4 });
     * ```
     *
     * @param direction - How to round.
     * @param options - A {@link DecimalRoundingOptions} object or key of {@link DecimalRoundingPresets}.
     * @returns A new {@link Decimal} rounded to the specified precision.
     * @throws {@link Error} if `options.value` is negative or non-integer.
     * @throws {@link Error} if the preset name is not recognized.
     *
     * @public
     */
    round(direction: RoundDirection, options: keyof DecimalRoundingPresets | DecimalRoundingOptions): Decimal;
    /**
     * Return a human-readable string representation.
     *
     * @remarks
     * Plain notation for values whose digit count is at most 30, and
     * scientific notation (`1.23E+40`) for larger values. Trailing zeros
     * are never present because the internal representation is normalised.
     *
     * @public
     */
    toString(): string;
    /**
     * Return the JSON-serialisable representation.
     *
     * @remarks
     * Returns a plain string matching the Stripe API convention where
     * decimal values are serialised as strings in JSON. Called
     * automatically by `JSON.stringify`.
     *
     * @public
     */
    toJSON(): string;
    /**
     * Convert to a JavaScript `number`.
     *
     * @remarks
     * This is an explicit, intentionally lossy conversion. Use it only
     * when you need a numeric value for display or interop with APIs
     * that require `number`. Prefer {@link Decimal.toString | toString}
     * or {@link Decimal.toFixed | toFixed} for lossless output.
     *
     * @public
     */
    toNumber(): number;
    /**
     * Format this value as a fixed-point string with exactly
     * `decimalPlaces` digits after the decimal point.
     *
     * @remarks
     * Values are rounded according to `direction` when the internal
     * precision exceeds the requested number of decimal places.
     * The rounding direction is always required — no invisible defaults
     * in financial code.
     *
     * @example
     * ```ts
     * Decimal.from('1.235').toFixed(2, 'half-up');   // "1.24"
     * Decimal.from('1.225').toFixed(2, 'half-even'); // "1.22"
     * Decimal.from('42').toFixed(3, 'half-up');      // "42.000"
     * ```
     *
     * @param decimalPlaces - Number of digits after the decimal point.
     *   Must be a non-negative integer.
     * @param direction - How to round when truncating excess digits.
     * @returns A string with exactly `decimalPlaces` fractional digits.
     * @throws {@link Error} if `decimalPlaces` is negative or non-integer.
     *
     * @public
     */
    toFixed(decimalPlaces: number, direction: RoundDirection): string;
    /**
     * Return a string primitive when the runtime coerces the value.
     *
     * @remarks
     * Deliberately returns a `string` (not a `number`) to discourage
     * silent precision loss through implicit arithmetic coercion.
     * When used in a numeric context (for example, `+myDecimal`), the
     * JavaScript runtime will first call this method and then coerce
     * the resulting string to a `number`, which may lose precision.
     * Callers should prefer the explicit
     * {@link Decimal.toNumber | toNumber} method when an IEEE 754
     * `number` is required.
     *
     * @public
     */
    valueOf(): string;
}
/**
 * Arbitrary-precision decimal type for billing calculations.
 *
 * @remarks
 * `Decimal` is a branded wrapper around an internal class that stores
 * values as `coefficient × 10^exponent` using `BigInt`. It avoids
 * every common binary floating-point pitfall — `Decimal.from('0.1').add(Decimal.from('0.2'))`
 * is exactly `0.3`.
 *
 * Instances are immutable (frozen) and all arithmetic returns a new
 * `Decimal`. The type carries two brand symbols so the type system
 * prevents accidental assignment from plain `number`, `string`, or
 * `bigint`.
 *
 * Create values via the companion object:
 *
 * @example
 * ```ts
 * import { Decimal, RoundDirection } from '@stripe/apps-extensibility-sdk/stdlib';
 *
 * const price = Decimal.from('19.99');
 * const tax   = price.mul(Decimal.from('0.0825'));
 * const total = price.add(tax);
 *
 * console.log(total.toFixed(2, 'half-up'));   // "21.64"
 * console.log(JSON.stringify({ total }));          // '{"total":"21.639175"}'
 * console.log(total.toFixed(2, 'half-even')); // "21.64"
 * ```
 *
 * @public
 */
export type Decimal = DecimalImpl & {
    readonly [__brand]: 'Decimal';
    readonly [__stripeType]: 'decimal';
};
/**
 * Check whether a value is a {@link Decimal} instance.
 *
 * @remarks
 * Use this instead of `instanceof` — the underlying class is not
 * publicly exported, so `instanceof` checks are not available to
 * consumers.
 *
 * @example
 * ```ts
 * if (isDecimal(value)) {
 *   value.add(Decimal.from('1')); // value is Decimal
 * }
 * ```
 *
 * @public
 */
export declare function isDecimal(value: unknown): value is Decimal;
/**
 * Companion object for creating {@link Decimal} instances.
 *
 * @public
 */
export declare const Decimal: {
    /**
     * Create a {@link Decimal} from a string, number, or bigint.
     *
     * @remarks
     * - **string**: Parsed as a decimal literal. Accepts an optional sign,
     *   integer digits, an optional fractional part, and an optional `e`/`E`
     *   exponent. Leading/trailing whitespace is trimmed.
     * - **number**: Must be finite. Converted via `Number.prototype.toString()`
     *   then parsed, so `Decimal.from(0.1)` produces `"0.1"` (not the
     *   53-bit binary approximation).
     * - **bigint**: Treated as an integer with exponent 0.
     *
     * @example
     * ```ts
     * Decimal.from('1.23');   // string
     * Decimal.from(42);       // number
     * Decimal.from(100n);     // bigint
     * Decimal.from('1.5e3');  // scientific notation → 1500
     * ```
     *
     * @param value - The value to convert.
     * @returns A new frozen {@link Decimal} instance.
     * @throws {@link Error} if `value` is a non-finite number, an empty
     *   string, or a string that does not match the decimal literal grammar.
     *
     * @public
     */
    from(value: string | number | bigint): Decimal;
    /**
     * The {@link Decimal} value representing zero.
     *
     * @remarks
     * Pre-allocated singleton — prefer `Decimal.zero` over
     * `Decimal.from(0)` to avoid an unnecessary allocation.
     *
     * @public
     */
    zero: Decimal;
};
export {};
