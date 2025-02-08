/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthControllerChangePasswordRequest,
  AuthControllerDisableMfaRequest,
  AuthControllerEnableMfaRequest,
  AuthControllerForgotPasswordRequest,
  AuthControllerRefreshTokenRequest,
  AuthControllerSetUpMfaRequest,
  AuthControllerSigninConfirmRequest,
  AuthControllerSigninRequest,
  AuthControllerSignupRequest,
} from '../models/index';
import {
    AuthControllerChangePasswordRequestFromJSON,
    AuthControllerChangePasswordRequestToJSON,
    AuthControllerDisableMfaRequestFromJSON,
    AuthControllerDisableMfaRequestToJSON,
    AuthControllerEnableMfaRequestFromJSON,
    AuthControllerEnableMfaRequestToJSON,
    AuthControllerForgotPasswordRequestFromJSON,
    AuthControllerForgotPasswordRequestToJSON,
    AuthControllerRefreshTokenRequestFromJSON,
    AuthControllerRefreshTokenRequestToJSON,
    AuthControllerSetUpMfaRequestFromJSON,
    AuthControllerSetUpMfaRequestToJSON,
    AuthControllerSigninConfirmRequestFromJSON,
    AuthControllerSigninConfirmRequestToJSON,
    AuthControllerSigninRequestFromJSON,
    AuthControllerSigninRequestToJSON,
    AuthControllerSignupRequestFromJSON,
    AuthControllerSignupRequestToJSON,
} from '../models/index';

export interface AuthControllerChangePasswordOperationRequest {
    AuthControllerChangePasswordRequest: AuthControllerChangePasswordRequest;
}

export interface AuthControllerDisableMfaOperationRequest {
    AuthControllerDisableMfaRequest: AuthControllerDisableMfaRequest;
}

export interface AuthControllerEnableMfaOperationRequest {
    AuthControllerEnableMfaRequest: AuthControllerEnableMfaRequest;
}

export interface AuthControllerForgotPasswordOperationRequest {
    AuthControllerForgotPasswordRequest: AuthControllerForgotPasswordRequest;
}

export interface AuthControllerForgotPasswordConfirmRequest {
    AuthControllerSigninRequest: AuthControllerSigninRequest;
}

export interface AuthControllerGetRefreshTokenRequest {
    AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest;
}

export interface AuthControllerRefreshTokenOperationRequest {
    AuthControllerRefreshTokenRequest: AuthControllerRefreshTokenRequest;
}

export interface AuthControllerSetUpMfaOperationRequest {
    AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest;
}

export interface AuthControllerSigninOperationRequest {
    AuthControllerSigninRequest: AuthControllerSigninRequest;
}

export interface AuthControllerSigninConfirmOperationRequest {
    AuthControllerSigninConfirmRequest: AuthControllerSigninConfirmRequest;
}

export interface AuthControllerSignupOperationRequest {
    AuthControllerSignupRequest: AuthControllerSignupRequest;
}

