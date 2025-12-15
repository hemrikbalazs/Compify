/**
 * @param {string} filename 
 * @returns {Promise} Promise that resolves to the JS Object fetched from
 * `./resources/${filename}.json
 */
export async function objFromJson(filename) {
        const response = await fetch(`./resources/${filename}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filename}`);
        }
        return await response.json();
}