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
import { TransferToken } from './transfer-token';

/**
 * 
 * @export
 * @interface Transfer
 */
export interface Transfer {
    /**
     * Ethereum address of the user who received this transfer
     * @type {string}
     * @memberof Transfer
     */
    'receiver': string;
    /**
     * Status of the transaction
     * @type {string}
     * @memberof Transfer
     */
    'status': string;
    /**
     * Timestamp of the transfer
     * @type {string}
     * @memberof Transfer
     */
    'timestamp': string | null;
    /**
     * 
     * @type {TransferToken}
     * @memberof Transfer
     */
    'token': TransferToken;
    /**
     * Sequential transaction ID
     * @type {number}
     * @memberof Transfer
     */
    'transaction_id': number;
    /**
     * Ethereum address of the user  who submitted this transfer
     * @type {string}
     * @memberof Transfer
     */
    'user': string;
}

