import { Dirs } from "./dirs.js";

/**
 * a class referenced by compify.js,
 * 
 * responsible for fetching html files from the dedicated
 * directories under /components and converting them into
 * reusable components (HTMLElement)
 */
export class HtmlHandler {

    /**
     * @param {string} filename 
     * @param {Dirs} stirng type constant from Dirs.... name of directory
     * @returns {Promise} Promise that resolves to the html fragment fetched from
     * `./components/${directory}/${filename}.html`
     */
    static async fetchHtml(filename, directory){
        const response = await fetch(`./components/${directory}/${filename}.html`);
        if (!response.ok) throw new Error(`Failed to load ${filename}`);
        return await response.text();
    }

    /**
     * @param {string} html as string
     * @returns {HTMLElement} HTMLElement
     */
    static htmlToComponent(html) {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }
}