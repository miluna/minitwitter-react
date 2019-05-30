const STORAGE_KEYS = {
    TOKEN: 'authToken'
};

export const getFromSession = (key: string): any | undefined => {
    const k = JSON.parse(sessionStorage.getItem(key) || "{}");
    return (Object.keys(k).length === 0)
        ? undefined
        : k;
};

export const saveToSession = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const deleteFromSession = (key: string) => {
    sessionStorage.removeItem(key);
};


export const saveToken = (token: string) => {
    saveToSession(STORAGE_KEYS.TOKEN, token);
};

export const getToken = (): string | undefined => {
    return getFromSession(STORAGE_KEYS.TOKEN);
};

export const deleteToken = () => {
    deleteFromSession(STORAGE_KEYS.TOKEN);
};

export const getAuthHeaders = () => {
    return {
        'Content-Type': 'application/json',
        Authorization: getToken(),
        Accept: 'application/json',
    };
};