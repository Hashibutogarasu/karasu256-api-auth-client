/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.21
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
 * @interface AuthControllerForgotPasswordRequest
 */
export interface AuthControllerForgotPasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerForgotPasswordRequest
     */
    email: string;
}

/**
 * Check if a given object implements the AuthControllerForgotPasswordRequest interface.
 */
export function instanceOfAuthControllerForgotPasswordRequest(value: object): value is AuthControllerForgotPasswordRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function AuthControllerForgotPasswordRequestFromJSON(json: any): AuthControllerForgotPasswordRequest {
    return AuthControllerForgotPasswordRequestFromJSONTyped(json, false);
}

export function AuthControllerForgotPasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerForgotPasswordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function AuthControllerForgotPasswordRequestToJSON(json: any): AuthControllerForgotPasswordRequest {
    return AuthControllerForgotPasswordRequestToJSONTyped(json, false);
}

export function AuthControllerForgotPasswordRequestToJSONTyped(value?: AuthControllerForgotPasswordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
    };
}

