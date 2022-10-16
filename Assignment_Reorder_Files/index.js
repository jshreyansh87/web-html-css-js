const unordered_files = [
    {
        "fileName": "flower",
        "type": "jpg"
    },
    {
        "fileName": "family-video-clip",
        "type": "mp4"
    },
    {
        "fileName": "phone-ringtone",
        "type": "mp3"
    },
    "javascript-exercises.txt",
    "learning-html-basics.rtf",
    {
        "fileName": "friend-video-clip",
        "type": "mp4"
    },
    {
        "fileName": "resume",
        "type": "docx"
    },
    {
        "fileName": "student-report",
        "type": "csv"
    },
    {
        "fileName": "sms-ringtone",
        "type": "mp3"
    },
    "html-basics.pdf",
    "dubsmash.mp4",
    "screen-shot.png",
    {
        "fileName": "faculty-report",
        "type": "xlsx"
    },
    {
        "fileName": "puppy",
        "type": "svg"
    }
];

const ordered_files = {
    "audio": [],
    "video": [],
    "document": [],
    "image": []
};

unordered_files.map((file) => {
    // if file is present as an object
    if (typeof (file) === "object") {
        const file_type = file["type"];
        // if file is an image
        if (file_type === "jpg" || file_type === "jpeg" || file_type === "png" || file_type === "svg" || file_type === "gif" || file_type === "webp") {
            ordered_files["image"].push(`${file["fileName"]}`);
        }
        // if file is an audio
        else if (file_type === "mp3" || file_type === "wav" || file_type === "wma" || file_type === "aac") {
            ordered_files["audio"].push(`${file["fileName"]}`);
        }
        // if file is a video
        else if (file_type === "mp4" || file_type === "mov" || file_type === "wmv" || file_type === "avi") {
            ordered_files["video"].push(`${file["fileName"]}`);
        }
        // if file is a document
        else {
            ordered_files["document"].push(`${file["fileName"]}`);
        }
    }
    // if file is present as a string
    else if (typeof (file) === "string") {
        // regular expression for image
        const reg_img = /\.(png|jpe?g|svg|gif|webp)$/;
        // regular expression for audio
        const reg_audio = /\.(mp3|wav|wma|aac)$/;
        // regular expression for video
        const reg_video = /\.(mp4|mov|wmv|avi)$/;

        // if file is an image
        if (reg_img.test(file)) {
            ordered_files["image"].push(file);
        }
        // if file is an audio
        else if (reg_audio.test(file)) {
            ordered_files["audio"].push(file);
        }
        // if file is a video
        else if (reg_video.test(file)) {
            ordered_files["video"].push(file);
        }
        // if file is a document
        else {
            ordered_files["document"].push(file);
        }
    }
});

console.log(ordered_files);