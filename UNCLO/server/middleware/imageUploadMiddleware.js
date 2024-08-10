import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './upload/images', //path should be defined relative to root directory, not the file where it is defined
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

export default upload;
