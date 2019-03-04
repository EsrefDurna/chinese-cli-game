const path = require('path');
const fs = require('fs');

function ReadFile(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  return data;
}
function makePath(folderPath) {
  if (fs.existsSync(folderPath) === false) {
    fs.mkdirSync(folderPath);
  }
}

function getFilePathName(filename, pathName = []) {
  if (!filename) {
    throw new Error('file name is empty');
  }
  let filepath = path.join(__dirname);
  makePath(filepath);
  for (let i = 0; i < pathName.length; i += 1) {
    filepath = path.join(filepath, pathName[i]);
    makePath(filepath);
  }
  return path.join(filepath, filename);
}

function writeTextToFile(filename, data, pathName = []) {
  try {
    const fullFilePath = getFilePathName(filename, pathName);
    fs.writeFileSync(fullFilePath, data);
  } catch (err) {
    console.error(err.message);
    return false;
  }
  return true;
}
function writeJSONToFile(filename, data, pathName = []) {
  try {
    const fullFilePath = getFilePathName(filename, pathName);
    fs.writeFileSync(fullFilePath, JSON.stringify(data, null, 4));
  } catch (err) {
    console.error(err.message);
    return false;
  }
  return true;
}

function writeBufferToFile(filename, buffer, pathName = []) {
  try {
    const fullFilePath = getFilePathName(filename, pathName);
    fs.open(fullFilePath, 'w', (err, fd) => {
      if (err) {
        throw new Error(`error opening file: ${err}`);
      }
      fs.write(fd, buffer, 0, buffer.length, null, (fserr) => {
        if (fserr) {
          throw new Error(`error writing file: ${fserr}`);
        }
        fs.close(fd, () => {
          console.log(`file written: ${fullFilePath}`);
        });
      });
    });
  } catch (err) {
    console.error(err.message);
    return false;
  }
  return true;
}
function readJSONFile(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
module.exports = {
  getFilePathName,
  makePath,
  writeTextToFile,
  writeJSONToFile,
  writeBufferToFile,
  ReadFile,
  readJSONFile,
};
