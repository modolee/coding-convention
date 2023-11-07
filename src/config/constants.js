// 나쁜 예 - 어디에 사용 되는 값인지 알 수 없음
multer({
  limits: { fileSize: 5242880 }, // 5MB 인지 바로 인지할 수 없음
});

// 좋은 예 - 5MB 인지 바로 인지할 수 있음
const ONE_MB = 1048576; // 1 MBytes를 Bytes로 표현

multer({
  limits: { fileSize: 5 * ONE_MB },
});

// 좋은 예
// 5MB 인지 바로 인지할 수는 없지만,
// 반복적으로 사용 된다면 기본 파일 업로드 크기를 변경하고자 할 때
// DEFAULT_UPLOAD_FILE_SIZE 의 값 하나만 수정하면 됨
const DEFAULT_UPLOAD_FILE_SIZE = 5 * ONE_MB; // 기본 업로드 파일 사이즈 지정

multer({
  limits: { fileSize: DEFAULT_UPLOAD_FILE_SIZE },
});
