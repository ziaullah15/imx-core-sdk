/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { FeeEntry } from './fee-entry';
// May contain unused imports in some cases
// @ts-ignore
import { GetSignableOrderRequestTokenBuy } from './get-signable-order-request-token-buy';
// May contain unused imports in some cases
// @ts-ignore
import { GetSignableOrderRequestTokenSell } from './get-signable-order-request-token-sell';

/**
 * 
 * @export
 * @interface GetSignableOrderRequest
 */
export interface GetSignableOrderRequest {
    /**
     * Fee-exclusive amount to buy the asset
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'amount_buy': string;
    /**
     * Amount to sell (quantity)
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'amount_sell': string;
    /**
     * ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour
     * @type {number}
     * @memberof GetSignableOrderRequest
     */
    'expiration_timestamp'?: number;
    /**
     * Inclusion of either maker or taker fees
     * @type {Array<FeeEntry>}
     * @memberof GetSignableOrderRequest
     */
    'fees'?: Array<FeeEntry>;
    /**
     * SplitFees dictates whether fees will be split between maker & taker, set split_fees to true when submitting signing to v3 endpoints and vice versa for v1
     * @type {boolean}
     * @memberof GetSignableOrderRequest
     */
    'split_fees'?: boolean;
    /**
     * 
     * @type {GetSignableOrderRequestTokenBuy}
     * @memberof GetSignableOrderRequest
     */
    'token_buy': GetSignableOrderRequestTokenBuy;
    /**
     * 
     * @type {GetSignableOrderRequestTokenSell}
     * @memberof GetSignableOrderRequest
     */
    'token_sell': GetSignableOrderRequestTokenSell;
    /**
     * Ethereum address of the submitting user
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'user': string;
}

