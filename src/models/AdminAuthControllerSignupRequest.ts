/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.23
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
 * @interface AdminAuthControllerSignupRequest
 */
export interface AdminAuthControllerSignupRequest {
    /**
     * 
     * @type {string}
     * @memberof AdminAuthControllerSignupRequest
     */
    nickname: string;
    /**
     * 
     * @type {string}
     * @memberof AdminAuthControllerSignupRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AdminAuthControllerSignupRequest
     */
    password: string;
}

/**
 * Check if a given object implements the AdminAuthControllerSignupRequest interface.
 */
export function instanceOfAdminAuthControllerSignupRequest(value: object): value is AdminAuthControllerSignupRequest {
    if (!('nickname' in value) || value['nickname'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function AdminAuthControllerSignupRequestFromJSON(json: any): AdminAuthControllerSignupRequest {
    return AdminAuthControllerSignupRequestFromJSONTyped(json, false);
}

export function AdminAuthControllerSignupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminAuthControllerSignupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'nickname': json['nickname'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function AdminAuthControllerSignupRequestToJSON(json: any): AdminAuthControllerSignupRequest {
    return AdminAuthControllerSignupRequestToJSONTyped(json, false);
}

export function AdminAuthControllerSignupRequestToJSONTyped(value?: AdminAuthControllerSignupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nickname': value['nickname'],
        'email': value['email'],
        'password': value['password'],
    };
}

