import _ from 'lodash';

/**
 * import languageManager from '../language/languageManager';
 * languageManager.getMessage(commonState, titleKey)
 */
class LanguageManager {
    /**
     * 
     * @param {This should be in the Global APP state} labels 
     * @param {Label id} id 
     * @param {Default value if label id is not present} defaultValue 
     */
    static getLabel(labels, id, defaultValue) {

        if (_.isNil(labels))
            console.error('No labels!');

        try {
            const splits = id.split('.');
            let message = labels;
            for (let index = 0; index < splits.length; index++) {
                const element = splits[index];
                message = message[element];
            }
            if (!_.isNil(message))
                return message;

            return defaultValue ? defaultValue : id;
        } catch (ex) {
            return defaultValue ? defaultValue : id;
        }
    }

    /**
     * @param {ex-IT, en-US, etc} locale 
     */
    static loadLabels(locale = 'en-US') {
        const fileToBeLoaded = './labels/' + locale + '.json';

        return fetch(fileToBeLoaded, { headers: { "Content-Type": "application/json; charset=utf-8" } })
            .then(res => res.json())
            .then(response => {
                return response;
            })
            .catch(err => {
                console.log("Problem loading the Site Labels");
            });
    }
}

export default LanguageManager;
