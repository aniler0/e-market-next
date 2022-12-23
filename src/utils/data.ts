import { promises as fs } from 'fs';
import path from 'path';

async function getProductsData() {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //Read the json data file data.json
    const fileContents = await fs.readFile(
        jsonDirectory + '/data.json',
        'utf8',
    );
    return JSON.parse(fileContents);
}
export default getProductsData;
