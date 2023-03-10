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
import { AssetWithOrdersCollection } from './asset-with-orders-collection';
// May contain unused imports in some cases
// @ts-ignore
import { AssetWithOrdersOrders } from './asset-with-orders-orders';
// May contain unused imports in some cases
// @ts-ignore
import { Fee } from './fee';

/**
 * 
 * @export
 * @interface AssetWithOrders
 */
export interface AssetWithOrders {
    /**
     * 
     * @type {AssetWithOrdersCollection}
     * @memberof AssetWithOrders
     */
    'collection': AssetWithOrdersCollection;
    /**
     * Timestamp of when the asset was created
     * @type {string}
     * @memberof AssetWithOrders
     */
    'created_at': string | null;
    /**
     * Description of this asset
     * @type {string}
     * @memberof AssetWithOrders
     */
    'description': string | null;
    /**
     * Royalties to pay on this asset operations
     * @type {Array<Fee>}
     * @memberof AssetWithOrders
     */
    'fees'?: Array<Fee>;
    /**
     * [DEPRECATED] Internal Immutable X Token ID
     * @type {string}
     * @memberof AssetWithOrders
     */
    'id'?: string;
    /**
     * URL of the image which should be used for this asset
     * @type {string}
     * @memberof AssetWithOrders
     */
    'image_url': string | null;
    /**
     * Metadata of this asset
     * @type {object}
     * @memberof AssetWithOrders
     */
    'metadata': object | null;
    /**
     * Name of this asset
     * @type {string}
     * @memberof AssetWithOrders
     */
    'name': string | null;
    /**
     * 
     * @type {AssetWithOrdersOrders}
     * @memberof AssetWithOrders
     */
    'orders'?: AssetWithOrdersOrders;
    /**
     * Status of this asset (where it is in the system)
     * @type {string}
     * @memberof AssetWithOrders
     */
    'status': string;
    /**
     * Address of the ERC721 contract
     * @type {string}
     * @memberof AssetWithOrders
     */
    'token_address': string;
    /**
     * ERC721 Token ID of this asset
     * @type {string}
     * @memberof AssetWithOrders
     */
    'token_id': string;
    /**
     * Timestamp of when the asset was updated
     * @type {string}
     * @memberof AssetWithOrders
     */
    'updated_at': string | null;
    /**
     * URI to access this asset externally to Immutable X
     * @type {string}
     * @memberof AssetWithOrders
     */
    'uri': string | null;
    /**
     * Ethereum address of the user who owns this asset
     * @type {string}
     * @memberof AssetWithOrders
     */
    'user': string;
}

