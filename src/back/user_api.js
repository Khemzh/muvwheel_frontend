export function islogin() {
    let ret = false
    if (localStorage.getItem("user") != null) {
        ret = true
    }
    return ret
}

export function setuser(option) {
    let key = option.key || null
    let value = option.value || null
    if (key == null || value == null) {
        return false
    }
    if (localStorage.getItem("user") == null) {
        localStorage.setItem("user", JSON.stringify({}))
    }
    let user = JSON.parse(localStorage.getItem("user"))
    user[key] = value
    localStorage.setItem("user", JSON.stringify(user))
    return true
}

export function getuser(key) {
    if (localStorage.getItem("user") == null) {
        return null
    }
    let user = JSON.parse(localStorage.getItem("user"))
    return user[key]
}

export function signout() {
    localStorage.removeItem("user")
    return true
}

