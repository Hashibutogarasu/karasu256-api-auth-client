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
 * @interface AuthControllerSignupRequest
 */
export interface AuthControllerSignupRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSignupRequest
     */
    nickname: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSignupRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerSignupRequest
     */
    password: string;
}

/**
 * Check if a given object implements the AuthControllerSignupRequest interface.
 */
export function instanceOfAuthControllerSignupRequest(value: object): value is AuthControllerSignupRequest {
    if (!('nickname' in value) || value['nickname'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function AuthControllerSignupRequestFromJSON(json: any): AuthControllerSignupRequest {
    return AuthControllerSignupRequestFromJSONTyped(json, false);
}

export function AuthControllerSignupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerSignupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'nickname': json['nickname'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function AuthControllerSignupRequestToJSON(json: any): AuthControllerSignupRequest {
    return AuthControllerSignupRequestToJSONTyped(json, false);
}

export function AuthControllerSignupRequestToJSONTyped(value?: AuthControllerSignupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nickname': value['nickname'],
        'email': value['email'],
        'password': value['password'],
    };
}

