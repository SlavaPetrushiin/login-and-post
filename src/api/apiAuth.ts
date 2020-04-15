interface IResultAuth {
    idToken: string
    expiresIn: string
    errorMessage: string
}

const apiAuth = {
    fetchAuth(username: string, password: string): Promise<IResultAuth>{
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(username === 'Admin' && password === '123123'){
                    res({
                        idToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSld",
                        expiresIn: "3600",
                        errorMessage: ''
                    })
                } else {
                    rej({
                        idToken: "",
                        expiresIn: "",
                        errorMessage: 'Имя пользователя или пароль введены не верно'
                    })
                }
            }, 1000)
        })
    }
};

export default apiAuth;


