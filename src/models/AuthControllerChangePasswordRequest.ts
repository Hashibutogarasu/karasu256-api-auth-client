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
 * @interface AuthControllerChangePasswordRequest
 */
export interface AuthControllerChangePasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    oldPassword: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    newPassword: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    code?: string;
}

/**
 * Check if a given object implements the AuthControllerChangePasswordRequest interface.
 */
export function instanceOfAuthControllerChangePasswordRequest(value: object): value is AuthControllerChangePasswordRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('oldPassword' in value) || value['oldPassword'] === undefined) return false;
    if (!('newPassword' in value) || value['newPassword'] === undefined) return false;
    return true;
}

export function AuthControllerChangePasswordRequestFromJSON(json: any): AuthControllerChangePasswordRequest {
    return AuthControllerChangePasswordRequestFromJSONTyped(json, false);
}

export function AuthControllerChangePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerChangePasswordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'oldPassword': json['oldPassword'],
        'newPassword': json['newPassword'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}

export function AuthControllerChangePasswordRequestToJSON(json: any): AuthControllerChangePasswordRequest {
    return AuthControllerChangePasswordRequestToJSONTyped(json, false);
}

export function AuthControllerChangePasswordRequestToJSONTyped(value?: AuthControllerChangePasswordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'oldPassword': value['oldPassword'],
        'newPassword': value['newPassword'],
        'code': value['code'],
    };
}

