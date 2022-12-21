export const accessTokenData =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY3MTQ0NTIwMiwiZXhwIjoxNjcxNDUyNDAyfQ.jPfeiOo6o5vtT3o5U5ThtYsgSVJQqmtypSvMb0e_5mM';

export const feedData = {
    author: {
        id: 1,
        nickname: '봄봄',
        profile_image_url:
            'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    },
    id: 1,
    category: {
        id: 1,
        text: '테니스',
    },
    location: {
        longitude: 222.333,
        latitude: 222.333,
        place: '서울',
        place_detail: '어딘가',
    },
    title: ' [수정] 오늘 날씨가 좋으네요',
    content: '러닝하실분 찾아요',
    likes: 2,
    liked: false,
    images: [],
    created_at: null,
    updated_at: '2022-12-08T09:19:06.570036',
};

export const areaInfos = [
    { name: '강동구', latitude: 37.530126, longitude: 127.1237708 },
    { name: '송파구', latitude: 37.5145636, longitude: 127.1059186 },
    { name: '강남구', latitude: 37.517305, longitude: 127.047502 },
    { name: '서초구', latitude: 37.483569, longitude: 127.032598 },
    { name: '관악구', latitude: 37.4781549, longitude: 126.9514847 },
    { name: '동작구', latitude: 37.51245, longitude: 126.9395 },
    { name: '영등포구', latitude: 37.526436, longitude: 126.896004 },
    { name: '금천구', latitude: 37.4568644, longitude: 126.8955105 },
    { name: '구로구', latitude: 37.495472, longitude: 126.887536 },
    { name: '강서구', latitude: 37.550937, longitude: 126.849642 },
    { name: '양천구', latitude: 37.517016, longitude: 126.866642 },
    { name: '마포구', latitude: 37.5663245, longitude: 126.901491 },
    { name: '서대문구', latitude: 37.579225, longitude: 126.9368 },
    { name: '은평구', latitude: 37.602784, longitude: 126.929164 },
    { name: '노원구', latitude: 37.654358, longitude: 127.056473 },
    { name: '도봉구', latitude: 37.668768, longitude: 127.047163 },
    { name: '강북구', latitude: 37.6397819, longitude: 127.0256135 },
    { name: '성북구', latitude: 37.5894, longitude: 127.016749 },
    { name: '중랑구', latitude: 37.6063242, longitude: 127.0925842 },
    { name: '동대문구', latitude: 37.574524, longitude: 127.03965 },
    { name: '광진구', latitude: 37.538617, longitude: 127.082375 },
    { name: '성동구', latitude: 37.563456, longitude: 127.036821 },
    { name: '용산구', latitude: 37.532527, longitude: 126.99049 },
    { name: '중구', latitude: 37.563843, longitude: 126.997602 },
    { name: '종로구', latitude: 37.5735207, longitude: 126.9788345 },
];

export const sportCategories = [
    { id: 1, name: '테니스' },
    { id: 2, name: '️축구' },
    { id: 3, name: '농구' },
    { id: 4, name: '배드민턴' },
    { id: 5, name: '러닝' },
    { id: 6, name: '복싱' },
];

export const meData = {
    id: 7,
    email: 'jinlog9@gmail.com',
    nickname: 'Muffin',
    profile_image:
        'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    categories: [
        { id: 3, name: '농구', favorite: true },
        { id: 5, name: '러닝', favorite: true },
        { id: 4, name: '배드민턴', favorite: false },
        { id: 6, name: '복싱', favorite: true },
        { id: 2, name: '️축구', favorite: true },
        { id: 1, name: '테니스', favorite: false },
    ],
};
