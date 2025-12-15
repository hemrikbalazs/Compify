import { Dirs } from "./dirs.js";
import { HtmlHandler } from "./htmlHandler.js";

/**
 * the main class of the Compify libary
 * 
 * use the five public static functions of this class
 * to insert components into the DOM of your html pages
 */
export class Compify {

    /**
     * @param {string} filename of the component
     * @param {Dirs} name of the component's parent directory under ./components 
     * @param {function<HTMLElement>} callback function that receives the component
     * as parameter
     * @returns {Promise<HTMLElement>} Promise that resolves to the added component 
     */
    static async #addComponent(filename, directory, callback) {
        const html = await HtmlHandler.fetchHtml(filename, directory);
        const component = HtmlHandler.htmlToComponent(html);
        callback(component);
        return component;
    }

    /**
     * @param {HTMLElement} root element to append to
     * @param {string} filename of the component
     * @param {Dirs} name of the component's parent directory under ./components
     * @returns {Promise<HTMLElement>} Promise that resolves to the appended component
     */
    static async appendComponent(root, filename, directory) {
        return this.#addComponent(filename, directory, (component) => 
            root.insertAdjacentElement("beforeend", component));
    }

    /**
     * @param {HTMLElement} root element to prepend to
     * @param {string} filename of the component
     * @param {Dirs} name of the component's parent directory under ./components
     * @returns {Promise<HTMLElement>} Promise that resolves to the prepended component
     */
    static async prependComponent(root, filename, directory) {
        return this.#addComponent(filename, directory, (component) =>
        root.insertAdjacentElement("afterbegin", component));
    }

    /**
     * @param {HTMLElement} root element to insert before
     * @param {string} filename of the component
     * @param {Dirs} name of the component's parent directory under ./components
     * @returns {Promise<HTMLElement>} Promise that resolves to the inserted component
     */
    static async preInsertComponent(root, filename, directory) {
        return this.#addComponent(filename, directory, (component) =>
        root.insertAdjacentElement("beforebegin", component));
    }

    /**
     * @param {HTMLElement} root element to insert after
     * @param {string} filename of the component
     * @param {Dirs} name of the component's parent directory under ./components
     * @returns {Promise<HTMLElement>} Promise that resolves to the inserted component
     */
    static async postInsertComponent(root, filename, directory) {
        return this.#addComponent(filename, directory, (component) =>
        root.insertAdjacentElement("afterend", component));
    }

    /**
     * @param {HTMLElement} root element of the query
     * @param {string} value of the data-query-id attribute of the requested element
     * @returns {HTMLElement} ested element inside the root element with the matching
     * data-query-id attribute
     */
    static getNestedElement(root, dataQueryId) {
        return root.querySelector(`[data-query-id="${dataQueryId}"]`);
    }
}