/**
 * AuthApi - interface
 * 
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
    /**
     * 
     * @param {AuthControllerChangePasswordRequest} AuthControllerChangePasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerChangePasswordRaw(requestParameters: AuthControllerChangePasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerChangePassword(AuthControllerChangePasswordRequest: AuthControllerChangePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerDisableMfaRequest} AuthControllerDisableMfaRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerDisableMfaRaw(requestParameters: AuthControllerDisableMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerDisableMfa(AuthControllerDisableMfaRequest: AuthControllerDisableMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerEnableMfaRequest} AuthControllerEnableMfaRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerEnableMfaRaw(requestParameters: AuthControllerEnableMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerEnableMfa(AuthControllerEnableMfaRequest: AuthControllerEnableMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerForgotPasswordRequest} AuthControllerForgotPasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerForgotPasswordRaw(requestParameters: AuthControllerForgotPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerForgotPassword(AuthControllerForgotPasswordRequest: AuthControllerForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSigninRequest} AuthControllerSigninRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerForgotPasswordConfirmRaw(requestParameters: AuthControllerForgotPasswordConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerForgotPasswordConfirm(AuthControllerSigninRequest: AuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSetUpMfaRequest} AuthControllerSetUpMfaRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerGetRefreshTokenRaw(requestParameters: AuthControllerGetRefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerGetRefreshToken(AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    authControllerMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {AuthControllerRefreshTokenRequest} AuthControllerRefreshTokenRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerRefreshTokenRaw(requestParameters: AuthControllerRefreshTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerRefreshToken(AuthControllerRefreshTokenRequest: AuthControllerRefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSetUpMfaRequest} AuthControllerSetUpMfaRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerSetUpMfaRaw(requestParameters: AuthControllerSetUpMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerSetUpMfa(AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSigninRequest} AuthControllerSigninRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerSigninRaw(requestParameters: AuthControllerSigninOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerSignin(AuthControllerSigninRequest: AuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSigninConfirmRequest} AuthControllerSigninConfirmRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerSigninConfirmRaw(requestParameters: AuthControllerSigninConfirmOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerSigninConfirm(AuthControllerSigninConfirmRequest: AuthControllerSigninConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {AuthControllerSignupRequest} AuthControllerSignupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerSignupRaw(requestParameters: AuthControllerSignupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    authControllerSignup(AuthControllerSignupRequest: AuthControllerSignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {

    /**
     */
    async authControllerChangePasswordRaw(requestParameters: AuthControllerChangePasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerChangePasswordRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerChangePasswordRequest',
                'Required parameter "AuthControllerChangePasswordRequest" was null or undefined when calling authControllerChangePassword().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/change-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerChangePasswordRequestToJSON(requestParameters['AuthControllerChangePasswordRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerChangePassword(AuthControllerChangePasswordRequest: AuthControllerChangePasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerChangePasswordRaw({ AuthControllerChangePasswordRequest: AuthControllerChangePasswordRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerDisableMfaRaw(requestParameters: AuthControllerDisableMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerDisableMfaRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerDisableMfaRequest',
                'Required parameter "AuthControllerDisableMfaRequest" was null or undefined when calling authControllerDisableMfa().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/mfa/disable`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerDisableMfaRequestToJSON(requestParameters['AuthControllerDisableMfaRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerDisableMfa(AuthControllerDisableMfaRequest: AuthControllerDisableMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerDisableMfaRaw({ AuthControllerDisableMfaRequest: AuthControllerDisableMfaRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerEnableMfaRaw(requestParameters: AuthControllerEnableMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerEnableMfaRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerEnableMfaRequest',
                'Required parameter "AuthControllerEnableMfaRequest" was null or undefined when calling authControllerEnableMfa().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/mfa/enable`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerEnableMfaRequestToJSON(requestParameters['AuthControllerEnableMfaRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerEnableMfa(AuthControllerEnableMfaRequest: AuthControllerEnableMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerEnableMfaRaw({ AuthControllerEnableMfaRequest: AuthControllerEnableMfaRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerForgotPasswordRaw(requestParameters: AuthControllerForgotPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerForgotPasswordRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerForgotPasswordRequest',
                'Required parameter "AuthControllerForgotPasswordRequest" was null or undefined when calling authControllerForgotPassword().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/forgot-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerForgotPasswordRequestToJSON(requestParameters['AuthControllerForgotPasswordRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerForgotPassword(AuthControllerForgotPasswordRequest: AuthControllerForgotPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerForgotPasswordRaw({ AuthControllerForgotPasswordRequest: AuthControllerForgotPasswordRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerForgotPasswordConfirmRaw(requestParameters: AuthControllerForgotPasswordConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSigninRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSigninRequest',
                'Required parameter "AuthControllerSigninRequest" was null or undefined when calling authControllerForgotPasswordConfirm().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/forgot-password/confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSigninRequestToJSON(requestParameters['AuthControllerSigninRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerForgotPasswordConfirm(AuthControllerSigninRequest: AuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerForgotPasswordConfirmRaw({ AuthControllerSigninRequest: AuthControllerSigninRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerGetRefreshTokenRaw(requestParameters: AuthControllerGetRefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSetUpMfaRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSetUpMfaRequest',
                'Required parameter "AuthControllerSetUpMfaRequest" was null or undefined when calling authControllerGetRefreshToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/get-refresh-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSetUpMfaRequestToJSON(requestParameters['AuthControllerSetUpMfaRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerGetRefreshToken(AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerGetRefreshTokenRaw({ AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/auth`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async authControllerMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authControllerMeRaw(initOverrides);
    }

    /**
     */
    async authControllerRefreshTokenRaw(requestParameters: AuthControllerRefreshTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerRefreshTokenRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerRefreshTokenRequest',
                'Required parameter "AuthControllerRefreshTokenRequest" was null or undefined when calling authControllerRefreshToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/refresh-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerRefreshTokenRequestToJSON(requestParameters['AuthControllerRefreshTokenRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerRefreshToken(AuthControllerRefreshTokenRequest: AuthControllerRefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerRefreshTokenRaw({ AuthControllerRefreshTokenRequest: AuthControllerRefreshTokenRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerSetUpMfaRaw(requestParameters: AuthControllerSetUpMfaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSetUpMfaRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSetUpMfaRequest',
                'Required parameter "AuthControllerSetUpMfaRequest" was null or undefined when calling authControllerSetUpMfa().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/mfa/set-up`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSetUpMfaRequestToJSON(requestParameters['AuthControllerSetUpMfaRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerSetUpMfa(AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerSetUpMfaRaw({ AuthControllerSetUpMfaRequest: AuthControllerSetUpMfaRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerSigninRaw(requestParameters: AuthControllerSigninOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSigninRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSigninRequest',
                'Required parameter "AuthControllerSigninRequest" was null or undefined when calling authControllerSignin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/sign-in`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSigninRequestToJSON(requestParameters['AuthControllerSigninRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerSignin(AuthControllerSigninRequest: AuthControllerSigninRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerSigninRaw({ AuthControllerSigninRequest: AuthControllerSigninRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerSigninConfirmRaw(requestParameters: AuthControllerSigninConfirmOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSigninConfirmRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSigninConfirmRequest',
                'Required parameter "AuthControllerSigninConfirmRequest" was null or undefined when calling authControllerSigninConfirm().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/sign-up/confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSigninConfirmRequestToJSON(requestParameters['AuthControllerSigninConfirmRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerSigninConfirm(AuthControllerSigninConfirmRequest: AuthControllerSigninConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerSigninConfirmRaw({ AuthControllerSigninConfirmRequest: AuthControllerSigninConfirmRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async authControllerSignupRaw(requestParameters: AuthControllerSignupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['AuthControllerSignupRequest'] == null) {
            throw new runtime.RequiredError(
                'AuthControllerSignupRequest',
                'Required parameter "AuthControllerSignupRequest" was null or undefined when calling authControllerSignup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/sign-up`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthControllerSignupRequestToJSON(requestParameters['AuthControllerSignupRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async authControllerSignup(AuthControllerSignupRequest: AuthControllerSignupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.authControllerSignupRaw({ AuthControllerSignupRequest: AuthControllerSignupRequest }, initOverrides);
        return await response.value();
    }

}
