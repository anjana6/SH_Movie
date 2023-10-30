const superagent = require("superagent");
const cheerio = require("cheerio");
const axios = require("axios");

const movieDownloadlink = async (name, year) => {
    // console.log(name, year)
    const movieName = name.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    const url = `https://piratelk.com/${movieName}-${year}-sinhala-subtitles/`

    console.log('uuuuuuuuuuuu', url)
    // const url = "https://piratelk.com/saw-x-2023-sinhala-subtitles/";
    const response = await axios.get(url);

    const html = response.data;
    const $ = cheerio.load(html);

    const links = [];
    const descriptions = []
    const movieLinks = []
    $(".su-button").each((_idx, el) => links.push($(el).attr('href')));
    $(".su-button").each((_idx, el) => descriptions.push($(el).text()));

    console.log('lllllllllllllllllll', links)
    console.log('dddddddddddddd',descriptions)

    links.map((link, index) => {
        const splitLink = link.split('/')
        const splitDes = descriptions[index].split(' ')
        if (splitLink[2] === 'usersdrive.com') {
            const data = {
                link: link,
                details: `${splitDes[2]} | ${splitDes[3]} | ${splitDes[1]}`
            }
            movieLinks.push(data)
        }
    })

    return movieLinks;
    // await superagent.get(url).end((err, res) => {
    //     if (err) {
    //         console.error("Error fetching the website:", err);
    //         return;
    //     }
    //     // let linkList = []
    //     const $ = cheerio.load(res.text);
    //     // Replace the following selectors with the actual HTML elements you want to scrape
    //     const links = $(".su-button")
    //         .map((i, el) => $(el).attr('href'))
    //         .get();
    //     const descriptions = $(".su-button")
    //         .map((i, el) => $(el).text())
    //         .get();
    //     // Display the scraped data
    //     // console.log('link', links)
    //     // console.log('des', descriptions)
    //     const linkList = links.map((link, index) => {
    //         const splitLink = link.split('/')
    //         const splitDes = descriptions[index].split(' ')
    //         // console.log('aaaaaaaaa', d)
    //         if (splitLink[2] === 'usersdrive.com') {
    //             const data = {
    //                 link: link,
    //                 details: `${splitDes[2]} | ${splitDes[3]} | ${splitDes[1]}`
    //             }
    //             return data
    //         }
    //     })
    //     console.log('llllllllllllld', linkList)
    //     return linkList
    //     // descriptions.map(tit => { console.log("des:", tit) })
    // });
    // console.log('eeeeeeeeeeeeend')
}

module.exports = movieDownloadlink


