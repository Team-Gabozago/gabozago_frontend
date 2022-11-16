export type PostSignupBodyType = {
    name: string;
    nickname: string;
    email: string;
    password: string;
    password2: string;
    tel: string;
};

export type PostLoginBodyType = {
    email: string;
    password: string;
};
