const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public', 'sequence');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    
    files.forEach((file) => {
        // Match frame_XXX
        const match = file.match(/frame_(\d+)/);
        if (match) {
            const frameNumber = match[1];
            const newFilename = `${frameNumber}.png`; // Keeping 3 digits? match[1] depends on regex.
            // actually the regex \d+ will catch 000. so it stays 000.
            
            const oldPath = path.join(directoryPath, file);
            const newPath = path.join(directoryPath, newFilename);
            
            fs.rename(oldPath, newPath, (err) => {
                if (err) console.log('ERROR: ' + err);
                else console.log(`Renamed ${file} to ${newFilename}`);
            });
        }
    });
});
