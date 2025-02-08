/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.14
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
 * @interface AuthControllerDisableMfaRequest
 */
export interface AuthControllerDisableMfaRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerDisableMfaRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerDisableMfaRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerDisableMfaRequest
     */
    code: string;
}

/**
 * Check if a given object implements the AuthControllerDisableMfaRequest interface.
 */
export function instanceOfAuthControllerDisableMfaRequest(value: object): value is AuthControllerDisableMfaRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function AuthControllerDisableMfaRequestFromJSON(json: any): AuthControllerDisableMfaRequest {
    return AuthControllerDisableMfaRequestFromJSONTyped(json, false);
}

export function AuthControllerDisableMfaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerDisableMfaRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'code': json['code'],
    };
}

export function AuthControllerDisableMfaRequestToJSON(json: any): AuthControllerDisableMfaRequest {
    return AuthControllerDisableMfaRequestToJSONTyped(json, false);
}

export function AuthControllerDisableMfaRequestToJSONTyped(value?: AuthControllerDisableMfaRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'password': value['password'],
        'code': value['code'],
    };
}

