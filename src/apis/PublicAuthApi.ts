/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PublicAuthControllerMe200Response,
  PublicAuthControllerSignin200Response,
  PublicAuthControllerSigninRequest,
  PublicAuthControllerSignupRequest,
} from '../models/index';
import {
    PublicAuthControllerMe200ResponseFromJSON,
    PublicAuthControllerMe200ResponseToJSON,
    PublicAuthControllerSignin200ResponseFromJSON,
    PublicAuthControllerSignin200ResponseToJSON,
    PublicAuthControllerSigninRequestFromJSON,
    PublicAuthControllerSigninRequestToJSON,
    PublicAuthControllerSignupRequestFromJSON,
    PublicAuthControllerSignupRequestToJSON,
} from '../models/index';

export interface PublicAuthControllerActionRequest {
    lang: string;
    continueUrl: string;
    apiKey: string;
    oobCode: string;
    mode: PublicAuthControllerActionModeEnum;
}

export interface PublicAuthControllerSigninOperationRequest {
    PublicAuthControllerSigninRequest: PublicAuthControllerSigninRequest;
}

export interface PublicAuthControllerSignupOperationRequest {
    PublicAuthControllerSignupRequest: PublicAuthControllerSignupRequest;
}

/**
 * PublicAuthApi - interface
 * 
 * @export
 * @interface PublicAuthApiInterface
 */
export interface PublicAuthApiInterface {
    /**
     * 
     * @param {string} lang 
     * @param {string} continueUrl 
     * @param {string} apiKey 
     * @param {string} oobCode 
     * @param {'resetPassword' | 'recoverEmail' | 'verifyEmail'} mode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerActionRaw(requestParameters: PublicAuthControllerActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    publicAuthControllerAction(lang: string, continueUrl: string, apiKey: string, oobCode: string, mode: PublicAuthControllerActionModeEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerGoogleRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    publicAuthControllerGoogle(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerGoogleCallbackRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    publicAuthControllerGoogleCallback(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerMe200Response>>;

    /**
     */
    publicAuthControllerMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerMe200Response>;

    /**
     * 
     * @param {PublicAuthControllerSigninRequest} PublicAuthControllerSigninRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerSigninRaw(requestParameters: PublicAuthControllerSigninOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerSignin200Response>>;

    /**
     */
    publicAuthControllerSignin(PublicAuthControllerSigninRequest: PublicAuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerSignin200Response>;

    /**
     * 
     * @param {PublicAuthControllerSignupRequest} PublicAuthControllerSignupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicAuthApiInterface
     */
    publicAuthControllerSignupRaw(requestParameters: PublicAuthControllerSignupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerSignin200Response>>;

    /**
     */
    publicAuthControllerSignup(PublicAuthControllerSignupRequest: PublicAuthControllerSignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerSignin200Response>;

}

/**
 * 
 */
export class PublicAuthApi extends runtime.BaseAPI implements PublicAuthApiInterface {

    /**
     */
    async publicAuthControllerActionRaw(requestParameters: PublicAuthControllerActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['lang'] == null) {
            throw new runtime.RequiredError(
                'lang',
                'Required parameter "lang" was null or undefined when calling publicAuthControllerAction().'
            );
        }

        if (requestParameters['continueUrl'] == null) {
            throw new runtime.RequiredError(
                'continueUrl',
                'Required parameter "continueUrl" was null or undefined when calling publicAuthControllerAction().'
            );
        }

        if (requestParameters['apiKey'] == null) {
            throw new runtime.RequiredError(
                'apiKey',
                'Required parameter "apiKey" was null or undefined when calling publicAuthControllerAction().'
            );
        }

        if (requestParameters['oobCode'] == null) {
            throw new runtime.RequiredError(
                'oobCode',
                'Required parameter "oobCode" was null or undefined when calling publicAuthControllerAction().'
            );
        }

        if (requestParameters['mode'] == null) {
            throw new runtime.RequiredError(
                'mode',
                'Required parameter "mode" was null or undefined when calling publicAuthControllerAction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['lang'] != null) {
            queryParameters['lang'] = requestParameters['lang'];
        }

        if (requestParameters['continueUrl'] != null) {
            queryParameters['continueUrl'] = requestParameters['continueUrl'];
        }

        if (requestParameters['apiKey'] != null) {
            queryParameters['apiKey'] = requestParameters['apiKey'];
        }

        if (requestParameters['oobCode'] != null) {
            queryParameters['oobCode'] = requestParameters['oobCode'];
        }

        if (requestParameters['mode'] != null) {
            queryParameters['mode'] = requestParameters['mode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/public/action`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async publicAuthControllerAction(lang: string, continueUrl: string, apiKey: string, oobCode: string, mode: PublicAuthControllerActionModeEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publicAuthControllerActionRaw({ lang: lang, continueUrl: continueUrl, apiKey: apiKey, oobCode: oobCode, mode: mode }, initOverrides);
    }

    /**
     */
    async publicAuthControllerGoogleRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/public/signin/google`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async publicAuthControllerGoogle(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publicAuthControllerGoogleRaw(initOverrides);
    }

    /**
     */
    async publicAuthControllerGoogleCallbackRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/public/callback/google`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async publicAuthControllerGoogleCallback(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publicAuthControllerGoogleCallbackRaw(initOverrides);
    }

    /**
     */
    async publicAuthControllerMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerMe200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/public/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicAuthControllerMe200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async publicAuthControllerMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerMe200Response> {
        const response = await this.publicAuthControllerMeRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async publicAuthControllerSigninRaw(requestParameters: PublicAuthControllerSigninOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerSignin200Response>> {
        if (requestParameters['PublicAuthControllerSigninRequest'] == null) {
            throw new runtime.RequiredError(
                'PublicAuthControllerSigninRequest',
                'Required parameter "PublicAuthControllerSigninRequest" was null or undefined when calling publicAuthControllerSignin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/public/signin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PublicAuthControllerSigninRequestToJSON(requestParameters['PublicAuthControllerSigninRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicAuthControllerSignin200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async publicAuthControllerSignin(PublicAuthControllerSigninRequest: PublicAuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerSignin200Response> {
        const response = await this.publicAuthControllerSigninRaw({ PublicAuthControllerSigninRequest: PublicAuthControllerSigninRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async publicAuthControllerSignupRaw(requestParameters: PublicAuthControllerSignupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicAuthControllerSignin200Response>> {
        if (requestParameters['PublicAuthControllerSignupRequest'] == null) {
            throw new runtime.RequiredError(
                'PublicAuthControllerSignupRequest',
                'Required parameter "PublicAuthControllerSignupRequest" was null or undefined when calling publicAuthControllerSignup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/public/signup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PublicAuthControllerSignupRequestToJSON(requestParameters['PublicAuthControllerSignupRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicAuthControllerSignin200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async publicAuthControllerSignup(PublicAuthControllerSignupRequest: PublicAuthControllerSignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicAuthControllerSignin200Response> {
        const response = await this.publicAuthControllerSignupRaw({ PublicAuthControllerSignupRequest: PublicAuthControllerSignupRequest }, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const PublicAuthControllerActionModeEnum = {
    resetPassword: 'resetPassword',
    recoverEmail: 'recoverEmail',
    verifyEmail: 'verifyEmail'
} as const;
export type PublicAuthControllerActionModeEnum = typeof PublicAuthControllerActionModeEnum[keyof typeof PublicAuthControllerActionModeEnum];
