/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.15
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
 * @interface AuthControllerSigninConfirmRequest
 */
export interface AuthControllerSigninConfirmRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSigninConfirmRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSigninConfirmRequest
     */
    code: string;
}

/**
 * Check if a given object implements the AuthControllerSigninConfirmRequest interface.
 */
export function instanceOfAuthControllerSigninConfirmRequest(value: object): value is AuthControllerSigninConfirmRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function AuthControllerSigninConfirmRequestFromJSON(json: any): AuthControllerSigninConfirmRequest {
    return AuthControllerSigninConfirmRequestFromJSONTyped(json, false);
}

export function AuthControllerSigninConfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerSigninConfirmRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'code': json['code'],
    };
}

export function AuthControllerSigninConfirmRequestToJSON(json: any): AuthControllerSigninConfirmRequest {
    return AuthControllerSigninConfirmRequestToJSONTyped(json, false);
}

export function AuthControllerSigninConfirmRequestToJSONTyped(value?: AuthControllerSigninConfirmRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'code': value['code'],
    };
}

