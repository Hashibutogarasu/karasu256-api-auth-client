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
 * @interface AuthControllerEnableMfaRequest
 */
export interface AuthControllerEnableMfaRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableMfaRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableMfaRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableMfaRequest
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableMfaRequest
     */
    deviceName: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableMfaRequest
     */
    answerChallenge: AuthControllerEnableMfaRequestAnswerChallengeEnum;
}


/**
 * @export
 */
export const AuthControllerEnableMfaRequestAnswerChallengeEnum = {
    CUSTOM_CHALLENGE: 'CUSTOM_CHALLENGE',
    MFA_SETUP: 'MFA_SETUP',
    NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED',
    SELECT_MFA_TYPE: 'SELECT_MFA_TYPE',
    SMS_MFA: 'SMS_MFA',
    SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA'
} as const;
export type AuthControllerEnableMfaRequestAnswerChallengeEnum = typeof AuthControllerEnableMfaRequestAnswerChallengeEnum[keyof typeof AuthControllerEnableMfaRequestAnswerChallengeEnum];


/**
 * Check if a given object implements the AuthControllerEnableMfaRequest interface.
 */
export function instanceOfAuthControllerEnableMfaRequest(value: object): value is AuthControllerEnableMfaRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('deviceName' in value) || value['deviceName'] === undefined) return false;
    if (!('answerChallenge' in value) || value['answerChallenge'] === undefined) return false;
    return true;
}

export function AuthControllerEnableMfaRequestFromJSON(json: any): AuthControllerEnableMfaRequest {
    return AuthControllerEnableMfaRequestFromJSONTyped(json, false);
}

export function AuthControllerEnableMfaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerEnableMfaRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'code': json['code'],
        'deviceName': json['deviceName'],
        'answerChallenge': json['answerChallenge'],
    };
}

export function AuthControllerEnableMfaRequestToJSON(json: any): AuthControllerEnableMfaRequest {
    return AuthControllerEnableMfaRequestToJSONTyped(json, false);
}

export function AuthControllerEnableMfaRequestToJSONTyped(value?: AuthControllerEnableMfaRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'password': value['password'],
        'code': value['code'],
        'deviceName': value['deviceName'],
        'answerChallenge': value['answerChallenge'],
    };
}

