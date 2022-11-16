export const checkName = (name: string) => {
    const regex = /^[가-힣a-zA-Z]+$/;
    return regex.test(name);
};

export const checkNickname = (nickname: string) => {
    const regex = /^[가-힣|a-z|A-Z|0-9|]{1,6}$/;

    return regex.test(nickname);
};

export const checkEmail = (email: string) => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
};

export const checkPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,25}$/;
    return regex.test(password);
};

export const checkPassword2 = (password: string, password2: string) =>
    password === password2;

export const checkTel = (tel: string) => {
    const regex = /^01([0|1|6|7|8|9])[0-9]{8}$/g;
    return regex.test(tel);
};
