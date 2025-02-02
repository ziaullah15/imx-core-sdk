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
import { TradeA } from './trade-a';
// May contain unused imports in some cases
// @ts-ignore
import { TradeB } from './trade-b';

/**
 * 
 * @export
 * @interface Trade
 */
export interface Trade {
    /**
     * 
     * @type {TradeA}
     * @memberof Trade
     */
    'a': TradeA;
    /**
     * 
     * @type {TradeB}
     * @memberof Trade
     */
    'b': TradeB;
    /**
     * Status of this trade
     * @type {string}
     * @memberof Trade
     */
    'status': string;
    /**
     * Time this trade occurred
     * @type {string}
     * @memberof Trade
     */
    'timestamp': string | null;
    /**
     * Sequential ID of this trade within Immutable X
     * @type {number}
     * @memberof Trade
     */
    'transaction_id': number;
}

