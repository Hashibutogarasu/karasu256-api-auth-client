/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PublicAuthControllerSignin200Response
 */
export interface PublicAuthControllerSignin200Response {
    /**
     * 
     * @type {string}
     * @memberof PublicAuthControllerSignin200Response
     */
    token: string;
}

/**
 * Check if a given object implements the PublicAuthControllerSignin200Response interface.
 */
export function instanceOfPublicAuthControllerSignin200Response(value: object): value is PublicAuthControllerSignin200Response {
    if (!('token' in value) || value['token'] === undefined) return false;
    return true;
}

export function PublicAuthControllerSignin200ResponseFromJSON(json: any): PublicAuthControllerSignin200Response {
    return PublicAuthControllerSignin200ResponseFromJSONTyped(json, false);
}

export function PublicAuthControllerSignin200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicAuthControllerSignin200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function PublicAuthControllerSignin200ResponseToJSON(json: any): PublicAuthControllerSignin200Response {
    return PublicAuthControllerSignin200ResponseToJSONTyped(json, false);
}

export function PublicAuthControllerSignin200ResponseToJSONTyped(value?: PublicAuthControllerSignin200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'token': value['token'],
    };
}

