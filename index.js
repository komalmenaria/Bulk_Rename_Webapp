const fs = require("fs");
const path = require('path');
const replaceThis = "file";
const replaceWith = "kichu";
const preview = false;
const folder = __dirname

try {
  fs.readdir(folder, (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newFile = path.join(folder , item.replace(replaceThis, replaceWith))
      let oldFile = path.join(folder , item)
      
      if (!preview) {
          fs.rename(oldFile, newFile, () => {
            console.log("rename success");

          });
        
      }
      else{
        if (oldFile != newFile) {
            console.log(oldFile + "  will be rename to " + newFile)
        }
      }
    }

    console.error(err);
  });
} catch (err) {
  console.error(err);
}
