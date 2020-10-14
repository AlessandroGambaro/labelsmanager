class LanguageManager {
    /**
     * @param {This should be in the Global APP state} labels 
     * @param {Label id} id 
     * @param {Default value if label id is not present} defaultValue 
     */
    static getLabel(labels, id, defaultValue) {

        if (labels === null || labels === undefined)
            return defaultValue || '';

        try {
            const splits = id.split('.');
            let message = labels;
            for (let index = 0; index < splits.length; index++) {
                const element = splits[index];
                message = message[element];
            }
            if (message !== null && message !== undefined)
                return message;

            return defaultValue ? defaultValue : id;
        } catch (ex) {
            return defaultValue ? defaultValue : id;
        }
    }

    /**
     * @param {ex-IT, en-US, etc} locale 
     */
    static async loadLabels(locale = 'en-US') {
        const fileToBeLoaded = `./labels/${locale}.json`;

        try {
            const res = await fetch(fileToBeLoaded, { headers: { "Content-Type": "application/json; charset=utf-8" } });
            return await res.json();
        }
        catch (err) {
            console.log("Problem loading the Site Labels");
        }
    }
}

export default LanguageManager;
