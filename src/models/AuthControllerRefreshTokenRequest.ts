/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.22
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
 * @interface AuthControllerRefreshTokenRequest
 */
export interface AuthControllerRefreshTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerRefreshTokenRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerRefreshTokenRequest
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the AuthControllerRefreshTokenRequest interface.
 */
export function instanceOfAuthControllerRefreshTokenRequest(value: object): value is AuthControllerRefreshTokenRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('refreshToken' in value) || value['refreshToken'] === undefined) return false;
    return true;
}

export function AuthControllerRefreshTokenRequestFromJSON(json: any): AuthControllerRefreshTokenRequest {
    return AuthControllerRefreshTokenRequestFromJSONTyped(json, false);
}

export function AuthControllerRefreshTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerRefreshTokenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'refreshToken': json['refreshToken'],
    };
}

export function AuthControllerRefreshTokenRequestToJSON(json: any): AuthControllerRefreshTokenRequest {
    return AuthControllerRefreshTokenRequestToJSONTyped(json, false);
}

export function AuthControllerRefreshTokenRequestToJSONTyped(value?: AuthControllerRefreshTokenRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'refreshToken': value['refreshToken'],
    };
}

