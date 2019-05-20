const csv = require('csv-parser');
const fs = require('fs');
const util = require('util');

const file = process.argv[2] || 'songs.csv';

const dir = 'convert ' + new Date().toISOString();
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function getChordProFileContent(line, arrangement) {
    /* * * *
     * PCO export headers
     * * * *

        Id,
        Title,
        CCLI,
        Themes,
        Notes,
        Last Scheduled Date,
        Custom tags...,
        Arrangement 1 Name,
        Arrangement 1 BPM,
        Arrangement 1 Length,
        Arrangement 1 Notes,
        Arrangement 1 Keys,
        Arrangement 1 Chord Chart,
        Arrangement 1 Chord Chart Key,
        Arrangement 1 Custom tags...,
        Arrangement x Name,
        ...
    */

    let contentLines = [];
    contentLines.push(util.format('{title: %s}', line.Title));
    line.CCLI && contentLines.push(util.format('{meta: CCLI %s}', line.CCLI));

    const prefix = util.format('Arrangement %d', arrangement);
    contentLines.push(util.format('{key: %s}', line[util.format('%s Chord Chart Key', prefix)]));
    contentLines.push(util.format('{tempo: %s}', line[util.format('%s BPM', prefix)]));
    contentLines.push(util.format(
        '{time: %s}',
        (line[util.format('%s Meter', prefix)] || '4/4') // hard coded since the export doesn't contains
    ));
    contentLines.push(util.format('{duration: %s}', line[util.format('%s Length', prefix)]));

    contentLines.push('\n');

    contentLines.push(line[util.format('%s Chord Chart', prefix)]);

    return contentLines.join('\n');
}

let count = 0;
fs.createReadStream(file)
    .pipe(csv())
    .on('data', (line) => {
        let arrangement = 1;
        while (line[util.format('Arrangement %d Name', arrangement)]) {
            const content = getChordProFileContent(line, arrangement);
            const arrangementName = line[util.format('Arrangement %d Name', arrangement)];
            const postfix = arrangementName === 'Normál' ? '' : '-' + arrangementName;
            const fileName = line.Title + postfix + '.cho';
            fs.writeFile(dir + '/' + fileName, content, function(e) {
                if (e) {
                    console.error(e);
                } else {
                    console.log('created: ' + fileName);
                }
            });
            arrangement++;
        }

        count++;
    })
    .on('end', () => {
        console.log('conversion of %d lines ended', count);
    });
