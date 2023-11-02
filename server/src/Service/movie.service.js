const superagent = require("superagent");
const cheerio = require("cheerio");
const axios = require("axios");

const movieDownloadlink = async (name, year) => {
    const movieName = name.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    const url = `https://baiscopedownloads.co/${movieName}-${year}/`

    const res = await superagent.get(url)
    const $ = cheerio.load(res.text);
    const usersdriveLink = []
    const dropLink = []
    const links = $("p a")
        .map((i, el) => $(el).attr('href'))
        .get();

    const descriptions = $("p span")
        .map((i, el) => $(el).s)
        .get();

    links.map((link, index) => {
        const splitLink = link.split('/')
 
        if (splitLink[2] === 'usersdrive.com') {
            usersdriveLink.push(link)
        }
        if(splitLink[2] === 'drop.download'){
            dropLink.push(link)
        }
    })

    return {usersdriveLink, dropLink};
}


module.exports = movieDownloadlink


