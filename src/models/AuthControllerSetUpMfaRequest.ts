/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 1.0.3
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
 * @interface AuthControllerSetUpMfaRequest
 */
export interface AuthControllerSetUpMfaRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSetUpMfaRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSetUpMfaRequest
     */
    password: string;
}

/**
 * Check if a given object implements the AuthControllerSetUpMfaRequest interface.
 */
export function instanceOfAuthControllerSetUpMfaRequest(value: object): value is AuthControllerSetUpMfaRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function AuthControllerSetUpMfaRequestFromJSON(json: any): AuthControllerSetUpMfaRequest {
    return AuthControllerSetUpMfaRequestFromJSONTyped(json, false);
}

export function AuthControllerSetUpMfaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerSetUpMfaRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function AuthControllerSetUpMfaRequestToJSON(json: any): AuthControllerSetUpMfaRequest {
    return AuthControllerSetUpMfaRequestToJSONTyped(json, false);
}

export function AuthControllerSetUpMfaRequestToJSONTyped(value?: AuthControllerSetUpMfaRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'password': value['password'],
    };
}

