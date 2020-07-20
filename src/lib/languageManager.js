import _ from 'lodash';

/**
 * import languageManager from '../language/languageManager';
 * languageManager.getMessage(commonState, titleKey)
 */
class LanguageManager {
    static _labels = {};

    static getLabel(id, defaultValue) {

        if (_.isNil(LanguageManager._labels))
            console.error('No labels!');

        try {
            const splits = id.split('.');
            let message = LanguageManager._labels;
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
     * Labels: { myobje: {
     *               internalValue: {
     *                  value: 'My Label'
     *               }
     *           }
     *        }
     * 
     * 
     * @param {Object with the dictionary} labels 
     */
    static setLabels(labels) {
        LanguageManager._labels = labels;
    }
}

export default LanguageManager;
