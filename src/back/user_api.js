export function islogin() {
    ret = false
    if (localStorage.getItem("user") != null) {
        ret = true
    }
    return ret
}

