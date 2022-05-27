/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Deposit } from './deposit';

/**
 * 
 * @export
 * @interface ListDepositsResponse
 */
export interface ListDepositsResponse {
    /**
     * Generated cursor returned by previous query
     * @type {string}
     * @memberof ListDepositsResponse
     */
    'cursor': string;
    /**
     * Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
     * @type {number}
     * @memberof ListDepositsResponse
     */
    'remaining': number;
    /**
     * Deposits matching query parameters
     * @type {Array<Deposit>}
     * @memberof ListDepositsResponse
     */
    'result': Array<Deposit>;
}

