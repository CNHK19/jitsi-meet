/* @flow */

import {
    getCalendarEntries,
    googleApi,
    loadGoogleAPI,
    signIn,
    signOut,
    updateProfile
} from '../../google-api';

declare var config: Object;

/**
 * A stateless collection of action creators that implements the expected
 * interface for interacting with the Google API in order to get calendar data.
 *
 * @type {Object}
 */
export const googleCalendarApi = {
    /**
     * Retrieves the current calendar events.
     *
     * @param {number} fetchStartDays - The number of days to go back
     * when fetching.
     * @param {number} fetchEndDays - The number of days to fetch.
     * @returns {function(Dispatch<*>): Promise<CalendarEntries>}
     */
    getCalendarEntries,

    /**
     * Returns the email address for the currently logged in user.
     *
     * @returns {function(Dispatch<*>): Promise<string|never>}
     */
    getCurrentEmail() {
        return updateProfile();
    },

    /**
     * Initializes the google api if needed.
     *
     * @returns {function(Dispatch<*>): Promise<void>}
     */
    load() {
        return (dispatch: Dispatch<*>) => dispatch(
            loadGoogleAPI(config.googleApiApplicationClientID));
    },

    /**
     * Prompts the participant to sign in to the Google API Client Library.
     *
     * @returns {function(Dispatch<*>): Promise<string|never>}
     */
    signIn,

    /**
     * Sign out from the Google API Client Library.
     *
     * @returns {function(Dispatch<*>): Promise<string|never>}
     */
    signOut,

    /**
     * Returns whether or not the user is currently signed in.
     *
     * @returns {function(): Promise<boolean>}
     */
    _isSignedIn() {
        return () => googleApi.isSignedIn();
    }
};
